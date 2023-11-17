// BlogPage.js
import React from "react";
import { useParams } from "react-router-dom";

const solutions = [
  {
    writerId: 1,
    issueId: 1,
    title: "JavaScript Solution",
    body: "To solve this issue, you can use the following JavaScript code:",
    code: "function solveIssue() {\n  // Your code here\n  console.log('Issue solved!');\n}\n\nsolveIssue();",
  },
  {
    writerId: 2,
    issueId: 1,
    title: "Python Solution",
    body: "I encountered a similar problem before. Here's a Python code snippet that might help:",
    code: "def solve_issue():\n    # Your code here\n    print('Issue solved!')\n\nsolve_issue()",
  },
  {
    writerId: 3,
    issueId: 1,
    title: "C# Solution",
    body: "For this issue, you can try this solution in C#",
    code: "// C# code here",
  },
];

const BlogPage = ({ issues }) => {
  const { id } = useParams();
  const issue = issues.find((issue) => issue.id === id);

  if (!issue) {
    return <div>Loading...</div>; // You might want to add better error handling here
  }

  return (
    <div className="bg-gray-200 flex h-full w-full ">
      <div
        className="text-2xl font-bold items-center cursor-pointer align-middle mt-5 ml-5"
        onClick={() => {}}
      >
        Ξ
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-4 justify-start mb-10 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>
        <div className="flex items-center  text-gray-600 mb-4">
          <span className="mr-2">
            {new Date(issue.postedTime).toLocaleString()}
          </span>
          {issue.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="mr-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-800">{issue.description}</p>

        {/* Add a section for solutions/answers */}
        <div className="mt-8 space-y-8">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          {/* You can map through the solutions/answers and display them here */}
          {solutions.map((solution, index) => (
            <div key={index} className="border-t pt-8">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                {solution.body}
              </p>
              <pre className="bg-gray-100 p-4 rounded-md">
                <code className="language-javascript">{solution.code}</code>
              </pre>
              <div className="flex items-center text-gray-600 mt-4">
                <span className="mr-2">
                  {solution.user ? "User Unknown" : ""}
                </span>
              </div>
              <p className="flex justify-end text-xs mr-2 mb-4">
                Anas Mokhtari at 23:59
              </p>
            </div>
          ))}
        </div>

        {/* Add a form to post a solution */}
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
                className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 bg-gray-200 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FFD500] text-black py-1 px-4 mt-4 rounded-lg"
            >
              Post Solution
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
