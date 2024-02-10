import Layout from "../components/layout/Layout";
import Accordion from "../components/accordion/Accordion";
import PaymentCard from "../components/payment/PaymentCard";
import Carousel from "../components/carousel/Carousel";

import {
  BsInfoCircleFill,
  BsInfoCircle,
  BsFillCalendar2Fill,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { FaCircle, FaGooglePay, FaApplePay, FaStar } from "react-icons/fa";
import { IoMdLock, IoMdPeople } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { PiTicketFill } from "react-icons/pi";
import { accordionData } from "../assets/data/accordion";
import faq from "../assets/images/faq.png";

const ConfirmAndPay = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row ps-lg-5 pe-lg-5 ps-2 pe-2 d-flex flex-wrap-reverse">
          <div className="col-md-9">
            <div className="row mt-4 d-none d-lg-block">
              <h1>Confirm & Pay</h1>
            </div>

            <div className="row mt-5 g-0">
              <div className="w-100 p-3 rounded-4 free-cancellation ">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold m-0">Free Cancellation</p>
                  <BsInfoCircleFill className="mt-1" />
                </div>
                <p className="text-secondary m-0">
                  Tickets can be cancelled by 13 December, 2022
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <h3>Enter your details</h3>
              <p>
                We&apos;wll be sending your tickets to the details below.
                Booking for a friend? Add their details.
              </p>
              <form className="mt-3 mb-3">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6  ">
                    <div className="input-group">
                      <span className="input-group-text">
                        <BiWorld />
                      </span>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Country Code</option>
                        <option value={1}>+91</option>
                        <option value={2}>+39</option>
                        <option value={3}>+92</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPhoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPhoneEmail"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPhoneEmailConfirm"
                      placeholder="Confirm Email"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            <hr />

            <div className="row mt-5">
              <h3>Additional Informations</h3>
              <p>We need few more details to complete your reservations.</p>
              <form className="mt-3 mb-3">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPhoneNumber"
                      placeholder="Input label"
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-6  ">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Select</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3   ">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Multiselect</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <hr />

            <div className="row mt-5">
              <h3>Select your mode of payment</h3>
              <p>Payments with Tickete are secured and encrypted</p>
            </div>

            <div className="row g-0">
              <PaymentCard />
            </div>

            <div className="row mt-2  g-0">
              <div className="w-100 p-3 rounded-4 free-cancellation ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="border ps-1 pe-1 pt-0 pb-0 rounded d-flex justify-content-center align-items-center text-secondary">
                      <FaGooglePay size={25} />
                    </div>
                    <p className="fw-bold m-0 fs-5 ms-3 text-secondary">
                      Free Cancellation
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center text-secondary">
                    <FaCircle />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-4  g-0">
              <div className="w-100 p-3 rounded-4 free-cancellation ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="border ps-1 pe-1 pt-0 pb-0 rounded d-flex justify-content-center align-items-center text-secondary">
                      <FaApplePay size={25} />
                    </div>
                    <p className="fw-bold m-0 fs-5 ms-3 text-secondary">
                      Free Cancellation
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center text-secondary">
                    <FaCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="row mt-4 d-block d-lg-none">
              <h1>Confirm & Pay</h1>
            </div>

            <div className="row p-2">
              <div className="ps-2 pe-2 pt-3 pb-5 border rounded-4">
                <Carousel />
                <div className="mt-2 d-flex align-items-center">
                  <FaStar fill="red" />
                  <p className="m-0 ms-2">4.9 (4.5k) Category</p>
                </div>
                <div className="mb-2">
                  <p className="fw-bold">
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </p>
                </div>

                <div className="mt-2 d-flex align-items-center justify-content-start">
                  <PiTicketFill className="mt-1" size={20} />
                  <span className="m-0 ms-2 fw-bold">
                    ticket type - variant
                  </span>
                </div>

                <div className="mt-2 d-flex ">
                  <BsFillCalendar2Fill className="mt-1" size={18} />
                  <div className="d-flex flex-column">
                    <span className="m-0 ms-2 fw-bold">Sat Feb 10/02/24</span>
                    <span className="m-0 ms-2">Duration: 5 days</span>
                  </div>
                </div>

                <div className="mt-2 d-flex ">
                  <IoTime className="mt-1" size={18} />
                  <div className="d-flex flex-column">
                    <span className="m-0 ms-2 fw-bold">time</span>
                    <span className="m-0 ms-2">
                      Operating hours: 10am to 7pm
                    </span>
                  </div>
                </div>

                <div className="mt-2 mb-4 d-flex ">
                  <IoMdPeople className="mt-1" size={18} />
                  <div className="d-flex flex-column">
                    <span className="m-0 ms-2 fw-bold">5 guests</span>
                  </div>
                </div>

                <div className="border border-bottom"></div>

                <div className="pt-2  d-flex justify-content-between align-items-center">
                  <p className="text-secondary text-decoration-underline m-0 fs-6">
                    View payment summary
                  </p>
                  <p className="fs-5 m-0">+</p>
                </div>

                <hr />

                <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
                  <p className=" fw-bold m-0 fs-5">Total Payable</p>
                  <p className="fs-5 m-0 fw-bold">$XXX</p>
                </div>

                <div className="mb-4">
                  <span className=" bg-success text-light p-1 ps-2 pe-2 rounded-5">
                    <CiDiscount1 size={18} />
                    You save $10
                  </span>
                </div>

                <div className="mb-4">
                  <p className=" text-secondary text-decoration-underline ">
                    You wil be charged in AED
                    <BsInfoCircle className="ms-2" size={12} />
                  </p>
                </div>

                <div className="mb-4">
                  <p className="mb-0 fs-6">
                    By clicking &quot;confirm & pay&quot;, you agree to
                    <span className="text-primary text-decoration-underline ms-2 me-2">
                      Tickete&apos;s general terms and conditions
                    </span>
                    and
                    <span className=" text-primary text-decoration-underline ms-2">
                      canellation policy.
                    </span>
                  </p>
                </div>

                <button className="btn bg-black text-light align-content-center  rounded-3 w-100">
                  <IoMdLock className="mb-1" size={18} /> Confirm & pay
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row ps-lg-5 pe-lg-5 ps-2 pe-2 mt-5 mb-5 d-flex flex-wrap-reverse ">
          <div className="col-md-6">
            <div className="row d-none d-lg-block">
              <h3 className="mb-2">Frequently asked question</h3>
              <p className="text-secondary mb-4">
                Here are some of our most asked questions.
              </p>
            </div>

            <div className="row mb-3 pe-lg-5">
              <div>
                <div className="d-flex align-items-center justify-content-between ps-2 pt-2 pb-2 ps-lg-4 rounded-4 bg-secondary-subtle">
                  <div>
                    <p className="fw-bold mb-1 ">Still need help?</p>
                    <p className="fw-bold mb-4 ">We&apos;re here for you.</p>
                    <button className="btn bg-black text-light">
                      Chat with us
                    </button>
                  </div>
                  <div className="faq me-lg-0">
                    <img className="img-fluid" src={faq} alt="faq" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row d-lg-none">
              <h3 className="mb-2">Frequently asked question</h3>
              <p className="text-secondary mb-4">
                Here are some of our most asked questions.
              </p>
            </div>
            <div className="row mb-4">
              <div>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion title={title} content={content} key={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmAndPay;
