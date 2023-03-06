import { useRef, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Routes, Route } from "react-router-dom";
import Country from './components/main/Country';
function App() {
  const appRef=useRef()
  const[countries,setCountries] =useState([])
  const [val,setVal]=useState("")

  return (
    <div className="App" ref={appRef}>

      <Header countries={countries} setCountries={setCountries} val={val} setVal={setVal} appRef={appRef}/>
      <Routes>
        <Route path="/" element={<Main  countries={countries} setCountries={setCountries} val={val} setVal={setVal}/>}/>
        <Route path='/:name' element={<Country/>} />
      </Routes>
    </div>
  );
}

export default App;
