import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navigation from './component/Navigation'
import Detail from './component/Detail'
import Contact from './component/Contact'
import About from './component/About';
import {
  Routes,
  Route,
} from "react-router-dom";
import Films from './component/Films';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Films/>}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
