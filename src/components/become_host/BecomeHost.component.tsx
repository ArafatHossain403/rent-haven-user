"use client";
import React, { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DatePicker } from "../ui/DatePicker.component";
// import { DatePicker } from "../ui/datepicker"; // Use shadcn date picker
// import axios from "axios";

export const BecomeHostComponent = () => {

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create New Listing
      </h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          pricePerNight: 0,
          location: "",
          availableFrom: "",
          availableTo: "",
          hostId: "",
          status: 1,
          categoryId: "",
          images: [],
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
          pricePerNight: Yup.number()
            .min(1, "Price must be at least 1")
            .required("Price is required"),
          location: Yup.string().required("Location is required"),
          availableFrom: Yup.date().required("Available From date is required"),
          availableTo: Yup.date().required("Available To date is required"),
          hostId: Yup.string().required("Host ID is required"),
          status: Yup.number().required("Status is required"),
          categoryId: Yup.string().required("Category ID is required"),
          images: Yup.array().of(Yup.string()),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitting form:", values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form className="space-y-4">
            {/* Title */}
            <div>
              <Input
                type="text"
                placeholder="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.title && errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <Input
                type="text"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.description && errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Price Per Night */}
            <div>
              <Input
                type="number"
                placeholder="Price Per Night"
                name="pricePerNight"
                value={values.pricePerNight}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.pricePerNight && errors.pricePerNight && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pricePerNight}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <Input
                type="text"
                placeholder="Location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
              {touched.location && errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            {/* Available From */}
            <div>
              <DatePicker/>
            </div>

            {/* Available To */}
            <div>
                <DatePicker/>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="w-full">
                Create Listing
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BecomeHostComponent;
