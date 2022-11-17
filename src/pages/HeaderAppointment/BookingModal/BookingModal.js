import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
     const { name, slots } = treatment;
     const date = format(selectedDate, 'PP');

     const handleBooking = event => {
          event.preventDefault()
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const slot = form.slot.value;
          const phone = form.phone.value;

          const booking = {
               appointmentDate: date,
               patient: name,
               treatment: treatment.name,
               email,
               slot,
               phone

          }

          console.log(booking)
          setTreatment(null)
     }
     return (
          <div>
               <input type="checkbox" id="booking-modal" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h3 className="text-lg font-bold mb-3">{name}</h3>
                         <form onSubmit={handleBooking} className='flex flex-col gap-3'>
                              <input type="text" defaultValue={date} className="input input-bordered w-full" disabled />
                              <select name='slot' className="select select-bordered w-full">
                                   
                                   {
                                        slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                   }
                              </select>
                              <input name='name' type="text" placeholder="name" className="input input-bordered w-full" />
                              <input name='email' type="email" placeholder="email adress" className="input input-bordered w-full" />
                              <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" />
                              <input type="submit" className="btn w-full bg-accent" />
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default BookingModal;