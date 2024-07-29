import { useState } from "react";
import { Link } from "react-router-dom";
import {
  validEmail,
  validName,
  validPassword,
  validPhone,
} from "../assets/Regex";
import {
  HiEnvelope,
  HiEye,
  HiEyeSlash,
  HiLockClosed,
  HiPhone,
  HiUser,
} from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    address: "",
    rePassword: "",
    name: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType2, setPasswordType2] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const togglePassword2 = () => {
    if (passwordType2 === "password") {
      setPasswordType2("text");
      return;
    }
    setPasswordType2("password");
  };

  const [error, setErros] = useState({
    email: null,
    password: null,
    address: null,
    rePassword: null,
    name: null,
    phone: null,
  });

  const changeUserData = (e) => {
    console.log(e.target.name);
    if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });

      setErros({
        ...error,
        email:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validEmail.test(e.target.value)
            ? "email must be ex: rami@gmail.com"
            : null,
      });
    } else if (e.target.name === "name") {
      setUserData({
        ...userData,
        name: e.target.value,
      });

      setErros({
        ...error,
        name:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validName.test(e.target.value)
            ? "enter name ex: tia bassem "
            : null,
      });
    } else if (e.target.name === "phone") {
      setUserData({
        ...userData,
        phone: e.target.value,
      });

      setErros({
        ...error,
        phone:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validPhone.test(e.target.value)
            ? "enter phone ex: 01123412123 "
            : null,
      });
    } else if (e.target.name === "address") {
      setUserData({
        ...userData,
        address: e.target.value,
      });

      setErros({
        ...error,
        address: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    } else if (e.target.name === "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErros({
        ...error,
        password:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validPassword.test(e.target.value)
            ? "password must have atleast one number , small lettr , upper letter ,symbol and length between [8,32] "
            : null,
      });
    } else {
      setUserData({
        ...userData,
        rePassword: e.target.value,
      });

      setErros({
        ...error,
        rePassword:
          e.target.value.length === 0
            ? "This Field is Required"
            : !validPassword.test(e.target.value)
            ? "password confirm must have atleast one number , small lettr , upper letter ,symbol and length between [8,32] and "
            : e.target.value !== userData.password
            ? "password must match"
            : null,
      });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000); //
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(
          error.response.data.msg || "Registration failed. Please try again."
        );
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="container cntr rounded-4 shadow bg-warning bg-opacity-10 p-5 text-dark mb-5 mt-5">
        <div className="row ">
          <div className="col-lg-7">
            <h1 className="text-dark">
              <b>Sign up </b>
            </h1>
            <form className=" mt-5 text-dark" onSubmit={(e) => submitData(e)}>
              <div className="input-group ">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <HiUser />{" "}
                </div>
                <input
                  type="text"
                  name="name"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                    ${error.name && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <p className="text-danger"> {error.name} </p>

              <div className="input-group mt-4">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <HiEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0
                                ${error.email && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <p className="text-danger"> {error.email} </p>

              <div className="input-group mt-4">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <MdLocationOn />{" "}
                </div>
                <input
                  type="text"
                  name="address"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.address && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="address"
                  placeholder="Your Address"
                />
              </div>
              <p className="text-danger"> {error.address} </p>

              <div className="input-group mt-4">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <HiPhone />{" "}
                </div>
                <input
                  type="text"
                  name="phone"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.phone && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="phone"
                  placeholder="Your phone"
                />
              </div>
              <p className="text-danger"> {error.phone} </p>

              <div className="input-group mt-4">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <HiLockClosed />
                </div>
                <input
                  type={passwordType}
                  name="password"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.password && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="password"
                  placeholder="Your Password"
                />
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? <HiEyeSlash /> : <HiEye />}
                </button>
              </div>
              <p className="text-danger"> {error.password} </p>

              <div className="input-group mt-4">
                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                  <HiLockClosed />
                </div>
                <input
                  type={passwordType2}
                  name="rePassword"
                  className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.rePassword && "border-danger"} `}
                  onChange={(e) => changeUserData(e)}
                  id="rePassword"
                  placeholder="Repeat Your Password"
                />
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={togglePassword2}
                >
                  {passwordType2 === "password" ? <HiEyeSlash /> : <HiEye />}
                </button>
              </div>
              <p className="text-danger"> {error.rePassword} </p>

              <div className="form-check mb-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkTerminas"
                />
                <label
                  className="form-check-label text-dark"
                  htmlFor="checkTerminas"
                >
                  I agree all statements in{" "}
                  <a className="card-link text-dark" href="terms.com">
                    {" "}
                    Terms of service{" "}
                  </a>
                </label>
              </div>
              {message && (
                <Alert variant='info'>
                  {message}
                </Alert>
              )}
              <input
                type="submit"
                className="btn  btn-lg btn-outline-dark shadow ps-4 pe-4 "
                disabled={
                  userData.rePassword === "" ||
                  error.name ||
                  error.email ||
                  error.phone ||
                  error.password ||
                  error.address ||
                  error.rePassword
                }
                value="Register"
              />
            </form>
          </div>
          <div className="col-lg-5">
            <div className="text-center p-5">
              <img
                className="mb-0 rounded-4"
                src={require("../assets/minion.jpg")}
                width="100%"
                alt=""
              />
            </div>
            <div className="text-center">
              <Link className="card-link text-dark " to="/login">
                {" "}
                <b> I am already member </b>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
