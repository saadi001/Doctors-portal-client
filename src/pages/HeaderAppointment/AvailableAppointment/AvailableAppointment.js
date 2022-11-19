import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
     const [treatment, setTreatment] = useState(null)
     const date = format(selectedDate, 'PP')

     const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
          queryKey: ['appointmentOptions', date],
          queryFn: async() =>{
               const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
               const data = await res.json()
               return data;
          }
     })

     if(isLoading){
          return <Loading></Loading>
     }

     return (
          <section className='my-16 '>
               <p className='text-xl font-bold text-center text-primary'>Available appointment on {format(selectedDate, 'PP')}</p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mx-9 mt-7'>
                    {
                         appointmentOptions.map(option => <AppointmentOption
                              key={option._id}
                              appointmentOption={option}
                              setTreatment={setTreatment}
                         ></AppointmentOption>)
                    }
               </div>
               {treatment &&
                    <BookingModal
                         selectedDate={selectedDate}
                         treatment={treatment}
                         setTreatment={setTreatment}
                         refetch={refetch}
                    ></BookingModal>}
          </section>
     );
};

export default AvailableAppointment;