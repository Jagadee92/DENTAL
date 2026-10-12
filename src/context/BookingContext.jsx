import React, { createContext, useContext, useMemo, useState } from 'react';
const BookingContext = createContext(null);
const read = (key, fallback) => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };
export function BookingProvider({ children }) {
 const [appointments, setAppointments] = useState(() => read('apexAppointments', []));
 const [activeBooking, setActiveBooking] = useState(null);
 const saveAppointment = (appointment) => { const next = [{ ...appointment, id: appointment.id || `APX-${Date.now()}`, createdAt: new Date().toISOString() }, ...appointments]; setAppointments(next); localStorage.setItem('apexAppointments', JSON.stringify(next)); return next[0]; };
 const value = useMemo(() => ({ appointments, activeBooking, setActiveBooking, saveAppointment }), [appointments, activeBooking]);
 return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}
export function useBooking() { const value = useContext(BookingContext); if (!value) throw new Error('useBooking must be used inside BookingProvider'); return value; }
