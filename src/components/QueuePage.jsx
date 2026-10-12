import React, { useEffect, useState } from 'react';
import { useBooking } from '../context/BookingContext';
import '../styles/queue.css';
export default function QueuePage() {
 const { appointments } = useBooking();
 const [now, setNow] = useState(new Date());
 useEffect(() => { const id = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
 const today = now.toLocaleDateString('en-CA');
 const todays = appointments.filter((a) => !a.date || a.date === today).slice(0, 5);
 const activeToken = todays[0]?.token || 'A-024';
 return <main className="queue-tv container-fluid min-vh-100 p-4 p-lg-5">
  <header className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-5"><div className="d-flex align-items-center gap-3"><div className="queue-logo">✦</div><div><div className="queue-brand">APEX DENTAL</div><div className="queue-subtitle">& Implant Studio · Patient waiting room</div></div></div><div className="text-end"><div className="queue-clock">{now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</div><div>{now.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div></div></header>
  <div className="row g-4 align-items-stretch"><div className="col-lg-7"><section className="queue-current h-100"><span className="queue-kicker">NOW SERVING</span><div className="queue-token">{activeToken}</div><h2>Please proceed to the reception desk</h2><p>Keep your appointment details ready. Our team will guide you to the right treatment room.</p><div className="queue-pulse"><span /> Clinic open · 9:00 AM – 8:30 PM</div></section></div><div className="col-lg-5"><section className="queue-next h-100"><div className="d-flex justify-content-between align-items-center mb-3"><h2>Up next</h2><span className="queue-live"><span /> LIVE DEMO</span></div>{(todays.length ? todays : [{token:'A-025',name:'Patient 1',treatment:'Consultation'},{token:'A-026',name:'Patient 2',treatment:'Dental check-up'},{token:'A-027',name:'Patient 3',treatment:'Specialist review'}]).map((a,i)=><article className="queue-row" key={a.id||a.token}><div className="queue-small-token">{a.token||`A-${25+i}`}</div><div><strong>{a.patientName||a.name||`Patient ${i+1}`}</strong><small>{a.treatmentName||a.treatment||'Appointment'}</small></div><span className="queue-position">{i+1}</span></article>)}<p className="queue-note">This is a client-side demonstration queue. No real clinic system is connected.</p></section></div></div>
  <footer className="queue-footer mt-4"><span>☎ +91 98480 22338</span><span>Thank you for choosing Apex Dental</span><a href="/">← Back to clinic website</a></footer>
 </main>;
}
