import  {FC, memo} from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"
import { useFormik } from "formik";

import * as yup from "yup";
import {Button} from "../components/Button/Button";
import Input from "../components/Input/Input";

interface Props{}

const Login: FC<Props> = (props) =>{
  const history = useHistory();

  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
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
        onSubmit = {handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            
            <Input 
              id = "email"
              type = "email"
              autoComplete = "email"
              required
              touched = {touched.email}
              error = {errors.email}
              {...getFieldProps("email")}
              placeholder = "Email"
              className = "rounded-b-none"
            />
              
            <Input 
              id = "password"
              type = "password"
              autoComplete = "current-password"
              required
              touched = {touched.password}
              error = {errors.password}
              {...getFieldProps("password")}
              placeholder = "Password"
              className = "rounded-t-none"
            />
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
            <Button> Sign in  </Button>
            {isSubmitting && <FaSpinner className = "mt-5 animate-spin"/>}
          </div>
        </form>
      </div>
    </div>
    );
};

Login.defaultProps = {}
export default memo(Login);