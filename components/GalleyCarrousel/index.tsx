import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Gallery = () => {
  const picture = [
    { src: "/picture/1.jpeg" },
    { src: "/picture/4.jpeg" },
    { src: "/picture/5.jpeg" },
    { src: "/picture/6.jpeg" },
    { src: "/picture/7.jpeg" },
    { src: "/picture/10.jpeg" },
    { src: "/picture/12.jpeg" },
    { src: "/picture/13.jpeg" },
    { src: "/picture/14.jpeg" },
    { src: "/picture/15.jpeg" },
    { src: "/picture/3.jpeg" },
    { src: "/picture/9.jpeg" },
  ];

  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="flex gap-3 max-w-lg pt-2">
        {picture.map((item, index) => (
          <CarouselItem
            key={index}
            className={`${index === picture.length - 1 ? 'basis-1' : 'basis-auto shrink-0'}`}
          >
            <Card className="w-64 h-62.5 overflow-hidden rounded-xl shadow-md">
              <CardContent className="relative w-full h-full p-0">
                <Image
                  src={item.src}
                  alt={`gallery-${index}`}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 hover:scale-110 p-2 rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
