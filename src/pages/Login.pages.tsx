import  {FC, memo} from "react";
import { Link, useHistory } from "react-router-dom";
import LockClosedIcon from "@heroicons/react/outline/LockClosedIcon";
import { FaSpinner } from "react-icons/fa"
import { BsPersonFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as yup from "yup";

interface Props{}

const Login: FC<Props> = (props) =>{
  const history = useHistory();
    
   const myForm = useFormik({
     initialValues :{
       email: "",
       password: "",
     },
     validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
     }),
     onSubmit: (data) => {
        console.log("form submitting", data);
        setTimeout(() =>{
          console.log("form submitted successfully");
          history.push("/dashboard");
        }, 5000);
     }
   });
    return(
        <div className="flex justify-center min-h-screen px-4 py-12 sm:w-full md:w-1/2 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-4xl text-center text-gray-900">Log In to <span className = "font-semibold text-blue-500">CODEYOGI</span></h2>
          <p className="pl-16 mt-2 text-sm font-semibold">
            New Here? <Link to= "/signup"><span className = "font-semibold text-blue-500 underline">Create an account</span></Link>
          </p>
        </div>
        <form className="pt-8 space-y-6"
        onSubmit = {myForm.handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <BsPersonFill/>
              <input
              
                id="email-address"
                name="email"
                type="email"
                value = {myForm.values.email}
                onChange = {myForm.handleChange}
                onBlur = {myForm.handleBlur}
                autoComplete="email"
                className="relative inline-block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-none appearance-none b border-bottom-1z rounded-t-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            {myForm.touched.email && <div className = "text-red-600">{myForm.errors.email}</div>}
            <div className = "pt-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value = {myForm.values.password}
                onChange = {myForm.handleChange}
                onBlur = {myForm.handleBlur}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {myForm.touched.password && <div className = "text-red-600">{myForm.errors.password}</div>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
            {myForm.isSubmitting && <FaSpinner className = "mt-5 animate-spin"/>}
          </div>
        </form>
      </div>
    </div>
    );
};

Login.defaultProps = {}
export default memo(Login);