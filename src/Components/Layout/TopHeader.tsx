import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from "./Layout.module.css";
import { DateInput } from 'Components/DateInput/DateInput';

import logo from "logo.png";
import config from "config";
import routes from "consts/routes";

export const TopHeader = () => {

  const darkTheme = config.lawoftime;

  return (
    <Navbar sticky="top"
      bg={darkTheme ? "dark" : ""}
      variant={darkTheme ? "dark" : undefined}
      expand="md"
      className={styles.topHeader}
      collapseOnSelect >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {config.lawoftime &&
        <>
          <Navbar.Brand href="https://www.law-of-time.ru"
            className="mx-1">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="Law Of Time"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="mr-auto">
            Дрим Спелл
          </Navbar.Brand>
        </>
      }

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="my-2">
          <Nav.Link href="#/kin">Кин</Nav.Link>
          <Nav.Link href="#/tone">Тон</Nav.Link>
          <Nav.Link href="#/sign">Печать</Nav.Link>
          <Nav.Link href="#/plasma">Плазма</Nav.Link>
          <Nav.Link href="#/oracle">Оракул</Nav.Link>
          <Nav.Link href={routes.zolkin.href}>Цолькин</Nav.Link>
          <Nav.Link href="#/moon">Луна</Nav.Link>
          <Nav.Link href="#/wavespell">Волновой&nbsp;модуль</Nav.Link>
          <Nav.Link href="#/year">Год</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DateInput />
    </Navbar>
  );
};

export default TopHeader;
