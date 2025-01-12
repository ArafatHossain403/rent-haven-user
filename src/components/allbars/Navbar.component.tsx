"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faGlobe,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const token = getCookie("token");
  const router = useRouter();
  const logout = () => {
    deleteCookie("token");
    deleteCookie("deviceToken");
    router.refresh();
  };
  return (
    <div className="shadow-md">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/airbnb.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/stays"
            className="font-medium text-muted-foreground hover:text-foreground"
          >
            Stays
          </Link>
          <Link
            href="/experiences"
            className="font-medium text-muted-foreground hover:text-foreground"
          >
            Experiences
          </Link>
        </div>

        {/* Right - Profile and Buttons */}
        <div className="space-x-4 flex items-center">
          <Button variant="ghost" className="font-medium">
            Airbnb your home
          </Button>
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-5 cursor-pointer text-muted-foreground"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center space-x-2 rounded-full"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-5 text-muted-foreground"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-5 text-muted-foreground"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              {token ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/signup">Signup</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Box */}
      <div className="flex justify-center items-center py-4 bg-background shadow-lg rounded-full mx-auto max-w-3xl px-6">
        <div className="flex justify-between w-full items-center space-x-4">
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Where</span>
            <span className="text-sm text-muted-foreground">
              Search destinations
            </span>
          </div>
          <div className="border-l border-muted h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Check in</span>
            <span className="text-sm text-muted-foreground">Add dates</span>
          </div>
          <div className="border-l border-muted h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Check out</span>
            <span className="text-sm text-muted-foreground">Add dates</span>
          </div>
          <div className="border-l border-muted h-10"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold">Who</span>
            <span className="text-sm text-muted-foreground">Add guests</span>
          </div>
          <Button variant="default" size="icon" className="rounded-full">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
