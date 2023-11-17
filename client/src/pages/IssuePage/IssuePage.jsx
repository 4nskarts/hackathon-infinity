import { url } from "../../helpers/url";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../helpers/auth";

const IssuePage = () => {
    const { id } = useParams();
    if (!id) return <div>An id must be added</div>;

    const navigate = useNavigate();

    const [issue, setIssue] = useState();
    const [blogs, setBlogs] = useState();
    const [solution, setSolution] = useState();
    useEffect(() => {
        fetch(`${url}/infinity/Issue/${id}`, {
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response_data) => {
                setIssue(response_data);
            });
        fetch(`${url}/infinity/Issue/${id}/blogs`, {
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response_data) => {
                console.log(typeof response_data);
                setBlogs(response_data);
            });
    }, []);

    const postSolutionButtonClickHandler = (e) => {
        e.preventDefault();
        fetch(`${url}/infinity/Blog`, {
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
                "content-type": "application/json",
            }),
            body: JSON.stringify({
                writerId: getUser().employeeId,
                issueId: id,
                body: solution,
            }),
        }).then((res) => {
            navigate(0);
        });
    };

    return (
        <div className="bg-gray-200 flex justify-center h-full">
            <div className="max-w-3xl mt-8 p-4 justify-start mb-10 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl font-bold mb-4">
                    {issue && issue.title}
                </h1>
                <div className="flex items-center  text-gray-600 mb-4">
                    <span className="mr-2">
                        {new Date(issue && issue.publishTime).toLocaleString()}
                    </span>
                </div>
                <p className="text-gray-800">{issue && issue.body}</p>

                {/* Add a section for solutions/answers */}
                <div className="mt-8 space-y-8">
                    <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                    {/* You can map through the solutions/answers and display them here */}
                    {blogs &&
                        blogs.map((blog, index) => (
                            <div key={index} className="border-t pt-8">
                                {/* <div className="flex justify-between">
                                <h3 className="text-xl font-semibold mb-2">
                                    {blog.title}
                                </h3>
                            </div> */}
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    {blog.body}
                                </p>
                                {/* <pre className="bg-gray-100 p-4 rounded-md">
                                <code className="language-javascript">
                                    {blog.code}
                                </code>
                            </pre> */}
                                <div className="flex items-center text-gray-600 mt-4">
                                    <span className="mr-2">
                                        {`${blog.writer.firstName} ${blog.writer.lastName}`}
                                    </span>
                                </div>
                                <p className="flex justify-end text-xs mr-2 mb-4">
                                    Written At {new Date(blog && blog.publishTime).toLocaleString()}
                                </p>
                            </div>
                        ))}
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Post a Solution</h2>
                    <form>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="solutionText"
                            >
                                Your Solution
                            </label>
                            <textarea
                                id="solutionText"
                                name="solutionText"
                                rows="4"
                                required
                                value={solution}
                                className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
                                onChange={(e) => setSolution(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FFD500] text-black py-1 px-4 mt-4 rounded-lg"
                            onClick={postSolutionButtonClickHandler}
                        >
                            Post Solution
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IssuePage;
