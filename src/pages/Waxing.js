import { useState } from "react";
import { Parallax, Background } from "react-parallax";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import BeautySupplies from "../assets/images/about-us.jpg";

import DatePicker from "react-date-picker";

import "../styles/pages/services.scss";
import "../styles/components/parallax.scss";

export default function Waxing() {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [value, onChange] = useState(new Date());

  const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"];

  return (
    <div className="service-container">
      <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>
            <b>Waxing</b>
          </h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          <div className="price-wrapper">
            <div className="price-title">
              <h5>FULL LEG</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $55
              </p>
              <p>
                <BiTimeFive /> 45 minutes
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>HALF LEG (above or below the knee)</h5>{" "}
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $35
              </p>
              <p>
                <BiTimeFive /> 55 minutes
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>FULL ARM</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $40
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>HALF ARM (above or below elbow)</h5>{" "}
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $30
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>ARMPITS</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $20
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BIKINI</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $30
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>FRENCH BIKINI</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $45
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>BRAZILIAN</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $65
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>LIP OR CHIN</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $10
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>FULL FACE(lip, chin, brows, sides)</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $40
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>EYEBROW SHAPING</h5>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $15
              </p>
              <p>
                <BiTimeFive /> 1 hour
              </p>
            </div>
            <div className="button-wrapper">
              <button className="price-button">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Full leg- $55: 55 minutes including 10 minutes for clean up
// Half Leg (above or below the knee)- $35: 40 minutes including 10 minute clean up
// Full Arm- $40: 40 minutes including 10 minute clean up
// Half Arm (above or below elbow)- $30: 30 minutes including 10 minute clean up
// Armpits- $20: 20 minutes including 10 minute clean up
// Bikini- $30: 25 minutes including 10 minute clean up
// French Bikini- $45: 35 minutes including 10 minute clean up
// Brazilian- $65: 45 minutes including 10 minute clean up
// Lip or Chin- $10: 15 minutes including clean up
// Full face (lip, chin, brows, sides)- $40: 30 minutes including 10 minute clean up time
// <p>Eyebrow Shaping- $15: 20 minutes including 10 minute clean up</p>
