import React, { useState } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { CoverSection } from './components/CoverSection';
import { CalendarSection } from './components/CalendarSection';
import { VenueSection } from './components/VenueSection';
import { ScheduleSection } from './components/ScheduleSection';
import { DressCodeSection } from './components/DressCodeSection';
import { LoveStorySection } from './components/LoveStorySection';
import { RsvpSection } from './components/RsvpSection';
import { FooterSection } from './components/FooterSection';
import { FabricRibbon } from './components/FabricRibbon';
import { GoldenParticles } from './components/GoldenParticles';
import { CornerFlourish } from './components/CornerFlourish';
import { Mail } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setShowCardModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReopenEnvelope = () => {
    setShowCardModal(true);
  };

  const handleCloseEnvelope = () => {
    setShowCardModal(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative font-sans-clean overflow-x-hidden bg-[#faf6ee] selection:bg-[#c9aa7d]/40 selection:text-white">
      {/* 
        ELEGANT & PROFESSIONAL PAGE BACKDROP:
        - Layered white baroque floral lace relief from download (4).jpg
        - Warm antique pearl-ivory ambient lighting
      */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-85"
        style={{
          backgroundImage: `url('/assets/aistudio/download__4__6831a203.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gentle pearlescent scrim */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#fbf8f2]/30 via-transparent to-[#f4ede2]/40" />

      {/* 
        FIRST PAGE OPENING SCREEN (Exact design and 3D opening animation from video)
      */}
      <OpeningEnvelope
        isOpen={isOpen && !showCardModal}
        onOpen={handleOpenInvitation}
        onClose={handleCloseEnvelope}
      />

      {/* 
        ELEGANT TOP NAVIGATION BAR (As seen in video frame 00:07)
      */}
      {isOpen && (
        <header className="sticky top-0 z-40 w-full bg-[#2a040e]/90 backdrop-blur-md border-b border-[#c9aa7d]/30 text-[#f7eee4] py-2.5 px-4 sm:px-8 flex items-center justify-between transition-all duration-500 shadow-md">
          {/* Left Brand Lockup */}
          <div className="flex items-center gap-2.5">
            <span className="font-script text-2xl sm:text-3xl text-[#c9aa7d] leading-none">
              H & R
            </span>
            <span className="text-[10px] font-sans-clean tracking-widest text-[#d8c2aa] border-l border-[#c9aa7d]/40 pl-2 hidden sm:inline">
              01.12.2026
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-sans-clean uppercase tracking-widest text-[#ebdcc5]">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
              Welcome
            </button>
            <button onClick={() => scrollToSection('story')} className="hover:text-white transition-colors cursor-pointer">
              Our Story
            </button>
            <button onClick={() => scrollToSection('calendar')} className="hover:text-white transition-colors cursor-pointer">
              Details
            </button>
            <button onClick={() => scrollToSection('schedule')} className="hover:text-white transition-colors cursor-pointer">
              Schedule
            </button>
            <button onClick={() => scrollToSection('venue')} className="hover:text-white transition-colors cursor-pointer">
              Venue
            </button>
            <button onClick={() => scrollToSection('rsvp')} className="hover:text-white transition-colors cursor-pointer">
              RSVP
            </button>
          </nav>

          {/* Right Action: CARD Button (Reopens the envelope modal as seen in video frame 00:59) */}
          <button
            onClick={handleReopenEnvelope}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3d0815] hover:bg-[#520c1d] border border-[#c9aa7d]/70 text-[#ebdcc5] hover:text-white text-xs font-sans-clean uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
            title="View envelope card"
          >
            <Mail className="w-3.5 h-3.5 text-[#c9aa7d]" />
            <span>Card</span>
          </button>
        </header>
      )}

      {/* 
        THE FRONT OF THE INVITATION ITSELF:
        Uses the rich royal burgundy color with subtle damask silk texture,
        anchored with gold double-filigree borders against the white baroque backdrop.
      */}
      <div
        className={`relative z-10 py-0 sm:py-8 md:py-12 px-0 sm:px-4 flex justify-center transition-opacity duration-1000 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <main className="max-w-[720px] w-full min-h-screen relative text-[#f7eee4] sm:rounded-3xl shadow-[0_30px_70px_rgba(20,2,6,0.55),0_0_0_1px_rgba(201,170,125,0.4)] overflow-hidden">
          {/* Base royal burgundy background layer with the uploaded floral damask pattern */}
          <div
            className="absolute inset-0 bg-[#350611] bg-repeat opacity-85"
            style={{
              backgroundImage: `url('/assets/aistudio/background.jpg_e8b40a49.jpg')`,
              backgroundSize: '480px auto',
            }}
          />

          {/* Warm radial candlelit falloff in center */}
          <div className="absolute inset-0 bg-radial from-[#8a1830]/25 via-transparent to-black/45 pointer-events-none" />

          {/* Ambient romantic floating golden light dust */}
          <GoldenParticles count={18} className="opacity-70" />

          {/* Corner gold flourishes on main container */}
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />

          {/* Subtle outer decorative gold hairline border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#c9aa7d]/35 rounded-2xl pointer-events-none z-20" />

          {/* Section 1: Formal Cover & Hands with Envelope */}
          <div className="relative z-10">
            <CoverSection />
          </div>

          <FabricRibbon />

          {/* Section 2: Date, Calendar & Countdown Card (White/Ivory card with gold border) */}
          <div className="relative z-10" id="calendar">
            <CalendarSection />
          </div>

          <FabricRibbon />

          {/* Section 3: Venue, Location & Arrival Card */}
          <div className="relative z-10" id="venue">
            <VenueSection />
          </div>

          <FabricRibbon />

          {/* Section 4: Day-of Timeline & Schedule */}
          <div className="relative z-10" id="schedule">
            <ScheduleSection />
          </div>

          <FabricRibbon />

          {/* Section 5: Dress Code & Palette */}
          <div className="relative z-10">
            <DressCodeSection />
          </div>

          <FabricRibbon />

          {/* Section 6: Love Story & Childhood Tribute Card */}
          <div className="relative z-10" id="story">
            <LoveStorySection />
          </div>

          <FabricRibbon />

          {/* Section 7: Formal WhatsApp RSVP Card */}
          <div className="relative z-10" id="rsvp">
            <RsvpSection />
          </div>

          {/* Section 8: Footer with Stacked Names and Replay */}
          <div className="relative z-10">
            <FooterSection onReopenEnvelope={handleReopenEnvelope} />
          </div>
        </main>
      </div>
    </div>
  );
}
