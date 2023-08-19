import { useState } from "react";
import validation from "./Validation"; 
const Form = ({login}) => {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData);
  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
          });

  setErrors(validation({
    ...userData,
    [event.target.name]: event.target.value
  }))
}

  
  return (
    <form 
    // onSubmit={handleSubmit}
    >

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={userData.email}
        type="email"
        placeholder="Ingrece su Email"
        onChange={handleChange}
        />
        {errors.email && <p style={{color: 'red'}}>{errors.email} </p>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        value={userData.password}
        type="password"
        placeholder="Ingrece su contraseña"
        onChange={handleChange}
      />
        {errors.password && <p style={{color: 'red'}}>{errors.password} </p>}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
