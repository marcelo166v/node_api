import React,{useState} from "react";
import "./ActionsMenu.css";

function ActionsMenu({ cambiarModal = () => {}, modalShow = () => {} ,titulo }) {

    return (
    <div className="actions-menu">
      <h1>{titulo}</h1>
      <div className="actions-menu-content">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={modalShow}
        >
          Nueva
        </button>
      </div>
    </div>
  );
}

export default ActionsMenu;
