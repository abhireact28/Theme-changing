
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
