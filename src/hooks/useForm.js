import { useState } from "react";

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        additionalSkills: checked
          ? [...formData.additionalSkills, name]
          : formData.additionalSkills.filter((skill) => skill !== name),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    else if (isNaN(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be a valid number";
    if (["Developer", "Designer"].includes(formData.position)) {
      if (!formData.experience || formData.experience <= 0) newErrors.experience = "Relevant experience is required and must be greater than 0";
    }
    if (formData.position === "Designer" && !formData.portfolioURL) {
      newErrors.portfolioURL = "Portfolio URL is required";
    } else if (formData.portfolioURL && !/^https?:\/\/\S+\.\S+/.test(formData.portfolioURL)) {
      newErrors.portfolioURL = "Portfolio URL is invalid";
    }
    if (formData.position === "Manager" && !formData.managementExperience) newErrors.managementExperience = "Management experience is required";
    if (formData.additionalSkills.length === 0) newErrors.additionalSkills = "At least one skill must be selected";
    if (!formData.preferredInterviewTime) newErrors.preferredInterviewTime = "Preferred interview time is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return null;
    } else {
      setErrors({});
      return formData;
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

