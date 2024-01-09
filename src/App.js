import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListingPage from "./Pages/Customer/Listings/ListingPage";

function App() {

  return (
    <div>

          <BrowserRouter>
            <Routes>

              <Route path={"/"} element={<ListingPage />} />

            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
