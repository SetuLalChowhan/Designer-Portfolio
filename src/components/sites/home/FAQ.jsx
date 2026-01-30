import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services do you specialize in?",
    answer:
      "We focus on creating data-driven marketing campaigns, brand storytelling, and digital experiences that deliver measurable growth.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary depending on the project scope, but most clients see significant engagement improvements within the first 3-6 months of implementation.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes, every brand has unique needs. We tailor our service packages to align specifically with your business goals and budget constraints.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Absolutely. We often act as an extension of internal marketing and design departments to provide specialized expertise or additional capacity.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "I have experience across SaaS, FinTech, E-commerce, and lifestyle brands, focusing on products that value high-end user experience.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out through the contact form. We'll schedule a discovery call to discuss your vision and see if we're a good fit for each other.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 bg-[#252525] rounded-[24px] text-left transition-all hover:bg-[#2a2a2a] border border-white/5"
      >
        <span className="text-xl text-white font-medium">{question}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#e85a2a]" : "bg-[#e85a2a]"}`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 0 }}
            className="relative w-4 h-4"
          >
            {/* Horizontal line (always visible) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
            {/* Vertical line (hides when open) */}
            <motion.div
              initial={false}
              animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
              className="absolute top-0 left-1/2 h-full w-[2px] bg-white -translate-x-1/2"
            />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="p-8 text-gray-400 text-lg leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="bg-[#2A2A2A] py-16 md:py-24 px-4 md:px-10 lg:px-20 font-geist min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]"></span>
          <span className="text-[#e85a2a] text-xs font-bold uppercase tracking-widest">
            FAQ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]"></span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6 md:mb-8">
          Got Questions? <br />
          We’ve Got{" "}
          <span className="font-playfair-display italic text-[#e85a2a]">
            Answers.
          </span>
        </h2>

        <p className="text-[rgba(255,255,255,0.75)] text-base md:text-lg max-w-2xl mx-auto px-4">
          Gathered the most common questions from our clients to help you
          understand how I works, what I offer.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-[1094px] mx-auto space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
