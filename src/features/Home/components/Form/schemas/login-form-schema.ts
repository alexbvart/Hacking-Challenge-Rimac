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
        .required('Placa de auto es requerida')
        .max(6, 'Placa de auto debe tener máximo de 6 caracteres')
        .min(6, 'Placa de auto debe tener 6 caracteres')
        .matches(
            // /^[a-zA-Z][0-9a-zA-Z]{5}([0-9a-zA-Z])?$/,
            /^[a-zA-Z][0-9a-zA-Z]{5}$/,
            'La placa debe ser alfanumérico. Ejemplo: C2U-114'
        ),

    acceptTerms: yup
        .bool()
        .required("Acepte los termino para continuar")
        .oneOf([true])
  })
  .required();