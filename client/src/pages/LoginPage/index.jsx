import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // this is the cheap way to do it.
  return (
    <div className="flex min-h-full bg-[#D9D9D9] h-screen flex-1 flex-col border-2 justify-center items-center px-6 py-12 lg:px-8 ">
      <div className="mx-auto w-auto text-2xl font-bold">Infinity Website</div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-base leading-9 tracking-tight text-black">
          Login Into Existing Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              {/* later we implement this */}
              Company/Employee
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Password
              </label>
            </div>
            <div className="relative flex mt-2">
              <input
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
              />
              <label className="absolute right-2 top-1/2 transform -translate-y-1/2"></label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="employee"
                  checked={selectedOption === "employee"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span>
                  Login as <span className="font-semibold">Employee</span>
                </span>
              </label>
            </div>
            <div className="">
              <label className="flex justify-center items-center">
                <input
                  type="radio"
                  value="company"
                  checked={selectedOption === "company"}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span>
                  Login as <span className="font-semibold">Company</span>
                </span>
              </label>
            </div>
          </div>
        </form>

        {selectedOption && (
          <div className="mt-4 text-xs justify-center items-center flex">
            You have selected:{" "}
            {selectedOption === "employee" ? "Employee" : "Company"}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;