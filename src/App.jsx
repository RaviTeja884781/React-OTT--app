import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addmovie from "./components/Addmovie/Addmovie";
import Login from "./components/Forms/Login/Login";
import Signup from "./components/Forms/Signup/Signup";
import Home from "./components/Home/Home";
import Moviedetails from "./components/Moviedetails/Moviedetails";
import Navbar from "./components/Navbar/Navbar";
import Searchpage from "./components/Searchpage/Searchpage";
import WishList from "./components/WishList/WishList";
import UpdateMovie from "./components/UpdateMovie/UpdateMovie";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p className="top_info">
          Watch & Download Telugu Hindi Tamil Malayalam Movies Online Free...
        </p>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/moviedetails:id" element={<Moviedetails />} />
          <Route path="/create" element={<Addmovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search:searchVal" element={<Searchpage />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/update:id" element={<UpdateMovie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
