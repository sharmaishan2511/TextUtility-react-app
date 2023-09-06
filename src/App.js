// import logo from './logo.svg';
import React , {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is on","Success")
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is on","Success")
    }
  }

  return (
    
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode = {togglemode}/>
    <Alert alert={alert} />
    <div className="container">
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    <About></About> */}
    <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;
