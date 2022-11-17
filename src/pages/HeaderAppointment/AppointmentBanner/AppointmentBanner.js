
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
     
     return (
          <div className="hero my-6">
               <div className="hero-content flex-col gap-11 lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='shadow-lg '>
                         <DayPicker
                              mode='single'
                              selected={selectedDate}
                              onSelect={(data)=>{
                                   if(data){
                                        setSelectedDate(data)
                                   }
                                   }}
                         />
                         
                    </div>
               </div>
          </div>
     );
};

export default AppointmentBanner;