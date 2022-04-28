import axios from 'axios';
import { Ejecutado, Error } from './Mensajes';

export const getAPI = (url, method, setServicios, servicios) => {
  axios(url, method)
    .then((response) => {
      if (method.responseType === 'json') {
        setServicios(response.data);
      } else {
        Ejecutado(response.text);
      }
    })
    .catch((error) => Error('Ha ocurrdio un error.' + error));
};
