"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useLoginForm } from "./login.action";

export const LoginFormComponent = () => {
  const { login, isLoading } = useLoginForm();

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitting form:", values);
          login(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="space-y-4">
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
            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Submitting..." : "Login"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormComponent;
