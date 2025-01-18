"use client";
import { useFindOneListingQuery } from "@/graphql/generated";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

const ListingDetailsComponent: React.FC<{
  id: string;
}> = ({ id }) => {
  const { data } = useFindOneListingQuery({ id: id });
  const listing = data?.data;

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 pl-5">
          {listing?.title || "Listing Title"}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
          {listing?.images?.[0]?.url ? (
            <div className="row-span-2 col-span-2 bg-cover bg-center">
              <img
                src={listing.images[0].url}
                alt="Primary"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="row-span-2 col-span-2 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {listing?.images?.slice(1).map((image, index) => (
            <div key={index} className="bg-cover bg-center rounded-lg">
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
        <div></div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label >Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label >Framework</Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ListingDetailsComponent;
