import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
     const [deletingDoctor, setDeletingDoctor] = useState(null);

     const closeModal = () =>{
          setDeletingDoctor(null)
     }

     const { data: doctors = [] , isLoading, refetch} = useQuery({
          queryKey: ['manageDoctors'],
          queryFn: async () => {
               try {
                    const res = await fetch('http://localhost:5000/doctors', {
                         headers: {
                              authorization: `bearer ${localStorage.getItem('accessToken')}`
                         }
                    });
                    const data = await res.json()
                    return data;

               }
               catch (error) {
                    console.log(error)
               }
          }
     })
     
     const handleDeleteDoctor = doctor =>{
          fetch(`http://localhost:5000/doctors/${doctor._id}`,{
               method: 'DELETE',
               headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
          })
          .then(res => res.json())
          .then(data=>{
               if(data.deletedCount>0){
                    refetch()
                    toast.success(`${doctor.name} deleted successfully.`)
               }
               
          })
     }

     if(isLoading){
          return <Loading></Loading>
     }
     return (
          <div>
               <h2>Manage doctors: {doctors.length}</h2>
               <div className="overflow-x-auto">
                    <table className="table w-full">
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Avatar</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Specialty</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   doctors.map((doctor, i) => <tr key={doctor._id}>
                                        <th>{i + 1}</th>
                                        <td><div className="avatar">
                                             <div className="w-24 rounded-xl">
                                                  <img src={doctor.image} alt="Doctor" />
                                             </div>
                                        </div></td>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.specialty}</td>
                                        <td><label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmationModal" className="btn btn-sm btn-error">Delete</label></td>                                        
                                   </tr>)
                              }

                         </tbody>
                    </table>
               </div>
               {
                    deletingDoctor && 
                    <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It can not be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                    >                         
                    </ConfirmationModal>
               }
          </div>
     );
};

export default ManageDoctors;