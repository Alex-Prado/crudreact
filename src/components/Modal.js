import React from "react";

const Modal = ({ addcontact }) => {
  return (
    <div className="modal">
      <form onSubmit={addcontact} className="form">
        <div className="form-content">
          <input
            type="text"
            className="form-input"
            name="nombre"
            placeholder="Nombre"
          />
        </div>
        <div className="form-content">
          <input
            type="text"
            className="form-input"
            name="apellido"
            placeholder="Apellido"
          />
        </div>
        <div className="form-content">
          <input
            type="text"
            className="form-input"
            name="telefono"
            placeholder="telefono"
          />
        </div>
        <div className="form-content">
          <button className="form-btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
