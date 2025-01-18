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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginFormComponent from "../login/Login.Component";
import SignUpForm from "../signup/SignUp.component";

const Navbar = () => {
  const token = getCookie("token");
  const router = useRouter();

  const logout = () => {
    deleteCookie("token");
    deleteCookie("deviceToken");
    router.refresh();
  };

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
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

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex items-center bg-background rounded-full shadow-lg px-4 py-2  max-w-2xl space-x-4">
            <div className="flex flex-col">
              <span className="text-xs font-medium">Where</span>
              <span className="text-sm text-muted-foreground">
                Search destinations
              </span>
            </div>
            <div className="border-l border-muted h-6"></div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">Check in</span>
              <span className="text-sm text-muted-foreground">Add dates</span>
            </div>
            <div className="border-l border-muted h-6"></div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">Check out</span>
              <span className="text-sm text-muted-foreground">Add dates</span>
            </div>
            <div className="border-l border-muted h-6"></div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">Who</span>
              <span className="text-sm text-muted-foreground">Add guests</span>
            </div>
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-primary text-white"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>

        {/* Right - Profile and Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium">
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
            <DropdownMenuContent className="w-48">
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <p className="cursor-pointer">Login</p>
                      </DialogTrigger>
                      <DialogContent>
                        <LoginFormComponent />
                      </DialogContent>
                    </Dialog>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Dialog>
                      <DialogTrigger asChild>
                        <p className="cursor-pointer">Sign Up</p>
                      </DialogTrigger>
                      <DialogContent>
                        <SignUpForm />
                      </DialogContent>
                    </Dialog>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Bottom Bar for Mobile */}
      <div className="md:hidden flex justify-between items-center px-6 py-2 border-t">
        <FontAwesomeIcon
          icon={faSearch}
          className="h-6 text-muted-foreground cursor-pointer"
        />
        <Link href="/explore">
          <Button variant="ghost">Explore</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <FontAwesomeIcon
              icon={faUser}
              className="h-6 text-muted-foreground cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {token ? (
              <>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem asChild>
                  <Dialog>
                    <DialogTrigger asChild>
                      <span className="cursor-pointer">Login</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                      </DialogHeader>
                      <LoginFormComponent />
                    </DialogContent>
                  </Dialog>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Dialog>
                    <DialogTrigger asChild>
                      <span className="cursor-pointer">Sign Up</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sign Up</DialogTitle>
                      </DialogHeader>
                      <SignUpForm />
                    </DialogContent>
                  </Dialog>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
