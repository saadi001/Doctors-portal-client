import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
const ForgetPassword = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const { resetPassword } = useContext(AuthContext);

      const handleReset = data =>{
        console.log(data);
        resetPassword(data.email)
        .then((result)=>{
            console.log(result);
            alert("Check your email")
        })
        .catch( (error)=>{
            console.log(error.message);
        })
      }
  return (
    <div className=" max-w-lg mx-auto border p-8 rounded-md my-8">
      <h3 className="text-2xl font-bold text-center mt-8">Reset your password</h3>
      <p className="my-5 mx-10 text-center text-sm">Write your account's email and a reset link will be sent to your email.</p>
      <form onSubmit={handleSubmit(handleReset)} className="px-6 ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-xs">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control mt-4">
          <input type="submit" value="send" className="btn bg-accent" />
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
