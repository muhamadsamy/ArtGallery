import { useState } from "react";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "../assets/Regex";


function Login() {


    const [userData, setUserData] = useState({
        email: "",
        Password: "",
        
    })

    const [error, setErros] = useState({
        email: null,
        password: null,
        

    })
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    

    const changeUserData = (e) => {
         console.log(e.target.name)
        if (e.target.name === "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })

            setErros({
                ...error,
                email: e.target.value.length === 0 ? "This Field is Required" :
                    !validEmail.test(e.target.value) ? "email must be ex: rami@gmail.com" : null
            })
        } else  {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                password: e.target.value.length === 0 ? "This Field is Required" :
                !validPassword.test(e.target.value) ? "password must have atleast one number , small lettr , upper letter ,symbol and length between [8,32] " : null

            })
        }

    }


    const submitData = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="  rounded-4 shadow bg-dark p-5 mb-5 ">
                <div className="row ">
                    <div className="col-lg-5">
                        <div className="text-center">
                            <img className=" mb-0 rounded-2" src={require("../assets/minion.jpg")} width="100%"
                                alt="" />
                        </div>
                        <div className="text-center mt-5 bold">
                            <Link className="card-link text-white " to="/signup"> <b>Create an account</b> </Link>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-light"><b>Sign in</b></h1>
                        <form className=" mt-5 " onSubmit={(e) => submitData(e)}>

                            <div className="input-group ">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-user"></i>

                                </div>
                                <input type="email" className={`form-control  bg-white border-start-0 border-top-0 border-end-0
                                     ${error.email && "border-danger"} `} onChange={(e) => changeUserData(e)}
                                    id="email" placeholder="Your email" name="email" email="true" />

                            </div>
                            <p className="text-danger">  {error.email}  </p>


                            <div className="input-group mt-4">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <input type={passwordType} name="password" className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.password && "border-danger"} `} onChange={(e) => changeUserData(e)}
                                    id="password" placeholder="Your Password" />
                                <button className="btn btn-light" type='button' onClick={togglePassword}>
                                    {passwordType === "password" ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                </button>

                            </div>
                            <p className="text-danger">  {error.password}  </p>




                            <div className="form-check mt-4 mb-4">
                                <input className="form-check-input" type="checkbox" value="" id="checkTerminas" />
                                <label className="form-check-label text-light" htmlFor="checkTerminas">
                                    Remember me
                                </label>

                            </div>

                            <button type="submit" className="btn btn-lg btn-outline-light shadow ps-4 pe-4" disabled={error.password || error.email} > Login </button>
                        </form>

                    </div>

                </div>
            </div >
            </div>



        </>

    )

}

export default Login;