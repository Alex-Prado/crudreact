import React, { Fragment } from "react";

const Card = ({ lista, btndelete, btnload }) => {
  return (
    <Fragment>
      {lista.map((item) => (
        <div className="card" key={item.idcontacto}>
          <p>{item.nombre}</p>
          <p>{item.apellido}</p>
          <p>{item.telefono}</p>
          <div className="card-opt">
            <button className="edit" onClick={() => btnload(item)}>
              EDIT
            </button>
            <button
              className="delete"
              onClick={() => btndelete(item.idcontacto)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Card;
