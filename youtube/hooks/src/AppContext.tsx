import React, { useContext } from "react";
import CartContext from "./CartContext";

const AppContext: React.FC = () => {
  const context = useContext(CartContext);

  return <div></div>;
};

export default AppContext;
