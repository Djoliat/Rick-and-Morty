const validation = (userData) => {
  const errors = {};

  if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
    errors.email = "Email ingresado no es valido PAPU/MAMU";
  }
  if (!userData.email) {
    errors.email = "Debe ingresar un email";
  }
  if (userData.email.legth > 35) {
    errors.email = "debe tener menos de 35 caracteres";
  }
  if(!/^(?=.*\d).{6,}$/.test(userData.password)){
   errors.password = 'la contraseña debe tener al menos un numero '
  }
  if (userData.password.length < 6 || userData.password.length > 10 ){
   errors.password = 'la contraseña debe tener entre 6 y 10 caracteres'
  }
  return errors;
};

export default validation;
