import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignWork = () => {
  // 1. Get real-time current date info
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthIdx = today.getMonth();
  const currentYear = today.getFullYear();

  // 2. Initialize state with CURRENT date
  const [viewDate, setViewDate] = useState(new Date(currentYear, currentMonthIdx, 1));
  const [selectedDate, setSelectedDate] = useState(currentDay);

  // Generate Calendar Days
  const { days, monthLabel } = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const label = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    
    const calendarArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarArray.push({ day: null });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      calendarArray.push({ 
        day: d,
        // Check if this specific day in the loop is actually TODAY
        isToday: d === currentDay && month === currentMonthIdx && year === currentYear 
      });
    }
    return { days: calendarArray, monthLabel: label };
  }, [viewDate, currentDay, currentMonthIdx, currentYear]);

  const changeMonth = (offset) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  return (
    <section className=" s font-geist">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{boxShadow:"0 4px 87.3px 0 rgba(0, 0, 0, 0.10)"}}
        className=" bg-white rounded-[40px] p-8 md:p-16 shadow-sm flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Left Side Content */}
        <div className="flex-1">
          <div className="w-10 h-10 bg-[#e85a2a] rounded-xl flex items-center justify-center mb-10 rotate-3">
             <span className="text-white font-black text-xl italic">S</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-[1.1] mb-8 tracking-tight">
            We Make Design <br /> 
            Work <span className="font-playfair-display italic font-medium text-[#e85a2a]">Easier For You.</span>
          </h2>
          
          <p className="text-gray-500 text-xl font-light mb-12 max-w-md leading-relaxed">
            Book a quick call to see how Seeam works.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e85a2a] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#e85a2a]/20"
          >
            View more projects
          </motion.button>
        </div>

        {/* Right Side Calendar */}
        <div className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex items-center justify-between mb-10">
            <button onClick={() => changeMonth(-1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight">{monthLabel}</h3>
            
            <button onClick={() => changeMonth(1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 6 6 6-6 6"/> 
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-4">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <span key={day} className="text-[10px] font-bold text-gray-300 text-center tracking-[0.15em] mb-4">{day}</span>
            ))}
            
            {days.map((item, idx) => (
              <div key={idx} className="relative aspect-square flex items-center justify-center">
                {item.day && (
                  <button
                    onClick={() => setSelectedDate(item.day)}
                    className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all group overflow-visible"
                  >
                    <AnimatePresence>
                      {selectedDate === item.day && (
                        <motion.div 
                          layoutId="calendarSelect"
                          className="absolute inset-0 bg-[#e85a2a] rounded-full shadow-lg shadow-[#e85a2a]/30"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <span className={`relative z-20 text-sm font-bold transition-colors ${selectedDate === item.day ? 'text-white' : 'text-[#1a1a1a] group-hover:text-[#e85a2a]'}`}>
                      {item.day}
                    </span>

                    {/* Today's Indicator Dot (matches current system date) */}
                    {/* {item.isToday && (
                      <span className={`absolute bottom-2 w-1.5 h-1.5 rounded-full z-20 transition-colors ${selectedDate === item.day ? 'bg-white' : 'bg-[#e85a2a]'}`} />
                    )} */}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="  my-10 bg-[#1a1a1a] rounded-[24px] py-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white text-sm">© {currentYear} Seeam All rights reserved.</p>
        <div className="flex gap-4">
          {['be', '𝕏', 'in'].map((social, i) => (
            <div key={i} className="w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center text-white text-sm hover:bg-white/5 cursor-pointer transition-all">
              {social}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignWork;