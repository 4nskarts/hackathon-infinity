function ContactUsPage() {
    return (
        // <section className="w-screen h-screen bg-[#edede9]">
        //     <div className="pt-2 pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
        //         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
        //             Contact Us
        //         </h2>
        //         <form action="#" className="space-y-8">
        //             <div>
        //                 <div className="flex items-center justify-between">
        //                     <label
        //                         htmlFor="email"
        //                         className="block text-sm font-bold leading-6 text-gray-500"
        //                     >
        //                         Your email
        //                     </label>
        //                 </div>
        //                 <div className="relative flex mt-2">
        //                     <input
        //                         id="email"
        //                         className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
        //                     />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="flex items-center justify-between">
        //                     <label
        //                         htmlFor="subject"
        //                         className="block font-bold text-sm leading-6 text-gray-500"
        //                     >
        //                         Subject
        //                     </label>
        //                 </div>
        //                 <div className="relative flex mt-2">
        //                     <input
        //                         id="subject"
        //                         className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
        //                     />
        //                     <label className="absolute right-2 top-1/2 transform -translate-y-1/2"></label>
        //                 </div>
        //             </div>
        //             <div className="mb-4">
        //                 <label
        //                     className="block mb-4 text-gray-500 text-sm font-bold mb-2"
        //                     htmlFor="message"
        //                 >
        //                     Your message
        //                 </label>
        //                 <textarea
        //                     id="message"
        //                     rows="8"
        //                     className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
        //                 ></textarea>
        //             </div>
        //             <button
        //                 type="submit"
        //                 className="flex w-full justify-center rounded-md bg-yellow px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
        //             >
        //                 LOGIN
        //             </button>
        //         </form>
        //     </div>
        // </section>
        <div className="flex min-h-full h-screen flex-1 flex-col border-2 justify-center items-center px-6 py-12 lg:px-8 ">
            <div className="mx-auto w-auto text-2xl font-bold">Contact Us</div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-400"
                        >
                            Your email
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                autoComplete="off"
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
                                Subject
                            </label>
                        </div>
                        <div className="relative flex mt-2">
                            <input
                                id="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
                            />
                            <label className="absolute right-2 top-1/2 transform -translate-y-1/2"></label>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-400"
                            >
                                Message
                            </label>
                        </div>
                        <div className="relative flex mt-2">
                            <textarea
                                id="password"
                                required
                                className="block h-[100px] w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-100 sm:text-sm sm:leading-6"
                            ></textarea>
                            <label className="absolute right-2 top-1/2 transform -translate-y-1/2"></label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-yellow px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUsPage;
