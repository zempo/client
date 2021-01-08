import React from "react";
import ReactDOM from "react-dom";
import "../../sass/Plant.scss";

const PlantModal = ({ id, payload, isShowing, hide }) => {
  if (isShowing) {
    return ReactDOM.createPortal(
      <div onClick={hide} className='Modal'>
        <div onClick={(e) => e.stopPropagation()} className={`Modal__inner`}>
          <p>{id}</p>
          <p>{payload.nickname}</p>
          <button className='close-modal' onClick={hide}>
            X
          </button>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  } else {
    return null;
  }
};

export default PlantModal;
