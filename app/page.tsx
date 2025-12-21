"use client";

import { useState } from "react";
import { LaunchCountdown } from "@/containers/LaunchCountdown";
import { Texts } from "@/components/Text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Home() {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center font-sans">
        {/* Countdown */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out
        ${
          finished
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }
        `}  
        >
          <div className="flex space-x-9">
            <LaunchCountdown onComplete={() => setFinished(true)} />
          </div>
        </div>

        {/* Button */}
        <div
          className={`flex flex-col items-center justify-center absolute transition-all duration-1000 ease-in-out
        ${
          finished
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }
        `}
        >
          <div className="max-w-4xl flex justify-center">
            <Texts />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="pt-8">
                <Button
                  variant="link"
                  className="p-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/letter2.svg"
                    alt="Letter"
                    width={100}
                    height={100}
                    priority
                  />
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-md overflow-hidden">
              <DialogTitle>Untuk Cayangg 💕</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                tempora? Earum dolorum, dolore placeat ut excepturi temporibus
                expedita repudiandae, aliquid repellat doloremque unde
                voluptatum, a at quas numquam cupiditate totam?
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
