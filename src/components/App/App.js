import React from "react";
import { Header } from "../Header/Header";
import { FilterBar } from "../FilterBar/FilterBar";
import { CardsList } from "../CardsList/CardsList";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { Description } from "../Description/Description";
import { Banners } from "../Banners/Banners.js";
import { Footer } from "../Footer/Footer.js";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <h1>Каталог</h1>
      <div>
        <FilterBar />
        <CardsList />
      </div>
      <Description />
      <Banners />
      <Footer />
    </div>
  );
};
