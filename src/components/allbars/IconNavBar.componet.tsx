import React from "react";
import { Button } from "@/components/ui/button";

const IconNavBar = () => {
  return (
    <div className="flex space-x-6 overflow-x-auto py-4 px-8 border-b border-gray-300">
      <Button variant="ghost" className="flex flex-col items-center space-y-1">
        <span className="text-lg">🏠</span>
        <span className="text-sm">Icons</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center space-y-1">
        <span className="text-lg">🛏️</span>
        <span className="text-sm">Rooms</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center space-y-1">
        <span className="text-lg">🏞️</span>
        <span className="text-sm">Countryside</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center space-y-1">
        <span className="text-lg">😲</span>
        <span className="text-sm">OMG!</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center space-y-1">
        <span className="text-lg">🏖️</span>
        <span className="text-sm">Beachfront</span>
      </Button>
      {/* Add more icons as needed */}
    </div>
  );
};

export default IconNavBar;
