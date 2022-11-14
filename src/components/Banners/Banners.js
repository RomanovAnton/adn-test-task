import React from "react";
import orangeImg from "../../assets/orange-picture.png";
import blueImg from "../../assets/blue-picture.png";
import greenImg from "../../assets/green-picture.png";
import purpleImg from "../../assets/purple-picture.png";
import "./Banners.scss";

export const Banners = () => {
  return (
    <div className="banners">
      <div className="banners__item">
        <img src={orangeImg} alt="img" className="banners__image" />
        <p className="banners__text">Регулярные акции, скидки и бонусы</p>
      </div>
      <div className="banners__item">
        <img src={greenImg} alt="img" className="banners__image" />
        <p className="banners__text">
          Лицензионные ключи от официальных издателей
        </p>
      </div>
      <div className="banners__item">
        <img src={blueImg} alt="img" className="banners__image" />
        <p className="banners__text">
          Гарантированная техподдержка вашей покупки
        </p>
      </div>
      <div className="banners__item">
        <img src={purpleImg} alt="img" className="banners__image" />
        <p className="banners__text">
          Мгновенное получение ключа на почту и в личный кабинет
        </p>
      </div>
    </div>
  );
};
