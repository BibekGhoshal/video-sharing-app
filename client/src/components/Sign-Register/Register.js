
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';

const Register = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', profession: '', password: '', cpassword: '' });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession, password, cpassword } = user;

    if (password !== cpassword) {
      window.alert("Password doesn't match confirm password");
    } else {
      const res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, profession, password }),
      });
      const data = await res.json();
      if (data.status === 'Failed') {
        toast.error(data.message, {
          position: 'top-center',
        });
      } else {
        toast.success('Registration Successful 😊', {
          position: 'top-center',
        });
        navigate1('/sign');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <main>
        <section className="sec-first">
          <img src="https://img.freepik.com/free-vector/retro-film-wallpaper-with-realistic-projector_1284-13524.jpg?size=626&ext=jpg&ga=GA1.1.1376891991.1686411694&semt=ais" alt="" />
          {/* https://w0.peakpx.com/wallpaper/699/529/HD-wallpaper-allu-arjun-pushpa-telugu-movie-ezdi-biker.jpg */}
          <div className="logo">
            <h1>Tuner</h1>
            <div> Enjoy Multiple videos at one place!</div>
          </div>
          <button onClick={() => navigate('/sign')}>Sign in</button>
        </section>
        <section className="sec-second register">
          <form method="POST" className="formdata">
            <h1>Register</h1>
            <div>Register to continue access pages</div>
            <button id="btn-circle">+</button>
            <br />
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleInputs} value={user.name} />
            <br />

            <input type="email" name="email" id="email" placeholder="Email" onChange={handleInputs} value={user.email} />
            <br />

            <input type="number" name="phone" id="phone" placeholder="Phone" onChange={handleInputs} value={user.phone} />
            <br />

            <input
              type="text"
              name="profession"
              id="profession"
              placeholder="Profession"
              onChange={handleInputs}
              value={user.profession}
            />
            <br />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInputs}
              value={user.password}
            />
            <br />

            <input
              type="password"
              name="cpassword"
              id="cpasswword"
              placeholder="Confirm Password"
              onChange={handleInputs}
              value={user.cpassword}
            />
            <br />

            <input className="submit" type="submit" name="signup" id="signup" value="Register" onClick={Postdata} />
            <br />
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;

