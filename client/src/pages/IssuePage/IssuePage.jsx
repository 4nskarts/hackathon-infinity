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
      console.log(solution);
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
        // navigate(0);
        console.log(res);
      });
    };
    const renderBlogBody = (body) => {
      // Use regular expression to find and wrap code blocks
      const codeBlocks = body.split(/```([\s\S]+?)```/g);

      return codeBlocks?.map((block, index) => {
        if (index % 2 === 1) {
          // Odd indices are code blocks
          return (
            <pre key={index} className="bg-gray-100 p-4 rounded-md">
              <code className="language-javascript">{block}</code>
            </pre>
          );
        } else {
          // Even indices are text blocks
          return (
            <p key={index} className="text-gray-800 leading-relaxed mb-4">
              {block}
            </p>
          );
        }
      });
    };

    return (
      <div className="bg-gray-200 flex h-full w-full ">
        <div
          className="text-2xl  font-bold items-center cursor-pointer align-middle mt-5 ml-5"
          onClick={() => {}}
        >
          Ξ
        </div>
        <div className="max-w-3xl w-screen mx-auto mt-8 p-4 justify-start mb-10 bg-white shadow-lg rounded-md  ">
          <h1 className="text-3xl font-bold mb-4">
            {issue && `ISSUE : ${issue.title}`}
          </h1>
          <div className="flex items-center  text-gray-600 mb-4">
            <span className="mr-2">
              {issue &&
                `Published at : ${new Date(
                  issue.publishTime
                ).toLocaleString()}`}
            </span>
          </div>
          {issue && renderBlogBody(issue.body)}

          {/* Solutions Section */}
          <div className="mt-8 space-y-8 w-full ">
            <h2 className="text-3xl font-semibold mb-4">
              Other Employees' Solutions
            </h2>
            {blogs &&
              blogs?.map((blog, index) => (
                <div key={index} className="border-t ">
                  <div className="flex items-center  text-gray-600 mt-4">
                    <span className="mr-2 mb-2">
                      Wrote by :{" "}
                      {`${blog.writer.firstName} ${blog.writer.lastName}`}
                    </span>
                  </div>
                  {renderBlogBody(blog.body)}
                  <p className="flex justify-end text-gray-600 text-xs mr-2 mb-4">
                    Written At{" "}
                    {new Date(blog && blog.publishTime).toLocaleString()}
                  </p>
                </div>
              ))}
          </div>

          {/* Post a Solution Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              {" "}
              Contribute By Sharing Your Solution
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block mb-4 text-gray-500 text-sm font-bold mb-2"
                  htmlFor="solutionText"
                >
                  Your Suggested Solution
                </label>
                <textarea
                  id="solutionText"
                  name="solutionText"
                  rows="8"
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
                Post Answer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default IssuePage;
