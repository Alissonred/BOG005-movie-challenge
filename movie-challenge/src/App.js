import logo from './logo.svg';
import './App.css';
import GetGeneralData from './componets/getGeneralData' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route index element={<GetGeneralData/>} />
      <Route exact path="/" element={<GetGeneralData/>} />

     

      </Routes>
      </BrowserRouter>
   
       
      </header>
    </div>
  );
}

export default App;

//<Route exact path="/admin/getUser" element={<GetUser />} />
//<Route exact path="/admin/getProducts" element={<GetProducts />} />