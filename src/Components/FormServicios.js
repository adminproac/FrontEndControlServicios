import React from 'react';
import { getAPI } from '../Helpers/getAPI';

export const FormServicios = ({
  servicio,
  setServicio,
  servicios,
  setServicios,
}) => {
  const { iidservicio, nombre } = servicio;

  const handleChange = (e) => {
    setServicio({
      ...servicio,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/servicios/`;
    const metodo = {
      responseType: 'text',
      method: 'POST',
      data: servicio,
    };
    getAPI(url, metodo, setServicios, servicios);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <label className="form-label" htmlFor="txtid">
                IdServicio
              </label>
              <input
                className="form-control"
                id="txtid"
                type="number"
                name="iidservicio"
                value={iidservicio}
                onChange={handleChange}
              />
            </div>
            <div className="col-8">
              <label className="form-label" htmlFor="txtnombre">
                Nombre
              </label>
              <input
                className="form-control"
                id="txtnombre"
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
