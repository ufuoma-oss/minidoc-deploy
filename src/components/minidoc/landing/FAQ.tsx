'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. Data is never sold, and personal documents are strictly excluded from public AI model training. All files are encrypted and processed in a secure environment isolated to the specific account."
  },
  {
    question: "Who is Mini Doc for?",
    answer: "Mini Doc is built for Individuals, Busy Professionals, and Business Owners. Whether managing personal records, handling work emails, or running a business with contracts and invoices, Mini Doc acts as a secure, 24/7 personal assistant to organize paperwork and automate administrative tasks."
  },
  {
    question: "What documents can I upload?",
    answer: "Upload almost anything: contracts, legal agreements, insurance policies, receipts, bank statements, personal notes, tax documents, bills, and letters. The platform securely handles PDFs, images, and standard office files. Have paper documents? Just snap a photo of letters or handwritten notes—Mini Doc digitizes and organizes them instantly."
  },
  {
    question: "Which apps can I connect?",
    answer: "Mini Doc connects with Gmail, Google Drive, Outlook, Google Calendar, Sheets, WhatsApp, and LinkedIn. The system is designed to centralize files and communications in one place. New integrations are added frequently to support more workflows, and specific requests can be made directly in the dashboard."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, there are no long-term contracts. Subscriptions can be canceled instantly from dashboard settings, and access is retained until the end of the billing cycle."
  },
  {
    question: "Does it connect to my personal calendar?",
    answer: "Yes! Mini Doc extracts dates and deadlines from documents and automatically adds them to Google Calendar, Outlook, or Apple Calendar so an appointment is never missed."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#EAE9E5] relative border-t border-gray-200/50 font-serif">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg font-serif">
            Everything you need to know about Mini Doc.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white border-gray-200 shadow-md' : 'bg-[#F2F1ED] border-transparent hover:bg-white hover:border-gray-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-serif font-medium ${openIndex === index ? 'text-gray-900' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-orange-50 text-[#FF5A36]' : 'text-gray-400'}`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium font-serif">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
