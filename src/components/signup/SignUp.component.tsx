"use client";
import React, { useState } from "react";
import { useRegisterUserMutation } from "@/graphql/generated";

export const SignUpForm = () => {
  const { mutateAsync, isError, isLoading } = useRegisterUserMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await mutateAsync({
        data: {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        },
      });

      if (response.data.success) {
        alert("Registration successful! Token: " + response.data.token);
      } else {
        setErrorMessage(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {isError && (
        <p className="text-red-500 text-sm">
          {errorMessage || "An error occurred."}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
          isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        {isLoading ? "Registering..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
