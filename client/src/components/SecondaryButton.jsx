import { NavLink } from "react-router-dom";

function Button({ text }) {
  return (
    <NavLink to={"/login"}>
      <button className="py-2.5 px-10 hidden md:inline rounded-lg text-sm bg-white text-black border-solid border-2 border-black">
        {text}
      </button>
    </NavLink>
  );
}
export default Button;
