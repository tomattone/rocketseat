import React from "react";
import { Routes, Route } from "react-router";

import Dashboard from "./pages/Dash";
import Profile from "./pages/Profile";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="/purchases" element={<h1>Compras</h1>} />
        <Route path="/password" element={<h1>Senha</h1>} />
      </Route>
      <Route path="*" element={<h1>Não encontrado</h1>} />
    </Routes>
  );
}
