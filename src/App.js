import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";
import RequireAuth from "./Components/Shared/RequireAuth";
import Inventories from "./Components/Pages/Inventories/Inventories";
import NotFound from "./Components/Shared/NotFound";
import ItemsDetails from "./Components/Pages/Inventories/ItemsDetails";
import ManageInventories from "./Components/Pages/ManageInventories/ManageInventories";
import AddNewProduct from "./Components/Pages/AddNewItems/AddNewProduct";
import MyItems from "./Components/Pages/MyItems/MyItems";
import About from "./Components/Pages/About/About";
import ItemsProvider from "./context/ItemsProvider";

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <div>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventories" element={<Inventories />} />
            <Route path="/aboutUs" element={<About />} />

            <Route
              path="/inventories/:id"
              element={
                <RequireAuth>
                  <ItemsDetails />
                </RequireAuth>
              }
            />

            <Route
              path="/ManageInventories"
              element={
                <RequireAuth>
                  <ManageInventories />
                </RequireAuth>
              }
            />

            <Route
              path="/addNewItems"
              element={
                <RequireAuth>
                  <AddNewProduct />
                </RequireAuth>
              }
            />

            <Route
              path="/myItems"
              element={
                <RequireAuth>
                  <MyItems />
                </RequireAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
          <ToastContainer />
        </div>
      </ItemsProvider>
    </div>
  );
}

export default App;
