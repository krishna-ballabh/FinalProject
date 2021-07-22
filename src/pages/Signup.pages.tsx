import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Input from "../components/Input/Input";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { Switch } from "@headlessui/react";
import { Button } from "../components/Button/Button";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const [isShow, setShow] = useState(false);
  const { handleSubmit, touched, getFieldProps, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("enter email")
          .email("please enter a valid email"),
        password: yup.string().required("enter password").min(8),
        username: yup.string().required().min(6),
      }),

      onSubmit: (data) => {
        console.log("form submitting", data);
        setTimeout(() => {
          history.push("/login");
        }, 5000);
      },
    });
  return (
    <div className=" font-body px-11.4285 text-grayish py-2.8715 w-97.1485 h-148.8985 m-auto">
      <h1 className="mb-4 text-4xl font-medium ">Get started with a free account</h1>
      <div className="mb-12 space-x-2 text-sm font-semibold tracking-wider">
        <span >Already have an account?</span>
        <Link to="/login">
          <span className="font-semibold text-indigo-500 underline">Log in</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="pt-2 pb-6 mb-2 ">
            <FiUser className="absolute w-6 h-6 text-indigo-500" />
            <Input
              id="username"
              type="username"
              autoComplete="username"
              required
              {...getFieldProps("username")}
              touched={touched.username}
              error={errors.username}
              placeholder="Username"
            />
          </div>
          <div className="pt-2 pb-6 mb-2 ">
            <HiOutlineAtSymbol className="absolute w-6 h-6 text-indigo-500" />
            <Input
              id="email-address"
              type="email"
              autoComplete="email"
              required
              {...getFieldProps("email")}
              touched={touched.email}
              error={errors.email}
              placeholder="Email address"
            />
          </div>
          <div className="pt-2.75 pb-6.25 mb-2 ">
            <FiLock className="absolute w-6 h-6 text-indigo-500" />
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              {...getFieldProps("password")}
              touched={touched.password}
              error={errors.password}
              placeholder="password"
            />
          </div>
        </div>
        <div className="mb-5 text-center">
          <input type="checkbox" name="keep logged" value="logged in"  />
          <label htmlFor="keep logged" className="text-gray-400 mt-14" > Keep me logged in</label>
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
            className="px-4 py-2 text-sm text-white bg-indigo-500 rounded-md shadow-xl hover:transform"
          >
            Get started
          </Button>
          {isSubmitting && <ImSpinner9 className="animate-spin" />}
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
  );
};

Signup.defaultProps = {};

export default memo(Signup);