export const formValidation = (errors:any, errorKey:string) => {
    
    return errors[errorKey] ? (
      <span color='red'>{errors[errorKey].message}</span>
    ) : (
      ''
    );
  };