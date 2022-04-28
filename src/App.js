import React, { Fragment, useEffect, useState } from 'react';
import { FormServicios } from './Components/FormServicios';
import { Navbar } from './Components/Navbar';
import { ServiciosList } from './Components/ServiciosList';
import { getAPI } from './Helpers/getAPI';

function App() {
  const [servicio, setServicio] = useState({ iidservicio: 0, nombre: '' });
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/servicios/0';
    const metodo = {
      responseType: 'json',
      method: 'get',
    };
    getAPI(url, metodo, setServicios, servicios);
  }, [servicios]);

  return (
    <Fragment>
      <Navbar branch="Control Gastos" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: 'center' }}>Lista Servicios</h2>
            <ServiciosList
              servicio={servicio}
              setServicio={setServicio}
              servicios={servicios}
              setServicios={setServicios}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Formulario Servicios</h2>
            <FormServicios
              servicio={servicio}
              setServicio={setServicio}
              servicios={servicios}
              setServicios={setServicios}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
