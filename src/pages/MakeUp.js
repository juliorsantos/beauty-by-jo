import { useState } from "react"
import { Parallax, Background } from "react-parallax";

import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import BeautySupplies from "../assets/images/makeup.jpg"

import DatePicker from 'react-date-picker'

import "../styles/pages/services.scss"
import "../styles/components/parallax.scss"


export default function MakeUp() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [value, onChange] = useState(new Date())

    const timeArray = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM"]

    return (
        <div className="service-container">
            <Parallax className="parallax-container" bgImage={BeautySupplies} strength={500}>
                <div className="parallax-container-text">
                    <h1>Makeup</h1>                  
                </div>
            </Parallax>
            <div className="price-content">
                <div className="price">
                    <div className="price-wrapper">
                        <div className="price-title">Make up consultation</div>
                        <div className="price-cost-time">
                            <p><AiOutlineDollarCircle/> $50</p>
                            <p><BiTimeFive/> 1 hour - 1 hour thirty minutes</p>
                        </div>
                        <div className="button-wrapper">
                            <button className="price-button">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-definition">
                <p>Prior to appointment, please send your look inspirations to <b>beautybyjocahill@gmail.com.</b> The price    of            your makeup session will have to be discussed after inspiration pictures are sent.   Different looks          require a different amount of time and product, therefore they will be   priced accordingly. </p>                    
            </div>
        </div>
    )
}