import {  useState } from "react";
import { Link } from "react-router-dom";
import { validEmail, validName, validPassword, validUserName } from "../assets/Regex";


function Register() {


    const [userData, setUserData] = useState({
        email: "",
        password: "",
        userName: "",
        rePassword: "",
        name: ""

    })
    const [passwordType, setPasswordType] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text")
            return;
        }
        setPasswordType2("password")
    }

    const [error, setErros] = useState({
        email: null,
        password: null,
        userName: null,
        rePassword: null,
        name: null
    })



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
        } else if (e.target.name === "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErros({
                ...error,
                name: e.target.value.length === 0 ? "This Field is Required" :
                    !validName.test(e.target.value) ? "enter name ex: tia bassem " : null

            })
        } else if (e.target.name === "userName") {
            setUserData({
                ...userData,
                userName: e.target.value
            })

            setErros({
                ...error,
                userName: e.target.value.length === 0 ? "This Field is Required" :
                    !validUserName.test(e.target.value) ? " enter user name ex: tiaBassem (at least 8 max 20 at length " : null

            })
        } else if (e.target.name === "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

            setErros({
                ...error,
                password: e.target.value.length === 0 ? "This Field is Required" :
                    !validPassword.test(e.target.value) ? "password must have atleast one number , small lettr , upper letter ,symbol and length between [8,32] " : null

            })
        } else {
            setUserData({
                ...userData,
                rePassword: e.target.value
            })

            setErros({
                ...error,
                rePassword: e.target.value.length === 0 ? "This Field is Required" :
                    !validPassword.test(e.target.value) ? "password confirm must have atleast one number , small lettr , upper letter ,symbol and length between [8,32] and " :
                        e.target.value !== userData.password ? "password must match" : null


            })
        }

    }


    const submitData = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="container cntr rounded-4 shadow bg-warning bg-opacity-10 p-5 text-dark mb-5 mt-5">
                <div className="row ">
                    <div className="col-lg-7">
                        <h1 className="text-dark" ><b>Sign up </b></h1>
                        <form className=" mt-5 text-dark" onSubmit={(e) => submitData(e)} >
                            <div className="input-group ">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-user"></i> </div>
                                <input type="text" name="name" className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                    ${error.name && "border-danger"} `} onChange={(e) => changeUserData(e)} id="name" placeholder="Your Name" />
                            </div>
                            <p className="text-danger">  {error.name}  </p>


                            <div className="input-group mt-4">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-envelope"></i></div>
                                <input type="email" name="email" className={`form-control  bg-white border-start-0 border-top-0 border-end-0
                                ${error.email && "border-danger"} `} onChange={(e) => changeUserData(e)}
                                    id="email" placeholder="Your Email" />
                            </div>
                            <p className="text-danger">  {error.email}  </p>


                            <div className="input-group mt-4">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-user-tie"></i> </div>
                                <input type="text" name="userName" className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.userName && "border-danger"} `} onChange={(e) => changeUserData(e)}
                                    id="userName" placeholder="Your User Name" />
                            </div>
                            <p className="text-danger">  {error.userName}  </p>




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





                            <div className="input-group mt-4">
                                <div className="input-group-text  bg-white border-start-0 border-top-0 border-end-0">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <input type={passwordType2} name="rePassword" className={`form-control  bg-white border-start-0 border-top-0 border-end-0 
                                ${error.rePassword && "border-danger"} `} onChange={(e) => changeUserData(e)}
                                    id="rePassword" placeholder="Repeat Your Password" />
                                <button className="btn btn-light" type='button' onClick={togglePassword2}>
                                    {passwordType2 === "password" ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                </button>
                            </div>
                            <p className="text-danger">  {error.rePassword}  </p>





                            <div className="form-check mb-4 mt-4">
                                <input className="form-check-input" type="checkbox"  id="checkTerminas" />
                                <label className="form-check-label text-light" htmlFor="checkTerminas">
                                    I agree all statements in <a className="card-link text-light" href="terms.com"> Terms of service </a>
                                </label>

                            </div>

                            <input type="submit" className="btn  btn-lg btn-outline-light shadow ps-4 pe-4 " disabled = {error.name || error.email || error.password || error.userName || error.rePassword}
                             value="Register" />
                        </form>

                    </div>
                    <div className="col-lg-5">
                        <div className="text-center p-5">
                            <img className="mb-0 rounded-4" src={require("../assets/minion.jpg")} width="100%" alt="" />
                        </div>
                        <div className="text-center">
                            <Link className="card-link text-light " to="/login"> <b> I am already member </b> </Link>
                        </div>

                    </div>
                </div>
            </div>



        </>

    )

}

export default Register;