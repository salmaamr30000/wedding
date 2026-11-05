import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Check, Sparkles } from 'lucide-react';

export const CalendarSection: React.FC = () => {
  const weddingDateStr = '2026-12-01T19:00:00';
  const targetDate = new Date(weddingDateStr).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [downloaded, setDownloaded] = useState(false);
  const [clickedDay, setClickedDay] = useState<number | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Generate .ics calendar download
  const handleAddToCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Hisham & Rahma Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of Hisham & Rahma',
      'DESCRIPTION:Celebrating the wedding ceremony and reception of Hisham and Rahma.',
      'LOCATION:The Wedding Venue',
      'DTSTART:20261201T190000',
      'DTEND:20261201T233000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Hisham-and-Rahma-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const offset = 1;
  const totalDays = 31;
  const selectedDay = 1;

  return (
    <section className="w-full py-8 px-4 flex justify-center">
      {/* Pristine Luxury Card with Arched Top and Double Gold Border */}
      <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#ffffff] to-[#faf5ee] text-[#33151c] rounded-2xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.35)] border-2 border-[#d6c1a8] relative overflow-hidden">
        {/* Subtle decorative inner hairline border */}
        <div className="absolute inset-2.5 rounded-xl border border-[#c9aa7d]/40 pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <p className="font-script text-4xl sm:text-5xl text-[#520c1d] mb-2 leading-tight">
            Dear family<br />& friends
          </p>

          <p className="font-serif-luxury text-base sm:text-[17px] text-[#3d1822] leading-relaxed max-w-xs font-normal mb-6">
            We joyfully invite you to share with us the happiness of our special day and
            become a cherished part of our eternal story.
          </p>

          {/* Month & Year Header */}
          <div className="w-full border-t border-b border-[#d8c2aa] py-2 mb-4">
            <p className="font-serif-luxury text-xl font-bold tracking-widest uppercase text-[#520c1d]">
              December 2026
            </p>
          </div>

          {/* Calendar Grid with Animated Numbers */}
          <div className="w-full max-w-xs">
            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#8c5765] pb-2 border-b border-[#ebdcc8]">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* Days with Hover Animation and Beating Heart for Wedding Day */}
            <div className="grid grid-cols-7 gap-1 pt-3 text-sm font-serif-luxury text-[#33151c]">
              {Array.from({ length: offset }).map((_, i) => (
                <span key={`empty-${i}`} className="h-8" />
              ))}

              {Array.from({ length: totalDays }).map((_, i) => {
                const day = i + 1;
                const isSelected = day === selectedDay;

                return (
                  <div
                    key={`day-${day}`}
                    onClick={() => setClickedDay(day)}
                    className="h-8 flex items-center justify-center relative font-medium cursor-pointer"
                  >
                    {isSelected ? (
                      <div
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8a1c32] via-[#731327] to-[#4a0a19] text-[#ffffff] flex flex-col items-center justify-center font-bold text-xs shadow-md border-2 border-[#c9aa7d] animate-heartbeat cursor-pointer"
                        title="Our Wedding Day!"
                      >
                        <span className="leading-none">01</span>
                      </div>
                    ) : (
                      <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs sm:text-sm text-[#3d1822] hover:scale-125 hover:text-[#731327] hover:font-bold hover:bg-[#ebdcc8]/50 transition-all duration-300">
                        {String(day).padStart(2, '0')}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Tagline / Clicked Day Feedback */}
          {clickedDay === 1 ? (
            <p className="font-serif-luxury italic text-sm text-[#8a1c32] font-bold mt-4 flex items-center justify-center gap-1.5 animate-bounce">
              <Sparkles className="w-3.5 h-3.5 text-[#c9aa7d]" />
              The Celebration Day — Tuesday, Dec 1 at 07:00 PM!
            </p>
          ) : (
            <p className="font-serif-luxury italic text-sm text-[#520c1d] font-semibold mt-4">
              Tuesday, the First of December at Seven O'Clock in the Evening
            </p>
          )}

          {/* Countdown Strip with Animated Numbers */}
          <div className="w-full mt-6 pt-5 border-t border-[#d8c2aa]/70">
            <p className="font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#8c5765] font-semibold mb-3 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#731327] animate-spin" style={{ animationDuration: '8s' }} />
              Counting Down To Forever
            </p>

            <div className="grid grid-cols-4 gap-2 text-center">
              {/* Days Box */}
              <div className="bg-[#faf6f0] rounded-xl p-2 border border-[#d8c2aa] shadow-xs hover:scale-105 transition-transform duration-300">
                <span className="block font-serif-luxury font-bold text-xl sm:text-2xl text-[#520c1d] tabular-nums">
                  {timeLeft.days}
                </span>
                <span className="font-sans-clean text-[9px] uppercase tracking-wider text-[#633a44] font-medium">
                  Days
                </span>
              </div>

              {/* Hours Box */}
              <div className="bg-[#faf6f0] rounded-xl p-2 border border-[#d8c2aa] shadow-xs hover:scale-105 transition-transform duration-300">
                <span className="block font-serif-luxury font-bold text-xl sm:text-2xl text-[#520c1d] tabular-nums">
                  {timeLeft.hours}
                </span>
                <span className="font-sans-clean text-[9px] uppercase tracking-wider text-[#633a44] font-medium">
                  Hours
                </span>
              </div>

              {/* Minutes Box */}
              <div className="bg-[#faf6f0] rounded-xl p-2 border border-[#d8c2aa] shadow-xs hover:scale-105 transition-transform duration-300">
                <span className="block font-serif-luxury font-bold text-xl sm:text-2xl text-[#520c1d] tabular-nums">
                  {timeLeft.minutes}
                </span>
                <span className="font-sans-clean text-[9px] uppercase tracking-wider text-[#633a44] font-medium">
                  Mins
                </span>
              </div>

              {/* Seconds Box with Tick Animation */}
              <div className="bg-[#faf6f0] rounded-xl p-2 border border-[#c9aa7d] shadow-sm hover:scale-105 transition-transform duration-300">
                <span
                  key={timeLeft.seconds}
                  className="block font-serif-luxury font-bold text-xl sm:text-2xl text-[#520c1d] tabular-nums animate-number-tick"
                >
                  {timeLeft.seconds}
                </span>
                <span className="font-sans-clean text-[9px] uppercase tracking-wider text-[#633a44] font-medium">
                  Secs
                </span>
              </div>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <button
            onClick={handleAddToCalendar}
            className="mt-6 w-full py-2.5 px-4 bg-[#520c1d] hover:bg-[#6e1127] text-[#ffffff] rounded-full font-sans-clean text-xs tracking-widest font-semibold uppercase border border-[#c9aa7d] shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 hover:shadow-md"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#ebdcc5]" />
                <span>Saved To Calendar</span>
              </>
            ) : (
              <>
                <CalendarIcon className="w-3.5 h-3.5 text-[#ebdcc5]" />
                <span>Save To My Calendar (.ics)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
