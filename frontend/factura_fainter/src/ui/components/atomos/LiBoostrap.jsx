import { NavLink } from "react-router-dom";

export const LiBoostrap = ({ estiloClassName, titulo, to, isActive }) => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          estiloClassName + (isActive ? " active" : "")
        }
        to={to}
      >
        {titulo}
      </NavLink>
    </nav>
  );
};
