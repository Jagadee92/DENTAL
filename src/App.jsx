import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegacyOverlays from './components/LegacyOverlays';
import { BookingProvider } from './context/BookingContext';
import QueuePage from './components/QueuePage';
import Section1Section from './components/Section1Section.jsx';
import MetricsSection from './components/MetricsSection.jsx';
import ProblemsSection from './components/ProblemsSection.jsx';
import TreatmentsSection from './components/TreatmentsSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import DoctorsSection from './components/DoctorsSection.jsx';
import TourSection from './components/TourSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import QueueSection from './components/QueueSection.jsx';
import EmiSection from './components/EmiSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import Section12Section from './components/Section12Section.jsx';
import WelcomePage from './components/WelcomePage.jsx';

function HomePage() {
 useEffect(() => {
   if (document.getElementById('apex-legacy-script')) return;
   const script = document.createElement('script');
   script.id = 'apex-legacy-script'; script.src = '/js/app.js'; script.defer = true;
   document.body.appendChild(script);
   return () => { /* Keep the delegated legacy handlers active during app lifetime. */ };
 }, []);
 return <><Navbar /><main id="home">
      <Section1Section />
      <MetricsSection />
      <ProblemsSection />
      <TreatmentsSection />
      <GallerySection />
      <DoctorsSection />
      <TourSection />
      <TestimonialsSection />
      <QueueSection />
      <EmiSection />
      <FaqSection />
      <Section12Section />
    </main><Footer /><LegacyOverlays /></>;
}

export default function App() {
 const navigation = performance.getEntriesByType('navigation')[0];

 if (
   navigation?.type === 'reload' &&
   window.location.pathname.replace(/\/$/, '') === '/clinic'
 ) {
   window.history.replaceState(null, '', '/');
 }

 const path = window.location.pathname.replace(/\/$/, '') || '/';
 const isQueue = path === '/queue';
 const isClinic = path === '/clinic';
 const page = isQueue
   ? <QueuePage />
   : isClinic
     ? <HomePage />
     : <WelcomePage />;

 return <BookingProvider>{page}</BookingProvider>;
}
