import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column">
          <p className="footer__item">О компании</p>
          <p className="footer__item">Новости и статьи</p>
          <p className="footer__item">Акции</p>
        </div>
        <div className="footer__column">
          <p className="footer__item">Часто задаваемые вопросы</p>
          <p className="footer__item">Условия возврата</p>
          <p className="footer__item">Правовая информация</p>
        </div>
        <div className="footer__column">
          <p className="footer__item">+7 (495) 727-01-81</p>
          <p className="footer__item">care@turbistore.ru</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__item_dark">© 2021 Turbinary</p>
        <p className="footer__item_dark">Дизайн в ADN Digital Studio</p>
      </div>
    </footer>
  );
};
