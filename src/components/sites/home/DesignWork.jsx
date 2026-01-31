import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesignWork = () => {
  // 1. Get real-time current date info
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthIdx = today.getMonth();
  const currentYear = today.getFullYear();

  // 2. Initialize state
  const [viewDate, setViewDate] = useState(
    new Date(currentYear, currentMonthIdx, 1),
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Generate Calendar Days (Professional style with padding)
  const { days, monthLabel } = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // Previous month info
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Current month info
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const label = viewDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    const calendarArray = [];

    // Padding from previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarArray.push({
        day: prevMonthLastDate - i,
        isPadding: true,
        monthOffset: -1,
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      calendarArray.push({
        day: d,
        isToday:
          d === currentDay && month === currentMonthIdx && year === currentYear,
        isPadding: false,
        monthOffset: 0,
      });
    }

    // Padding from next month (fill up to 42 slots - 6 rows)
    const remainingSlots = 42 - calendarArray.length;
    for (let d = 1; d <= remainingSlots; d++) {
      calendarArray.push({
        day: d,
        isPadding: true,
        monthOffset: 1,
      });
    }

    return { days: calendarArray, monthLabel: label };
  }, [viewDate, currentDay, currentMonthIdx, currentYear]);

  const changeMonth = (offset) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1),
    );
    setSelectedDate(null);
    setShowTimeSlots(false);
  };

  const handleDateClick = (item) => {
    if (item.isPadding) {
      setViewDate(
        new Date(
          viewDate.getFullYear(),
          viewDate.getMonth() + item.monthOffset,
          1,
        ),
      );
    }
    setSelectedDate(item.day);
    setShowTimeSlots(true);
    setBookingConfirmed(false);
  };

  const timeSlots = [
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
  ];

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      const email = "setulalchowhan@gmail.com";
      const subject = "Booking Confirmation";
      const body = `Booking request: ${selectedDate} ${monthLabel} at ${selectedTime}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setBookingConfirmed(true);
    }
  };

  return (
    <section id="works" className="section-padding-x font-geist">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ boxShadow: "0 4px 87.3px 0 rgba(0, 0, 0, 0.10)" }}
        className=" bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-16 shadow-sm flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Side Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="w-10 h-10 bg-[#e85a2a] rounded-xl flex items-center justify-center mb-6 md:mb-10 rotate-3 mx-auto lg:mx-0">
            <span className="text-white font-black text-xl italic">S</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a1a1a] leading-[1.1] mb-6 md:mb-8 tracking-tight">
            We Make Design <br />
            Work{" "}
            <span className="font-playfair-display italic font-medium text-[#e85a2a]">
              Easier For You.
            </span>
          </h2>

          <p className="text-gray-500 text-lg md:text-xl font-light mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Book a quick call to see how Seeam works.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-[#e85a2a] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg shadow-xl shadow-[#e85a2a]/20"
          >
            View more projects
          </motion.button>
        </div>

        {/* Right Side Calendar/Time Picker */}
        <div className="w-full max-w-md bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
          <AnimatePresence mode="wait">
            {!showTimeSlots ? (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8 md:mb-10">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] tracking-tight">
                    {monthLabel}
                  </h3>

                  <button
                    onClick={() => changeMonth(1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-y-2 md:gap-y-4 flex-1">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                    (day) => (
                      <span
                        key={day}
                        className="text-[10px] font-bold text-gray-300 text-center tracking-[0.15em] mb-2 md:mb-4"
                      >
                        {day}
                      </span>
                    ),
                  )}

                  {days.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square flex items-center justify-center"
                    >
                      <button
                        onClick={() => handleDateClick(item)}
                        className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all group overflow-visible`}
                      >
                        <AnimatePresence>
                          {selectedDate === item.day && (
                            <motion.div
                              layoutId="calendarSelect"
                              className="absolute inset-0 bg-[#e85a2a] rounded-full shadow-lg shadow-[#e85a2a]/30"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                        </AnimatePresence>

                        <span
                          className={`relative z-20 text-sm font-bold transition-colors ${selectedDate === item.day ? "text-white" : item.isPadding ? "text-gray-300" : "text-[#1a1a1a] group-hover:text-[#e85a2a]"}`}
                        >
                          {item.day}
                        </span>
                        {item.isToday && !selectedDate && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#e85a2a] rounded-full" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="timeSlots"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={() => setShowTimeSlots(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a]">
                      Select a Time
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedDate} {monthLabel}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-4 px-6 rounded-2xl border-2 transition-all font-semibold text-lg flex justify-between items-center ${selectedTime === time ? "border-[#e85a2a] bg-[#e85a2a]/5 text-[#e85a2a]" : "border-gray-100 hover:border-[#e85a2a]/30 text-gray-600"}`}
                    >
                      {time}
                      {selectedTime === time && (
                        <div className="w-6 h-6 bg-[#e85a2a] rounded-full flex items-center justify-center text-white">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedTime}
                  onClick={handleConfirmBooking}
                  className={`mt-8 w-full py-5 rounded-full font-bold text-lg transition-all ${selectedTime ? "bg-[#e85a2a] text-white shadow-xl shadow-[#e85a2a]/30" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                >
                  {bookingConfirmed ? "Booking Sent!" : "Confirm Booking"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="mt-10 md:mt-20 my-10 bg-[#1a1a1a] rounded-[24px] py-8 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-white text-sm">
          © {currentYear} Seeam All rights reserved.
        </p>
        <div className="flex gap-4">
          {["be", "𝕏", "in"].map((social, i) => (
            <div
              key={i}
              className="w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center text-white text-sm hover:bg-white/5 cursor-pointer transition-all"
            >
              {social}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignWork;
