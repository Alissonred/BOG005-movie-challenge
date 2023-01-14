import logo from './logo.svg';
import './App.css';
import GetGeneralData from './componets/getGeneralData' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginView from './routes/LoginView';
import ProfileView from './routes/profile';
import ChooseUserName from './componets/chooseUserName';
import DashBoardView from './componets/dashboardView';
import EditProfileView from './componets/editProfileVierw';
import SignOutView from './componets/singOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route index element={<GetGeneralData/>} />
      <Route exact path="/" element={<GetGeneralData/>} />
      <Route exact path="/login" element={<LoginView option={'login'}/>} />
      <Route exact path="u/:username" element={<ProfileView/>} />
      <Route exact path="/choose-name" element={<ChooseUserName/>} />
      <Route exact path="/dashboard" element={<DashBoardView/>} />
      <Route exact path="/dashboard/profile" element={<EditProfileView/>} />
      <Route exact path="/dashboard/signout" element={<SignOutView/>} />
      <Route exact path="/register" element={<LoginView option={'register'}/>} />
      

     

      </Routes>
      </BrowserRouter>
   
       
      </header>
    </div>
  );
}

export default App;

//<Route exact path="/admin/getUser" element={<GetUser />} />
//<Route exact path="/admin/getProducts" element={<GetProducts />} />