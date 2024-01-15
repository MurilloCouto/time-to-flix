import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { Footer } from "./components/Footer";

export function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)} />
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
