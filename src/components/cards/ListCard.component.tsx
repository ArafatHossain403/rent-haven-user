import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ListCard = () => {
  return (
    <Card className="w-[350px] border rounded-lg shadow-md overflow-hidden">
      {/* Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://via.placeholder.com/350?text=Image+${index + 1}`}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Favorite Button */}
        <Button
          variant="ghost"
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
        >
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </Button>
      </div>

      {/* Card Details */}
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">Cozy Apartment</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          123 Main Street, New York
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">
              Per Night <span className="text-lg font-bold">$120</span>
            </p>
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListCard;
