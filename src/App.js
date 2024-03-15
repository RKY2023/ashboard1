import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Govt from './components/Govt/Govt';
import Colors from './components/Colors/Colors';
import Routine from './components/Routine/Routine';
import AboutJS from './components/JS/AboutJS';
import Projects from './components/Career/Projects/Projects';

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index exact element={<Home />} />
          <Route path='/routine' element={<Routine />} />
          <Route path='/govt' element={<Govt />} />
          <Route path='/login' element={<Home />} />
          <Route path='/colors' element={<Colors />} />
          <Route path='/jsnotes' element={<AboutJS />} />
          <Route path='/myprojects' element={<Projects />} />
          
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
