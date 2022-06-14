import React from "react";

import { Routes, Route } from "react-router";

import { LoginPage } from "./LoginPage";

import { ATMsAndOfficesPage } from "./ATMsAndOfficesPage";

import { ContactsPage } from "./ContactsPage";

import { DemoModePage } from "./DemoModePage";

import { ExchangeRatesPage } from "./ExchangeRatesPage";

import { PasswordRecoveryPage } from "./PasswordRecoveryPage";

import { Header } from "../components/Header";

export const PageRenderer = () => (
  <>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<LoginPage />} />
        <Route path="atms" element={<ATMsAndOfficesPage />} />
        <Route path="rates" element={<ExchangeRatesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="demo" element={<DemoModePage />} />
        <Route path="recovery" element={<PasswordRecoveryPage />} />
      </Route>
    </Routes>
  </>
);
