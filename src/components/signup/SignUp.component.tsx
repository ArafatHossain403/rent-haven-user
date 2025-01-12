"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useSignUpForm } from "./signup.action";

export const SignUpForm = () => {
  const { register, isLoading } = useSignUpForm();

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          phone: "",
          bio: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
          name: Yup.string().required("Name is required"),
          phone: Yup.string().optional(),
          bio: Yup.string().optional(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitting form:", values);
          register(values);
          setSubmitting(false);
        }}
      > 
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Phone (optional) */}
            <div>
              <Input
                type="text"
                placeholder="Phone (Optional)"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
            </div>

            {/* Bio (optional) */}
            <div>
              <Input
                type="text"
                placeholder="Bio (Optional)"
                name="bio"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Submitting..." : "Sign Up"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
