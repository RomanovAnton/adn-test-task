import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Header/Header";
import { FilterBar } from "../FilterBar/FilterBar";
import { CardsList } from "../CardsList/CardsList";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { CatalogTop } from "../CatalogTop/CatalogTop";
import { Banners } from "../Banners/Banners.js";
import { Footer } from "../Footer/Footer.js";
import fetchCards from "../../redux/cards/asyncActions";
import "./App.scss";

export const App = () => {
  const dispatch = useDispatch();
  const { pageValue, searchValue, hiddenMenuIsActive } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(fetchCards({ pageValue, searchValue }));
  }, [pageValue, searchValue]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Breadcrumb />
        <CatalogTop />
        <section className="catalog">
          <FilterBar />
          <CardsList />
        </section>
        <Banners />
        <Footer />
        {hiddenMenuIsActive && <FilterBar />}
      </div>
    </div>
  );
};
