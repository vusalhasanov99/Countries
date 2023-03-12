import { useContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Routes, Route } from "react-router-dom";
import Country from './components/main/Country';
import { ThemeContext } from './components/Context';
function App() {
  const [countries, setCountries] = useState([])
  const [val, setVal] = useState("")

  const themes = {
    dark: {
      background: "#212121",
      color: "#fff"
    },
    light: {
      background: "#fff",
      color: "#212121"
    }
  }
  const [theme, setTheme] = useState(themes.light)
  const obj = {
    themes,
    theme,
    setTheme
  }
  return (
    <ThemeContext.Provider value={obj}>
      <div style={theme} className="App">
        <Header countries={countries} setCountries={setCountries} val={val} setVal={setVal} />
        <Routes>
          <Route path="/" element={<Main countries={countries} setCountries={setCountries} val={val} setVal={setVal} />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
