import { NavLink } from "react-router-dom";
import { PAGES_ARRAY } from "@/router/const.ts";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h1>404 Error page</h1>
        <NavLink to={PAGES_ARRAY[0]}>Back to cocktails page</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
