import React from 'react';
import { GlassWater, Heart, Utensils, Music, Sparkles } from 'lucide-react';
import { CornerFlourish } from './CornerFlourish';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ScheduleSection: React.FC = () => {
  const schedule: ScheduleItem[] = [
    {
      time: '07:00 PM',
      title: 'Guest Welcome & Cocktails',
      description: 'Welcome drinks, music, and welcoming our honored guests.',
      icon: <GlassWater className="w-4 h-4 text-[#c9aa7d]" />,
    },
    {
      time: '07:30 PM',
      title: 'The Wedding Ceremony',
      description: 'The processional, exchange of eternal vows, and ring ceremony.',
      icon: <Heart className="w-4 h-4 text-[#c9aa7d]" />,
    },
    {
      time: '08:30 PM',
      title: 'Dinner Banquet & Celebration',
      description: 'Gourmet multi-course wedding dinner accompanied by live acoustic melodies.',
      icon: <Utensils className="w-4 h-4 text-[#c9aa7d]" />,
    },
    {
      time: '09:30 PM',
      title: 'Cake Cutting & First Dance',
      description: 'Traditional cake cutting followed by the first dance as husband and wife.',
      icon: <Music className="w-4 h-4 text-[#c9aa7d]" />,
    },
    {
      time: '11:00 PM',
      title: 'Sparkler Farewell',
      description: 'A glowing sparkler celebration to conclude a night of cherished memories.',
      icon: <Sparkles className="w-4 h-4 text-[#c9aa7d]" />,
    },
  ];

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center">
      {/* Table banquet atmosphere photo with candle flicker overlay, zoom, and continuous float */}
      <div className="group relative w-full max-w-sm sm:max-w-md mx-auto aspect-[16/10] rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#ebdcc3] via-[#c9aa7d] to-[#967442] shadow-[0_20px_45px_rgba(0,0,0,0.65)] mb-8 transition-transform duration-700 hover:scale-[1.03] animate-float-photo">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#24040b]">
          <img
            src="/assets/aistudio/download__2__b98c807b.jpg"
            alt="Candlelit banquet dinner setting"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
            referrerPolicy="no-referrer"
          />

          {/* Candlelight Flicker Ambience Animation */}
          <div className="absolute inset-0 bg-radial from-amber-400/25 via-amber-600/10 to-transparent animate-candle-flicker pointer-events-none" />

          {/* Diagonal light sheen */}
          <div className="absolute inset-0 animate-mirror-gleam bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* Ornate corner flourishes */}
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />
        </div>
      </div>

      <div className="w-full max-w-sm sm:max-w-md text-center">
        <p className="font-script text-4xl sm:text-5xl text-[#ead8c7] mb-1">
          Wedding day
        </p>
        <p className="font-sans-clean text-[11px] tracking-[0.25em] uppercase text-[#c9aa7d] font-semibold mb-8">
          ORDER OF CELEBRATION
        </p>

        {/* Timeline on Burgundy Background */}
        <div className="relative pl-6 sm:pl-8 text-left space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#c9aa7d] before:via-[#c9aa7d]/60 before:to-[#c9aa7d]/20">
          {schedule.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker with gentle pulse */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-6 h-6 rounded-full bg-[#3a0813] border-2 border-[#c9aa7d] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#ebdcc5] transition-all">
                {item.icon}
              </div>

              <div>
                <time className="font-serif-luxury italic text-lg sm:text-xl font-bold text-[#e6c9ae] block leading-none mb-1 group-hover:text-[#fff] transition-colors">
                  {item.time}
                </time>
                <h4 className="font-serif-luxury text-base sm:text-[17px] font-bold text-[#faf5ee] tracking-wide mb-0.5">
                  {item.title}
                </h4>
                <p className="font-serif-luxury text-sm text-[#d4bca4] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
