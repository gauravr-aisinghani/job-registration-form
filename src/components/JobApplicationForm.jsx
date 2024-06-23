import React, { useState } from "react";
import useForm from "../hooks/useForm";

function JobApplicationForm() {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    portfolioURL: "",
    managementExperience: "",
    additionalSkills: [],
    preferredInterviewTime: "",
  };

  const { formData, errors, handleChange, handleSubmit } =
    useForm(initialState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submittedData = handleSubmit(e);
    if (submittedData) {
      setSubmittedData(submittedData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-x-4">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            id="phoneNumber"
            placeholder="Enter your number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Applying for Position
          </label>
          <select
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.position}
            </p>
          )}
        </div>

        {formData.position === "Developer" ||
        formData.position === "Designer" ? (
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Relevant Experience:
            </label>
            <input
              type="number"
              name="experience"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Relevant Experience"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.experience && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.experience}
              </p>
            )}
          </div>
        ) : null}

        {formData.position === "Manager" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="portfolioURL"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Portfolio URL:
              </label>
              <input
                type="url"
                name="portfolioURL"
                id="portfolioURL"
                value={formData.portfolioURL}
                onChange={handleChange}
                placeholder="Portfolio URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.portfolioURL && (
                <p className="text-red-500 text-xs italic mt-2">
                  {errors.portfolioURL}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="managementExperience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Management Experience:
              </label>
              <input
                type="number"
                name="managementExperience"
                id="managementExperience"
                value={formData.managementExperience}
                onChange={handleChange}
                placeholder="Management Experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.managementExperience && (
                <p className="text-red-500 text-xs italic mt-2">
                  {errors.managementExperience}
                </p>
              )}
            </div>
          </>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Additional Skills
          </label>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="JavaScript"
                checked={formData.additionalSkills.includes("JavaScript")}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">JavaScript</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="CSS"
                checked={formData.additionalSkills.includes("CSS")}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">CSS</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="Python"
                checked={formData.additionalSkills.includes("Python")}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Python</span>
            </label>
          </div>
          {errors.additionalSkills && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.additionalSkills}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Preferred Interview Time
          </label>
          <input
            type="datetime-local"
            name="preferredInterviewTime"
            value={formData.preferredInterviewTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.preferredInterviewTime && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.preferredInterviewTime}
            </p>
          )}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Application
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {submittedData.phoneNumber}
          </p>
          <p>
            <strong>Applying for Position: </strong>
            {submittedData.position}
          </p>
          {submittedData.position === "Developer" && (
            <p>
              <strong>Relevant Experience: </strong>
              {submittedData.experience}
            </p>
          )}
          {submittedData.position === "Manager" && (
            <>
              <p>
                <strong></strong>Portfolio URL: {submittedData.portfolioURL}
              </p>
              <p>
                <strong></strong>Management Experience:{" "}
                {submittedData.managementExperience}
              </p>
            </>
          )}
          <p>
            <strong>Additional Skills:</strong>{" "}
            {submittedData.additionalSkills.join(", ")}
          </p>
          <p>
            <strong>Preferred Interview Time:</strong>{" "}
            {new Date(submittedData.preferredInterviewTime).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default JobApplicationForm;
