import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
     const { name, slots } = appointmentOption;
     return (
          <div className="card shadow-lg rounded-md p-6">
               <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                    <p>{slots.length>0 ? slots[0] : "try another day!"}</p>
                    <p>{slots.length} {slots>1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">                         
                         <label htmlFor="booking-modal" onClick={() => setTreatment(appointmentOption)} className="btn btn-primary bg-gradient-to-l from-primary to-secondary">Book Appointment</label>
                    </div>
               </div>
          </div>
     );
};

export default AppointmentOption;