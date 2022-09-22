import React, { Fragment, useState, useEffect } from "react";
import Card from "./components/Card.js";
import Modal from "./components/Modal.js";
const App = () => {
  useEffect(() => {
    list();
  }, []);

  const [lista, setlista] = useState([]);

  const api = "http://localhost/APPCRUD/controller/Contacto.controller.php";
  const apiUrl = async (url, action, json = true) => {
    let formdata = new FormData();
    formdata.append("action", action);
    const data = await fetch(url, {
      method: "POST",
      body: formdata,
    });
    const dato = await (json ? data.json() : data.text());
    return dato;
  };
  const btndelete = (id) => {
    console.log(id);
  };
  const btnload = (data) => {
    console.log(data);
  };
  const addcontact = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const list = () => {
    apiUrl(api, "list").then((data) => setlista(...lista, data));
  };
  return (
    <Fragment>
      <Modal addcontact={addcontact} />
      <section>
        <div className="container">
          <Card lista={lista} btndelete={btndelete} btnload={btnload} />
        </div>
      </section>
    </Fragment>
  );
};

export default App;
