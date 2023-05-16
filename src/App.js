import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header,Footer } from "./components";
import {Home,Contact,Login,Register,Reset} from './pages';
function App() {
  return (
    <div className="App"  style={{minHeight:"100vh"}}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;