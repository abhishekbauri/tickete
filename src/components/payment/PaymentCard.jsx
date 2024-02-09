import { FaDotCircle } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { CiCreditCard1, CiDiscount1 } from "react-icons/ci";
import { IoMdLock } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";

const PaymentCard = () => {
  return (
    <form className="mt-3 mb-3 border border-black rounded-2 p-3">
      <div className="d-flex mb-4 justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <CiCreditCard1 className="border rounded" size={18} />

          <p className="ms-2 mb-0 fw-bold">Credit & debit card</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <FaDotCircle />
        </div>
      </div>

      <div className="d-flex mb-4 ">
        <div className="border ps-2 pe-2 rounded d-flex justify-content-center align-items-center">
          <RiVisaLine fill="blue" size={22} />
        </div>
        <div className="border ps-2 pe-2 ms-3 rounded d-flex justify-content-center align-items-center">
          <SiMastercard fill="orange" size={22} />
        </div>
      </div>

      <div className="row">
        <div className="mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Name on card"
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputCardNumber"
            placeholder="Card number"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputExpiryDate"
            placeholder="Expiry date"
            required
          />
        </div>
        <div className="mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            id="exampleInputCVV"
            placeholder="<CVV/CVC>"
            required
          />
        </div>
      </div>

      <hr />

      <div className=" d-flex justify-content-between align-items-center">
        <p className="fw-bold">Total Payable: $XXX</p>
        <p className=" bg-success text-light p-1 ps-2 pe-2 rounded-5">
          <CiDiscount1 size={18} />
          You save $10
        </p>
      </div>
      <p className=" text-secondary text-decoration-underline mb-3">
        You wil be charged in AED
        <BsInfoCircle className="ms-2" size={12} />
      </p>
      <p className="mb-3">
        By clicking &quot;confirm & pay&quot;, you agree to
        <span className="text-primary text-decoration-underline ms-1 me-1">
          Tickete&apos;s general terms and conditions
        </span>
        and
        <span className=" text-primary text-decoration-underline ms-1">
          canellation policy.
        </span>
      </p>

      <button className="btn bg-black text-light align-content-center ps-3 pe-3 rounded-3">
        <IoMdLock className="mb-1" size={18} /> Confirm & pay
      </button>
    </form>
  );
};

export default PaymentCard;
