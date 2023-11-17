import React, { useState } from "react";
import { setUser } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { url } from "../../helpers/url";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [asCompany, setAsCompany] = useState(false);
    const loginClickHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/infinity/Employee/login`, {
                method: "POST",
                headers: {
                    "content-type": "text/json",
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });
            const data = await response.json();
            if (data) {
                setUser(data);
                navigate("/home");
            }
        } catch (e) {}
    };
    return (
        <div className="flex min-h-full h-screen flex-1 flex-col border-2 justify-center items-center px-6 py-12 lg:px-8 ">
            <div className="mx-auto w-auto text-2xl font-bold">
                Infinity Website
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-base leading-9 tracking-tight text-black">
                    Login Into Existing Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="ascompany"
                            className="block text-sm font-medium leading-6 text-gray-400"
                        >
                            Login As a company &nbsp;
                            <input
                                type="checkbox"
                                id="ascompany"
                                onChange={(e) => {
                                    setAsCompany(e.target.checked);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-400"
                        >
                            {/* later we implement this */}
                            Company/Employee
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="username"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                autoComplete="off"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-400"
                            >
                                Password
                            </label>
                        </div>
                        <div className="relative flex mt-2">
                            <input
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
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
                            onClick={loginClickHandler}
                            className="flex w-full justify-center rounded-md bg-yellow px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
