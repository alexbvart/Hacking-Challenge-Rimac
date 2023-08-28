import * as yup from 'yup';

export const schemaPlan = yup
  .object({

    amount: yup
        .number()
        .required('Monto es requerido')
        .integer()
        // .lessThan(16500)
        // .moreThan(12499)
        .max(16500, "El monto no puede ser mayor a $ 16.500")
        .min(12500, "El monto no puede ser menor a $ 12.500"),
        
    // stolenTire:yup
    //     .bool()
    //     ,

    // runOver: yup
    //     .bool()
    //     ,
    
    // redLightRunning: yup
    //     .bool()
    //     ,
  })
  .required();