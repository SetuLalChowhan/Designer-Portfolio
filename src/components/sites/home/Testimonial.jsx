import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ruben Donin",
    time: "3 days ago",
    content: "CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.",
    avatar: "https://i.pravatar.cc/150?u=ruben"
  },
  {
    name: "Linda Gomez",
    time: "3 days ago",
    content: "Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.",
    avatar: "https://i.pravatar.cc/150?u=linda"
  },
  {
    name: "Kevin Huang",
    time: "3 days ago",
    content: "Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.",
    avatar: "https://i.pravatar.cc/150?u=kevin"
  },
  {
    name: "Kevin Huang",
    time: "3 days ago",
    content: "Responsive build slashed load times, boosting engagement across devices and elevating our brand's credibility instantly.",
    avatar: "https://i.pravatar.cc/150?u=kevin2"
  }
];

const TestimonialCard = ({ item }) => (
  <div className="w-[400px] bg-white p-8 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 m-3 flex-shrink-0">
    <div className="flex items-center gap-3 mb-4">
      <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="flex items-center gap-1">
          <h4 className="font-bold text-[#1a1a1a]">{item.name}</h4>
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.3 1.248.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        </div>
        <p className="text-xs text-gray-400">{item.time}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-4 text-yellow-400 text-base">
      {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
    </div>
    <p className="text-gray-600 leading-relaxed font-geist text-sm">
      {item.content}
    </p>
  </div>
);

const Testimonial = () => {
  // We double the data to make it infinite and pre-filled
  const loopedItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className=" bg-white overflow-hidden font-geist">
      {/* Header */}
      <div className="text-center mb-16 section-padding-x">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]"></span>
          <span className="text-[#e85a2a] text-xs font-bold uppercase tracking-widest">Testimonials</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a]"></span>
        </div>
        <h2 className="text-5xl md:text-7xl text-[#1a1a1a] font-medium mb-6">
          Clients <span className="font-playfair-display italic text-[#e85a2a]">Feedbacks</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover how clients have elevated their digital presence through expert designs
        </p>
      </div>

      {/* Row 1: Left to Right - Pre-filled */}
      <div className="flex mb-4">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} // Starts half-way through the content
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap"
        >
          {loopedItems.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right to Left - Pre-filled */}
      <div className="flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} // Moves opposite way
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap"
        >
          {loopedItems.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;