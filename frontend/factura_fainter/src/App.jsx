import { BrowserRouter } from "react-router-dom";

import { MenuScreen } from "./ui/components/pages/MenuScreen.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <MenuScreen />;
    </BrowserRouter>
  );
};
