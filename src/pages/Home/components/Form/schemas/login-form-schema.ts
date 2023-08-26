import * as yup from 'yup';

export const schema = yup
  .object({

    dni: yup
        .string()
        .required('DNI es requerido')
        .max(8, 'DNI debe ser máximo de 8 caracteres')
        .min(8, 'DNI debe tener 8 caracteres')
        .matches(
            /^\d{8}$/,
            'DNI debe tener 8 caracteres'
        ),
        
    cellPhone:yup
        .string()
        .required('Celular es requerido')
        .max(9, 'Celular debe tener máximo 9 caracteres')
        .min(9, 'Celular debe tener 9 caracteres')
        .matches(
            /^\d{9}$/,
            'Celular debe tener 8 caracteres'
        ),

    licensePlate: yup
      .string()
      .required('Paca de auto es requerida')
      .max(7, 'Paca de auto debe tener máximo de 7 caracteres')
      .min(6, 'Paca de auto debe tener 6 caracteres')
      .matches(
        /^[A-Za-z]{3}[0-9]{3}$/,
        'La placa debe ser alfanumérico. Ejemplo: C2U-114'
      )
  })
  .required();