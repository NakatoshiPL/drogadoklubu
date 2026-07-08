import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { NextResponse } from "next/server";
import { buildChecklist, type FieldPosition, type TargetCountry } from "@/lib/checklist";

function toNumber(value: FormDataEntryValue | null, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function splitLines(text: string, max = 88) {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (`${current} ${word}`.trim().length <= max) {
      current = `${current} ${word}`.trim();
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function generateChecklistPdf(checklist: ReturnType<typeof buildChecklist>) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  let y = 800;

  page.drawText(checklist.title, {
    x: 40,
    y,
    size: 18,
    font: bold,
    color: rgb(0.1, 0.16, 0.42),
  });
  y -= 26;

  page.drawText(checklist.summary, { x: 40, y, size: 11, font });
  y -= 24;

  page.drawText("Co przygotować przed pierwszym mailem:", {
    x: 40,
    y,
    size: 13,
    font: bold,
  });
  y -= 20;

  for (const item of checklist.items) {
    const wrapped = splitLines(`- ${item}`);
    for (const line of wrapped) {
      page.drawText(line, { x: 48, y, size: 11, font });
      y -= 16;
    }
    y -= 2;
  }

  y -= 8;
  page.drawText("Szkielet wiadomości:", { x: 40, y, size: 13, font: bold });
  y -= 18;

  for (const line of checklist.mailTemplate.split("\n")) {
    for (const wrapped of splitLines(line || " ", 90)) {
      page.drawText(wrapped, { x: 48, y, size: 10, font });
      y -= 14;
      if (y < 60) break;
    }
    if (y < 60) break;
  }

  return Buffer.from(await pdf.save());
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const country = String(formData.get("target-country") ?? "Holandia") as TargetCountry;
  const age = toNumber(formData.get("child-age"), 12);
  const position = String(formData.get("position") ?? "Pomocnik") as FieldPosition;
  const email = String(formData.get("checklist-email") ?? "");

  const checklist = buildChecklist({ country, age, position });
  const pdfBuffer = await generateChecklistPdf(checklist);
  const pdfBase64 = pdfBuffer.toString("base64");

  const webhookUrl = process.env.MAKE_CHECKLIST_WEBHOOK_URL;
  const payload = {
    email,
    country,
    age,
    position,
    checklist,
    pdfBase64,
    fileName: `checklista-${country.toLowerCase()}-${age}.pdf`,
    source: "checklist-generator",
  };

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } else {
    console.info("MAKE_CHECKLIST_WEBHOOK_URL is missing. Payload:", {
      ...payload,
      pdfBase64: "[omitted]",
    });
  }

  return NextResponse.redirect(
    new URL("/przygotowanie-i-testy?checklist=sent", request.url),
  );
}
