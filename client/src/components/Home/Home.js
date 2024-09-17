import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Data } from "../../Context/userContext";
import InteractiveImage from "../InteractiveImage/InteractiveImage";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';



//Component for Home for Interactive Image and Content
let Home =  ()  =>  {
  const { state, popUps, setPopUps } = useContext(Data);
  const navigate = useNavigate();
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
    {label:"WRX", value:"WRX"}
    
  ]

  //set Currency
  let [selectedOptionCurrency, setSelectedOptionCurrency]= useState('INR')

  let handleSelectChangeCurrency = async (e)=>{
   await setSelectedOptionCurrency(e.target.value);
  await console.log(e.target.value);
console.log(selectedOptionCurrency);
  }


  const [timeLeft, setTimeLeft] = useState(60); // Set the initial time (e.g., 60 seconds)

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

  const navigateToTelegramPage = ()=>{
    if (Cookies.get("p_token") === undefined) {
      
      navigate("/login");
    } else {
      navigate("/AllusersData");
    }
  }

  


  const [tickers, setTickers] = useState([]);

   // Fetch data from the Express server
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/fetch-and-store');
        setTickers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(tickers)

  
  return (
    <div className="home-page-main-div">

      {/* Home Page for samll devices*/}
      <div className="home-page-div clearforlarge">
        
        <div className="features-div" >
       
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

                <h2 className="timerrrrr text-center">{timeLeft} </h2>
                <button onClick={navigateToTelegramPage} className="selectt">
                <i className="fa fa-telegram" style={{ fontSize: 24 }}></i> Connect Telegram
                </button>
        </div>
        <div className="home-page-image-div">
          <h1 className="mt-3">The Best price to Trade</h1>
          <h1>Top 10 WazirX Tickers</h1>
      <table>
        <thead>
          <tr >
            <th >Name</th>
            <th >Last</th>
            <th >Buy</th>
            <th >Sell</th>
            <th >Volume</th>
            <th >Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, index) => (
            <tr key={index}>
              <td >{ticker.name}</td>
              <td>{ticker.last}</td>
              <td>{ticker.buy}</td>
              <td >{ticker.sell}</td>
              <td >{ticker.volume}</td>
              <td >{ticker.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>



      </div>
      

      {/* Home Page from medium devices*/}
      <div className=" home-page-div clearforsmall">
   
        <div className="home-page-image-div">
        <h1 className="mt-1">The Best price to Trade</h1>
        <h1>Top 10 WazirX Tickers</h1>
        
      <table>
        <thead>
          <tr >
            <th className="tablee-names">Name</th>
            <th className="tablee-names">Last</th>
            <th className="tablee-names">Buy</th>
            <th className="tablee-names">Sell</th>
            <th className="tablee-names">Volume</th>
            <th className="tablee-names">Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, index) => (
            <tr key={index}>
              <td className="tablee-values">{ticker.name}</td>
              <td className="tablee-values">{ticker.last}</td>
              <td className="tablee-values">{ticker.buy}</td>
              <td className="tablee-values">{ticker.sell}</td>
              <td className="tablee-values">{ticker.volume}</td>
              <td className="tablee-values">{ticker.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>


        </div>
           
     



        


     

      {/* Toast container */}
      <ToastContainer
        className="p-5"
        position="bottom-end"
        style={{ zIndex: 1 }}
      >
        <Toast
          show={popUps.showToast}
          onClose={() => setPopUps((i) => ({ ...i, showToast: false }))}
          className=""
        >
          <Toast.Header className="">
            <img
              src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
              className="rounded me-0 "
              height={30}
              alt=""
            />
            <strong className="me-auto ">Hi {state.currentUserFirstName + " "+state.currentUserLastName }</strong>
          </Toast.Header>
          <Toast.Body className="text-center text-dark">
            You successfully logged in
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Home;
