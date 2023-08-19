import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handelChange = (event) => {
    setId(event.target.value);
   
  };

  return (
    <div>
      <input type="search" onChange={handelChange} value={id} />
      <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
    </div>
  );
}
