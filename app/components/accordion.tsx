"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <section
            key={item.question}
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-900 sm:text-base"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {item.question}
                <span className="text-slate-500" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div className="border-t border-slate-100 px-4 py-4 text-sm leading-7 text-slate-700 sm:text-base">
                {item.answer}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
