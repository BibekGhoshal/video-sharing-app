import './Style.css'
import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function SingIn(){
    const navigate = useNavigate();
    const navigate1=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");

    const loginuser=async (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8080/signin",{email,password})
        .then((res)=>{
            localStorage.setItem("mytoken",res.data.Token);
            // window.alert("Signin successful")
            toast.success("Login successful 😊",{
                position: "top-center",
            });
            navigate1("/");
        }).catch((err)=>{
            // window.alert("Invalid Credentials")
            toast.error("Invalid Credentials",{
                position: "top-center",
            });
        })

        
    }
    return (<>
        <main>
            <section className="sec-first">
                <img src="https://img.freepik.com/free-photo/beautiful-african-girl-with-funny-hairstyle-watching-movie-cinema_7502-4609.jpg?w=1060&t=st=1686411781~exp=1686412381~hmac=5a3267c8ddbdbfaf4cdd715ba85ebdc79ee0e60bc47d331a27b43b74584832b3" alt=""/>
                <div className='logo'>
                <h1>Tuner</h1>
                <div>Enjoy Multiple videos at one place!</div>
                
                </div>
                <button  onClick={() => navigate('/register')}>Register</button>
            </section>
            <section className="sec-second">
                <form  className='formdata' method='POST'>
                    <h1>Sign in</h1>
                    <div>Sign in to continue access pages</div><br />
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                    <input type="password" name="passord" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                    <input  className="submit" type="submit" name="signup" id="signup" value="Signin" onClick={loginuser}></input><br />
                </form>
            </section>
        </main>
    </>);
}
export default SingIn;