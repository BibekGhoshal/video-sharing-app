import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Upload from "../../Upload-Search-Streaming/Upload";
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const navigateRegister = useNavigate();
  const navigateSignIn = useNavigate();
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  // const nav3 = useNavigate();
  const nav4 = useNavigate();
  const token = localStorage.getItem("mytoken");

  useEffect(() => {
    if (token) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [token]);

  const handleSignout = async () => {
    localStorage.removeItem("mytoken");
    toast.success("Logout Successful 😔",{
      position:"top-center"
    });
    navigate("/");
  };

  const handleSearch = () => {
    nav2(`/search?q=${q}`);
  };

  return (
    <>
      {!toggle ? (
        <nav>
          <div className="Container">
            <h1 className="heading" onClick={() => nav4("/")}>
              Tuner
            </h1>
            <div>
              <input
                placeholder="Search Here"
                className="input"
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div>
              <button className="search-btn1" onClick={handleSearch}>
                Search Now
              </button>
            </div>
            <div
              className="btn-1"
              onClick={() => {
                navigateSignIn("/sign");
              }}
            >
              Login
            </div>
            <div className="com-btn">|</div>
            <div
              className="btn-2"
              onClick={() => {
                navigateRegister("/register");
              }}
            >
              Register
            </div>
          </div>
        </nav>
      ) : (
        <>
          <nav>
            <div className="Container">
              <h1 className="heading" onClick={() => nav4("/")}>
                Tuner
              </h1>
              <div>
                <input
                  placeholder="Search"
                  className="input1"
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
              <div>
                <button className="search-btn1" onClick={handleSearch}>
                  Search Now
                </button>
              </div>
              <div
                className="btn-3"
                onClick={() => {
                  nav1("/myvideos");
                }}
              >
                My Videos
              </div>
              <div className="com-btn">|</div>
              <div className="btn-4" onClick={() => setOpen(true)}>
                Upload
              </div>
              <span className="com-btn">|</span>
              <div className="btn-5" onClick={handleSignout}>
                Sign out
              </div>
            </div>
          </nav>
          {open && <Upload setOpen={setOpen} />}
        </>
      )}
    </>
  );
}

export default Navbar;
