import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { logo } from "@/assets/images";
import Image from "next/image";

export default function Auth() {
  return (
    <Drawer>
      <DrawerTrigger className="w-full bg-primary py-2 px-5 text-white rounded-md">
        <CiLogin size={30} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerDescription className="w-full container">
            <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-md w-full space-y-8">
                <div>
                  <Image src={logo} alt={"logo"} width={60} height={80} />
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                    Sign in to your account
                  </h2>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Or{" "}
                    <Link
                      href="#"
                      className="font-medium text-primary hover:text-primary/80"
                      prefetch={false}
                    >
                      create a new account
                    </Link>
                  </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Email address
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="password"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Password
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="remember-me"
                        name="remember-me"
                        className="h-4 w-4 rounded"
                      />
                      <Label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-muted-foreground"
                      >
                        Remember me
                      </Label>
                    </div>
                    <div className="text-sm">
                      <Link
                        href="#"
                        className="font-medium text-primary hover:text-primary/80"
                        prefetch={false}
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Button type="submit" className="w-full">
                      Sign in
                    </Button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-muted" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="col-span-1">
                    <ChromeIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="col-span-1">
                    <LinkedinIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="col-span-1">
                    <GitlabIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GitlabIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
