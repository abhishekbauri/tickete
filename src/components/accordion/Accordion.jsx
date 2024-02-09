import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border border-secondary-subtle mb-3 rounded-3">
      <div className=" p-3">
        <div
          className="d-flex align-items-center"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="fw-bold me-3 fs-3 text-secondary">
            {isActive ? "x" : "+"}
          </div>
          <div className="fw-bold fs-5">{title}</div>
        </div>
        {isActive && <div className="ms-4 mt-2 mb-3">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
