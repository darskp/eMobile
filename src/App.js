import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header,Footer } from "./components";
import {Home,Contact,Login,Register,Reset} from './pages';
import AdminPortal from "./pages/admin/adminPortal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App"  style={{minHeight:"100vh"}}>
      <BrowserRouter>
              <ToastContainer />

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin/*" element={<AdminPortal/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;