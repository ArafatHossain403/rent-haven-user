"use client";
import { useListingData } from "./listing.action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AllListingComponent = () => {

    const router = useRouter();
  const {
    data,
    limit,
  } = useListingData();
  console.log("data", data?.data?.nodes);
  const listings = data?.data?.nodes;

  return (
    <div className="flex justify-center items-start pl-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings?.map((listing) => (
          <Card
            key={listing.id}
            className="w-[250px] border rounded-lg shadow-md overflow-hidden"
          >
            {/* Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent className="rounded-lg">
                  {listing?.images?.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image?.url}
                          alt={`Image of ${listing?.title}`}
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
              <CardTitle className="text-lg font-semibold">
                {listing.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {listing.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Per Night{" "}
                    <span className="text-lg font-bold">
                      ${listing.pricePerNight}
                    </span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/listing/${listing.id}`)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllListingComponent;
