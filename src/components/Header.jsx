import React from "react";
import style from "./Header.module.css";
import logo from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
