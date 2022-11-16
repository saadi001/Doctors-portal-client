
import { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const HeaderAppointment = () => {
     const [selectedDate, setSelectedDate] = useState(new Date())
     return (
          <div>
               <AppointmentBanner
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
               ></AppointmentBanner>
               <AvailableAppointment
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
               ></AvailableAppointment>
          </div>
     );
};

export default HeaderAppointment;