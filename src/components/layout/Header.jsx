import {
  IoMdLock,
  IoIosHelpCircleOutline,
  IoIosArrowRoundBack,
} from "react-icons/io";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-around align-items-center pt-3 pb-3">
        <div className="d-flex align-items-center">
          <IoIosArrowRoundBack size={30} className="d-sm-block d-lg-none" />
          <h3 className="fw-bold d-lg-block d-none">tickete</h3>
        </div>
        <div className="d-flex align-items-center ">
          <IoMdLock className="text-secondary" size={20} />
          <p className="text-capitalize text-secondary mb-0 ms-1">checkout</p>
        </div>
        <div className="d-flex align-items-center">
          <IoIosHelpCircleOutline size={20} />
          <p className="text-capitalize mb-0 ms-1 d-lg-block d-none">help</p>
        </div>
      </div>
      <div className="row">
        <p className="pt-2 pb-2 bg-dark text-light text-center">
          Holding you tickets for 30:00
        </p>
      </div>
    </div>
  );
};

export default Header;
