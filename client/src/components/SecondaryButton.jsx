import { NavLink } from "react-router-dom";

function Button({ text }) {
  return (
    <NavLink to={"/login"}>
      <button className="py-2.5 px-10 hidden font-poppins md:inline rounded-lg text-xs bg-white text-black border-solid border-2 border-gray-500">
        {text}
      </button>
    </NavLink>
  );
}
export default Button;
