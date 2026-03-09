"use client";
import { useState } from 'react';
import './FAQAccordion.css';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="faq-container">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
            <div className="faq-accordion">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                    >
                        <button
                            className="faq-question"
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            <h3>{faq.question}</h3>
                            <span className="faq-icon"></span>
                        </button>
                        <div
                            className="faq-answer-wrapper"
                            style={{ maxHeight: openIndex === index ? '1000px' : '0' }}
                        >
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
