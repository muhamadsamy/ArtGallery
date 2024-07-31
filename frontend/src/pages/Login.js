import { useState } from "react";
import { Link } from "react-router-dom";
import { validEmail } from "../assets/Regex";
import { HiEnvelope, HiEye, HiEyeSlash, HiLockClosed } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { loginUser } from "../api";

function Login() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    Password: "",
  });

  const [error, setErros] = useState({
    email: null,
    password: null,
  });
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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
    } else {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErros({
        ...error,
        password: e.target.value.length === 0 ? "This Field is Required" : null,
      });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(userData);
      const { token } = response.data;
      const {customer} = response.data;
      localStorage.setItem("customer",  JSON.stringify(customer));
      sessionStorage.setItem("authToken", token);
      setMessage("Login successful! Redirecting to home...");

      setTimeout(() => {
        navigate("/");
      }, 2000); 
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
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="  rounded-4 shadow bg-warning bg-opacity-10 p-5 mb-5 ">
          <div className="row ">
            <div className="col-lg-5">
              <div className="text-center">
                <img
                  className=" mb-0 rounded-2"
                  src={require("../assets/minion.jpg")}
                  width="100%"
                  alt=""
                />
              </div>
              <div className="text-center mt-5 bold">
                <Link className="card-link text-dark " to="/signup">
                  {" "}
                  <b>Create an account</b>{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <h1 className="text-dark">
                <b>Sign in</b>
              </h1>
              <form className=" mt-5 " onSubmit={(e) => submitData(e)}>
                <div className="input-group ">
                  <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                    <HiEnvelope />
                  </div>
                  <input
                    type="email"
                    className={`form-control  bg-white border-start-0 border-top-0 border-end-0
                                     ${error.email && "border-danger"} `}
                    onChange={(e) => changeUserData(e)}
                    id="email"
                    placeholder="Your email"
                    name="email"
                    email="true"
                  />
                </div>
                <p className="text-danger"> {error.email} </p>

                <div className="input-group mt-4">
                  <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                    <HiLockClosed />{" "}
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

                <div className="form-check mt-4 mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkTerminas"
                  />
                  <label
                    className="form-check-label text-dark"
                    htmlFor="checkTerminas"
                  >
                    Remember me
                  </label>
                </div>
                {message && <Alert variant="info">{message}</Alert>}
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-dark shadow ps-4 pe-4"
                  disabled={error.password || error.email}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
