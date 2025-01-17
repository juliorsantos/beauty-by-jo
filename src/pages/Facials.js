import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";
import {
  backService,
  bookService,
  change,
} from "../store/actions/schedule";

import "../styles/pages/services.scss";
import "../styles/pages/facials.scss";
import "../styles/components/parallax.scss";

import BeautySupplies from "../assets/images/about-us.jpg";

export default function Facials() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(display_appointment_modal(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { access_token } = useSelector((state) => state.auth);

  const handleBooking = (service) => {
    dispatch(backService({ back_service: false }));
    dispatch(bookService({ isBooking: true }));
    dispatch(change({ specific_service_id: 2 }));
    dispatch(change({ specific_service: service }));
    if (access_token) {
      dispatch(display_appointment_modal(true));
    } else {
      history.push("/signin");
    }
  };

  return (
    <div className="service-container">
      <Parallax
        className="parallax-container"
        bgImage={BeautySupplies}
        strength={500}
      >
        <div className="parallax-container-text">
          {/* <div style={{ height: 400 }}> */}
          <h1>Facials</h1>
        </div>
      </Parallax>
      <div className="price-content">
        <div className="price">
          <div className="price-wrapper">
            <div className="price-title">
              <h5>MINI MAKEOVER</h5>
              <p>
                {" "}
                The mini makeover is everything you need to feel refreshed and
                revived if 45 minutes is all your busy schedule allows.{" "}
              </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $50-$60
              </p>
              <p>
                <BiTimeFive /> 45min
              </p>
            </div>

            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 18,
                    name: "mini-makeover",
                    price: "60.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>SIGNATURE JO-GLOW</h5>
              <p>
                The Signature Jo-Glow is the ultimate spa experience. It's the
                perfect mix of customized treatments for your personal skin care
                needs and goals, all white laying back and indulging in the
                relaxation you deserve! Great for all ages, ethnicities, and
                skin types.{" "}
              </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $80
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>

            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 19,
                    name: "signature jo-glo",
                    price: "80.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>THE DESIRED DETOX</h5>
              <p>
                The Desired Detox is for the skins that are clogged, congested,
                and in need of a little extra help! With this treatment we focus
                on the extracting of present acne, the healing of the skin, and
                the prevention of future blemishes. Great for everyone with
                problem areas and troubled skin, especially teens.{" "}
              </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $100
              </p>
              <p>
                <BiTimeFive /> 1h 15min
              </p>
            </div>

            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 20,
                    name: "the desired detox",
                    price: "100.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>THE SENSITIVE SKIN SERENITY</h5>
              <p>
                The Sensitive Skin Serenity is for the reactive, the rosacea,
                and the really sensitive skins that need extra care. This
                treatment will assess personal needs, whether that be anti-aging
                or acne all while tending to the sensitivity of the skin.
              </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $85
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>

            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 21,
                    name: "the sensitive skin serenity",
                    price: "85.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="price-wrapper">
            <div className="price-title">
              <h5>ANTI-AGE RADIATE REJUVENATE</h5>
              <p>
                Anti-aging Radiate Rejuvenate is a personalized service for the
                more mature skins that want to be revitalized, firmed, and
                glowy. Perfect for aging, dull skin in need of a pick me up.{" "}
              </p>
            </div>
            <div className="price-cost-time">
              <p>
                <AiOutlineDollarCircle /> $85
              </p>
              <p>
                <BiTimeFive /> 1h
              </p>
            </div>

            <div className="button-wrapper">
              <button
                onClick={() =>
                  handleBooking({
                    id: 22,
                    name: "anti age radiate rejuvenate",
                    price: "85.00",
                    status: true,
                  })
                }
                className="price-button"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}