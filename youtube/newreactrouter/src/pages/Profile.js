import React from "react";
import { useParams, Outlet } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  return (
    <>
      <h1>Profile: {id}</h1> <Outlet />
    </>
  );
}
