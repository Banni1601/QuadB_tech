import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Data } from "../../Context/userContext";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



//Component for Header
function Header() {
  const navigate = useNavigate();
  const { state, setState } = useContext(Data);
  const [show, setShow] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
   // navigate to about page
  const navigateToAllusersData = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/AllusersData");
    }
  };

   // navigate to Client page
  const navigateToUpdate = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/ToUpdate");
    }
  };

   // navigate to Support page
  const navigateToDeleteAUser = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/deleteAUser");
    }
  };

   // log out and navigate to login page
  const logoutComponent = () => {
    if (state.isUserLogin) {
      Cookies.remove("p_token");
      setState((i) => ({ ...i, isUserLogin: false }));
      navigate("/login", { replace: "/login" });
      setShow(false);
    } else {
      setShow(false);
      navigate("/login");
    }
  };

   // navigate to Account page
  const navigateToProfile = ()=>{
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/profile");
    }
  }

   //  login And Logout page
  const loginAndLogout = () => {
    if (state.isUserLogin) {
      setShow(true);
    } else {
      setShow(false);
      navigate("/login");
    }
  };

  // sign in
  const clickSignup = () => {
    navigate("/register");
  };


  //set Currency
  let [selectedOptionCurrency, setSelectedOptionCurrency]= useState('')

  let handleSelectChangeCurrency = async (e)=>{
   await setSelectedOptionCurrency(e.target.value);
  await console.log(e.target.value);
console.log(selectedOptionCurrency);
  }

  //console.log(selectedOptionCurrency);
  //set BTC
  let [selectedOptionBTC, setSelectedOptionBTC] = useState('BTC')

  let handleSelectBTC = async (e)=>{
   await setSelectedOptionBTC(e.target.value);
  console.log(selectedOptionBTC);
  }

  let options = [
    {label:"BTC", value:"BTC"},
    {label:"ETH", value:"ETH"},
    
    {label:"USDT", value:"USDT"},
    
    {label:"XRP", value:"XRP"},
    
    {label:"TRX", value:"TRX"},
    
    {label:"DASH", value:"DASH"},
    
    {label:"ZEC", value:"ZEC"},
    
    {label:"XEM", value:"XEM"},
    
    {label:"IOST", value:"IOST"},

    {label:"WIN", value:"WIN"},

    {label:"BTT", value:"BTT"},
    {label:"WIN", value:"WIN"},
    {label:"WRX", value:"WRX"},
    
  ]

  const navigateToTelegramPage = ()=>{
    if (Cookies.get("p_token") === undefined) {
      
      navigate("/login");
    } else {
      navigate("/AllusersData");
    }
  }

  const navigateToHome = ()=>{
    if (Cookies.get("p_token") === undefined) {
      
      navigate("/login");
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    // If there's no time left, stop the timer
    if (timeLeft === 0){
      setTimeLeft((prevTime) => prevTime+60);
    };

    // Set up the interval to update the timer every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component is unmounted or timeLeft changes
    return () => clearInterval(intervalId);
  }, [timeLeft]); // The effect depends on the timeLeft state
  
  return (
    <div>
    {/* For Small Devices */}
      <div className="header-page-small-device fixed-top">
        <nav className="navbar navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link to="" className="navbar-brand navbarName">
            HODLINFO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">


              
     
            
               
       
                
              
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to="/" className="nav-link " aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    
                    <button className="nav-link" onClick={navigateToProfile}>
                     profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToAllusersData}>
                     All Users Details
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToUpdate}>
                      Update Details
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToDeleteAUser}>
                      Delete Customer
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={loginAndLogout}>
                      {state.isUserLogin ? "Logout" : "Login"}
                    </button>
                  </li>
                  <li className="nav-item" onClick={clickSignup}>
                    {!state.isUserLogin ? (
                      <Link to="/register" className="nav-link">
                        Sign up
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* For large Devices */}
      <div className="header-page-style fixed-top">
        <div className="header-page-website-name-style-div">
          <Link to="/" className="header-pages-features-style-para-style">
            <p className="header-page-website-name-style">HODLINFO</p>
          </Link>
        </div>

        <div className="header-pages-features-style">
        <Link to="/" className="header-pages-features-style-para-style text-center mt-3">
            <p className="header-pages-para-styles">Home</p>
          </Link>
          
         
        <p onClick={navigateToProfile} className=" header-pages-para-styles">
        Profile
          </p>
          <select value={selectedOptionCurrency} onChange={handleSelectChangeCurrency} className="selectt">
        <option value="INR" >INR</option>
        </select>
            <select value={selectedOptionBTC} onChange={handleSelectBTC} className="selectt">
            {
              options.map( i=> ( <option value={i.value}>{i.label}</option> ) )
            }
             </select>
             <button onClick={ () => (window.location.href = 'https://wazirx.com/signup') } className="selectt">
                  BUY BTC
                </button>
                <div >
                <h2 className="timerrrrr">{timeLeft} </h2>
                </div>
                
                <button onClick={navigateToTelegramPage} className="selectt">
  <i className="fa fa-telegram" style={{ fontSize: 24 }}></i> Connect Telegram
</button> 

         
 
        </div>
        <div className="header-page-btns-tyle-div">
          <button
            className="header-page-btns-styles-div-styles"
            onClick={loginAndLogout}
          >
            {state.isUserLogin ? "Logout" : "Login"}
          </button>
          {!state.isUserLogin ? (
            <button
              onClick={clickSignup}
              className="header-page-btns-styles-div-styles"
            >
              {" "}
              <p>Sign Up</p>{" "}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {/*popup modal for logout*/}
      <Modal
        size="sm"
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body>Are You Sure, Want to Logout</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button variant="primary" onClick={logoutComponent}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/*popup modal for Instruct*/}
      <Modal
        size="md"
        show={loginModal}
        onHide={() => setLoginModal(!loginModal)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className="loginModal">
            Please Login or Signup for Access
          </Modal.Title>
        </Modal.Header>
     
      </Modal>
    </div>
  );
}

export default Header;
