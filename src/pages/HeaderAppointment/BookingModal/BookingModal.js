import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
     const { name, slots } = treatment;
     const { user } = useContext(AuthContext);
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

          fetch('http://localhost:5000/bookings', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(booking)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                         setTreatment(null)
                         toast.success('booking confirmed.')
                         refetch()
                    }
                    else{
                         toast.error(data.message)
                    }

               })

          

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
                              <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full" />
                              <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                              <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" required/>
                              <input type="submit" value='Book' className="btn w-full bg-accent" />
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default BookingModal;