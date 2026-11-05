import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageCircleHeart } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('Yes, gladly attending!');
  const [guestCount, setGuestCount] = useState('1');
  const [guestMessage, setGuestMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '201000000000';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c9aa7d', '#520c1d', '#faf5ee'],
      });
    } catch {
      // safe fallback
    }

    const messageText = `💍 Wedding RSVP for Hisham & Rahma

Guest Name: ${guestName.trim()}
Attendance: ${attendance}
Number of Guests: ${guestCount}
${guestMessage.trim() ? `Message: ${guestMessage.trim()}` : ''}

With warmest wishes and blessings!`;

    const encodedText = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section className="w-full py-8 px-4 flex justify-center" id="rsvp">
      <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#ffffff] to-[#faf5ee] text-[#33151c] rounded-2xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.35)] border-2 border-[#d6c1a8] relative overflow-hidden text-center flex flex-col items-center">
        {/* Subtle decorative inner hairline border */}
        <div className="absolute inset-2.5 rounded-xl border border-[#c9aa7d]/40 pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <p className="font-script text-4xl sm:text-5xl text-[#520c1d] mb-1">
            Kindly RSVP
          </p>

          <p className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#8c5765] font-semibold mb-3">
            PLEASE RESPOND BY NOVEMBER 15, 2026
          </p>

          <p className="font-serif-luxury text-base text-[#3d1822] leading-relaxed mb-6 max-w-xs">
            Please complete the details below to help us prepare an unforgettable evening for you.
          </p>

          {submitted ? (
            <div className="w-full py-6 px-4 bg-[#faf6f0] rounded-xl border border-[#c9aa7d] text-center animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#1f733a] mx-auto mb-2" />
              <h4 className="font-serif-luxury font-bold text-xl text-[#520c1d]">
                Thank You, {guestName}!
              </h4>
              <p className="font-serif-luxury text-sm text-[#3d1822] mt-1 mb-4">
                Your RSVP details have been sent. We cannot wait to celebrate together!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-sans-clean uppercase tracking-wider text-[#520c1d] underline hover:text-[#731327] cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full text-left space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="guestName"
                  className="block font-sans-clean text-[11px] uppercase tracking-wider font-semibold text-[#520c1d] mb-1.5"
                >
                  Your Full Name <span className="text-[#a1233d]">*</span>
                </label>
                <input
                  id="guestName"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Sarah & Ahmed"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#d6c1a8] focus:border-[#520c1d] focus:ring-1 focus:ring-[#520c1d] text-[#33151c] rounded-lg text-sm font-serif-luxury placeholder:text-[#a8937e] focus:outline-none transition-colors shadow-xs"
                />
              </div>

              {/* Attendance Radio */}
              <div>
                <label className="block font-sans-clean text-[11px] uppercase tracking-wider font-semibold text-[#520c1d] mb-2">
                  Will You Be Attending?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs font-sans-clean transition-colors ${
                      attendance === 'Yes, gladly attending!'
                        ? 'bg-[#faf3e8] border-[#520c1d] text-[#520c1d] font-semibold shadow-xs'
                        : 'bg-[#ffffff] border-[#d6c1a8] text-[#522530]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="Yes, gladly attending!"
                      checked={attendance === 'Yes, gladly attending!'}
                      onChange={(e) => setAttendance(e.target.value)}
                      className="accent-[#520c1d]"
                    />
                    <span>Yes, gladly attending!</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs font-sans-clean transition-colors ${
                      attendance === 'Regretfully cannot attend'
                        ? 'bg-[#faf3e8] border-[#520c1d] text-[#520c1d] font-semibold shadow-xs'
                        : 'bg-[#ffffff] border-[#d6c1a8] text-[#522530]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="Regretfully cannot attend"
                      checked={attendance === 'Regretfully cannot attend'}
                      onChange={(e) => setAttendance(e.target.value)}
                      className="accent-[#520c1d]"
                    />
                    <span>Cannot attend</span>
                  </label>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label
                  htmlFor="guestCount"
                  className="block font-sans-clean text-[11px] uppercase tracking-wider font-semibold text-[#520c1d] mb-1.5"
                >
                  Number of Guests Attending
                </label>
                <select
                  id="guestCount"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#d6c1a8] focus:border-[#520c1d] focus:ring-1 focus:ring-[#520c1d] text-[#33151c] rounded-lg text-sm font-serif-luxury focus:outline-none transition-colors shadow-xs"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              {/* Message of Love */}
              <div>
                <label
                  htmlFor="guestMessage"
                  className="block font-sans-clean text-[11px] uppercase tracking-wider font-semibold text-[#520c1d] mb-1.5"
                >
                  Warm Wishes or Note <span className="text-[#8c5765] lowercase font-normal">(optional)</span>
                </label>
                <textarea
                  id="guestMessage"
                  rows={2}
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  placeholder="Share a wish or song recommendation for the dance floor..."
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#d6c1a8] focus:border-[#520c1d] focus:ring-1 focus:ring-[#520c1d] text-[#33151c] rounded-lg text-sm font-serif-luxury placeholder:text-[#a8937e] focus:outline-none transition-colors shadow-xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#520c1d] hover:bg-[#6e1127] text-[#ffffff] rounded-full font-sans-clean text-xs tracking-widest font-semibold uppercase border border-[#c9aa7d] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 mt-2"
              >
                <MessageCircleHeart className="w-4 h-4 text-[#ebdcc5]" />
                <span>Send RSVP Via WhatsApp</span>
              </button>

              <p className="font-sans-clean text-[10px] text-center text-[#733a46] mt-2">
                Your confirmation message will open ready-to-send in WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
