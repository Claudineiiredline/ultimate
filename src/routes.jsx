import { Route, Routes } from "react-router-dom";
import { HomePageSession } from "../src/pages/HomePageSession";
import { Downloads } from "../src/components/Downloads/Downloads";
import { FormLogin } from "./components/Forms/FormLogin/FormLogin";
import { FormRegister } from "./components/Forms/FormRegister/FormRegister";
import { DefaultLayout } from "../src/DefaultLayout/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Route>
    </Routes>
  );
}