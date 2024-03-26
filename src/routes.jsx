import React from "react";
import { Route, Routes } from "react-router-dom";
import { Downloads } from "../src/components/Downloads/Downloads";
import { FormLogin } from "./components/Forms/FormLogin/FormLogin";
import { FormRegister } from "./components/Forms/FormRegister/FormRegister";
import { DefaultLayout } from "../src/DefaultLayout/index";
import { NavBar } from "./components/NavBar/NavBar";

export function Router() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
        </Route>
      </Route>
    </Routes>
  );
}
