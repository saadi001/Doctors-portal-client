import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [LoginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginError("");
        setLoginUserEmail(data.email);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error.message);
        // setLoginError(error.message)
        const err = error.message;
        const errorMessage = err.split("/");
        setLoginError(errorMessage[1]);
      });
  };
  return (
    <div className="max-w-md mx-auto border rounded-md shadow-xl my-10 py-10">
      <h3 className="text-2xl font-bold text-center">Login</h3>
      <form onSubmit={handleSubmit(handleLogin)} className="px-6">
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

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "password required",
              minLength: {
                value: 6,
                message: "password should be 6 character or longer.",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.password?.message}
            </p>
          )}
          {LoginError && (
            <p className="text-red-500 text-sm mt-1">{LoginError}</p>
          )}
          <label className="text-[10px] mt-1">
            <a href="/" className="hover:underline">Forget password?</a>
          </label>
        </div>

        <div className="form-control mt-4">
          <input type="submit" value="Login" className="btn bg-accent" />
        </div>
        <div className=" mt-3 text-center">
          <p>
            New to Doctors Portal?
            <Link to={"/signup"} className="text-primary">
              {" "}
              Create new account
            </Link>
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
