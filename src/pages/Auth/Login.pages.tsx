import  {FC, memo, useState} from "react";
import { Link,  useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"
import { useFormik } from "formik";

import * as yup from "yup";
import { Switch } from "@headlessui/react";
import {Button} from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { login } from "../../api/auth";


interface Props{}

const Login: FC<Props> = (props) =>{
  const history = useHistory();
  
  const [isShow, setShow] = useState(false);

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
        login(data).then(() => {
          history.push("/dashboard");
        })
     }
   });
    return(
        <div className="flex justify-center min-h-screen px-4 py-12 bg-white sm:w-full md:w-1/2 sm:px-6 lg:px-8">
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
          <div className="space-y-px rounded-md shadow-sm">
            
            <Input 
              id = "email"
              type = "email"
              autoComplete = "email"
              required
              touched = {touched.email}
              error = {errors.email}
              {...getFieldProps("email")}
              placeholder = "Username"
              className = "rounded-b-none pt-7"
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
              className = "rounded-t-none pt-7"
            />
          </div>
          

   <div className="flex justify-between">
          
          <div className="flex items-center justify-between">
            Show password
            <Switch.Group as="span" className="ml-1.75">
              <Switch
                checked={isShow}
                onChange={setShow}
                className={`${
                  isShow ? "bg-indigoish" : "bg-indigo-100"
                } relative inline-flex  items-center h-4 rounded-full w-8`}
              >
                <span className="pl-2 sr-only">show password</span>
                <span
                  className={`${
                    isShow ? "translate-x-5" : "translate-x-0"
                  } inline-block w-4 h-4 shadow-md transform ease-in-out duration-300 bg-indigo-500 transition transition-color  rounded-full`}
                />
              </Switch>
            </Switch.Group>
          </div>
          <Button
            type="submit"
            look = "solid"
            className="px-4 py-2 text-sm text-white bg-indigo-500 rounded-md shadow-xl hover:transform"
          >
            Log in
          </Button>
          {isSubmitting && <FaSpinner className="animate-spin" />}
        </div>
        <div className="flex flex-col items-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-gray-900 text-md">
                Keep me logged in
              </label>
            </div>

            <div className="text-sm">
              <button className="pt-8 font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </button>
            </div>
          </div>
        <div className="text-center">
    
          <p className="mt-24 text-sm">
            © 2020 All Rights Reserved.{" "}
            <span className="text-indigoish">CORK</span> is a product of
            Designreset.{" "}
            <span className="text-indigoish">Cookie Preferences, Privacy,</span>{" "}
            and <span className="text-indigoish">Terms.</span>
          </p>
          <br />
        </div>
        </form>
      </div>
    </div>
    );
};

Login.defaultProps = {}
export default memo(Login);