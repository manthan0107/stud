
import './App.css';
import { Routes, Route } from "react-router-dom";
import Function_com from './function_com';
import Class_com from './class_com';
import Props_function from './props_function';
import Props_class from './props_class';
import Header from './Header';
import Home from './Home';
import Contect from './Contect';
import Feedback from './Feedback';
import Login from './Login';
import Registration from './Registration';
import About from './About';
import Footer from './Footer';
import ListPassEx from './ListPassEx';
import Listmultiple from './Listmultiple';
import List from './List';
import Eventclass from './Eventclass';
import Eventfunction from './Eventfunction';
import Eventfunctionpass from './Eventfunctionpass';
import Stateclass from './Stateclass';
import Stateclassprop from './Stateclassprop';
import Satetclasscon from './Satetclasscon';
import Stateclassupdate from './Stateclassupdate';
import Statefunctionupdate from './Statefunctionupdate';
import Statefunctiontable from './Statefunctiontable';
function App() {
  return (
    <div className="App">
      <Stateclass/>
      <Stateclassprop Rno={1} Name={'mohit'} Gender={'Male'}/>
      <Satetclasscon Rno={10}/>
      <Stateclassupdate/>
      <Statefunctionupdate />
      <Statefunctiontable/>
      {/* <Eventclass/>
      <Eventfunction/>
      <Eventfunctionpass/>   */}
      {/* <List />
      <Listmultiple />
      <ListPassEx/> */}

      {/* <h1>App Page</h1>
      <Function_com/>
      <Class_com/>
      <Props_function sid={101} sname={'Manthan'} marks={96}/>
      <Props_class eid={102} ename={'meet'} salary={60000}/>            
        <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
