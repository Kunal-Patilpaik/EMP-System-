import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent"
import AddEmployee from "./components/AddEmployee";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/updateemp/:id" element={<UpdateEmployeeComponent />} />
          <Route path="/viewemp/:id" element={<ViewEmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );

}

export default App;
