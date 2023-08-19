import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/SearchBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorite from "./components/Favorite";


const URL_BASE = "http://localhost:3001/rickandmorty/character";



function App() {
   const { pathname } = useLocation();
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);



   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message)
      }
   };



   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   const onSearch = async (id) => {
      try {
         const { data } = await axios.get(`${URL_BASE}/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log(error.message)
      }
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorite />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;
