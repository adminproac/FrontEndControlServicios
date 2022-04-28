// import axios from 'axios';
import React from 'react';
import { getAPI } from '../Helpers/getAPI';
import { Confirm } from '../Helpers/Mensajes';

export const ServiciosList = ({
  servicio,
  setServicio,
  servicios,
  setServicios,
}) => {
  const Editar = (id) =>
    setServicio(servicios.find((x) => x.iidservicio === id));

  const Eliminar = (id) => {
    const url = `http://localhost:4000/servicios/` + id;
    const metodo = { responseType: 'text', method: 'delete' };
    Confirm(() => getAPI(url, metodo, setServicios, servicios));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>IdServicio</th>
          <th>Nombre</th>
          <th>Operaciones</th>
        </tr>
      </thead>
      <tbody>
        {servicios.map((servicio) => (
          <tr key={servicio.iidservicio}>
            <td>{servicio.iidservicio}</td>
            <td>{servicio.nombre}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => Editar(servicio.iidservicio)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => Eliminar(servicio.iidservicio)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
