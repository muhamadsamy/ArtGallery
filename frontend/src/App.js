import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
//import NotFound from './pages/NotFoundPage.js';
import Login from './pages/Login.js';
import Register from './pages/Regiser.js';
import ListProduct from './components/ListProducts.js';


function App() {
  return (
      <Router>
        {/* <Header/> */}
        <Routes>
           <Route path="/" element={<ListProduct/>} /> 
           <Route path="/login" element={<Login/>} /> 
           <Route path="/signup" element={<Register/>} /> 
           {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>      
    
  );
}

export default App;
