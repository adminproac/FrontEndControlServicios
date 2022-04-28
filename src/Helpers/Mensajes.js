import Swal from 'sweetalert2';

export const Confirm = (callback) => {
  Swal.fire({
    title: 'Confirmación',
    text: 'Esta seguro',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    allowOutsideClick: false,
    width: '25rem',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};

export const Error = (msg) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: msg,
    allowOutsideClick: false,
  });
};

export const Ejecutado = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Ejecutado!!!!',
    showConfirmButton: false,
    timer: 1200,
    width: '25rem',
  });
};
