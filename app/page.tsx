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
import { Gallery } from "@/components/GalleyCarrousel";

export default function Home() {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <div className="relative flex min-h-screen w-full overflow-hidden items-center justify-center font-dancing">
        {/* Image Before */}
        <Image
          src="/back2.jpg"
          alt="Background Before"
          fill
          priority
          quality={100}
          className={`object-cover object-center transition-opacity duration-1000
          ${finished ? "opacity-0" : "opacity-100"}
        `}
        />
        {/* Image After */}
        <Image
          src="/background.jpg"
          alt="Background After"
          fill
          priority
          quality={100}
          className={`object-cover object-center transition-opacity duration-1000
          ${finished ? "opacity-100" : "opacity-0"}
        `}
        />
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
            <DialogContent className="bg-[url(/letter.jpg)] bg-scroll bg-cover max-w-md h-[80vh] overflow-y-auto overflow-x-hidden scroll-smooth ">
              <br />
              <br />
              <DialogTitle className="text-left text-xl font-dancing pl-2">
                Untuk Cayangg 💕
              </DialogTitle>
              <DialogTitle className="text-right text-lg font-dancing pr-2">
                📅 24 Desember 2025
              </DialogTitle>
              <DialogDescription className="font-mono text-justify text-gray-800 px-2">
                <span>
                  Selamat ulang tahun cayanggnyaa akuu cintaanyaa akuu 🎉💕
                  mudah mudahan apa yang cayangg kejar bisa terwujudkan, baik
                  itu mimpi nyaa cayangg, keinginannyaa cayangg, dan jalan hidup
                  cayangg 💕. Makasih cayangg udahh hadir dalam hidup akuu, akuu
                  senengg bangett bisa ketemu cayangg, warnai hidup akuu, dan
                  ngasih sudut pandang baruu tentangg cayangg. Akuu bahagiaaa
                  bangett dengan hadir nyaa cayangg dalam hidup akuu. Dan akuu
                  hadir di umur cayangg yangg bertambah 1 tahun. Akuu pengenn
                  bangett jadi saksi perjalanan hidup nyaa cayangg, mulai dari
                  cayangg grow up sampe cayangg bener bener menjadi perempuan
                  yang hebattt 💕💕💕
                </span>
                <br />
                <br />
                <span>
                  Selamat ulang tahunn cayangg nyaa akuu cintanyaa akuu 💕💕💕,
                  mudah mudahan wish list nyaa cayangg untuk tahun depan bisa
                  terlaksana. Aku percaya sama cayangg, walaupun jalan yang
                  ditempuh cayangg cukup sakit, cukup berdarah darah tapii akuu
                  percaya, percaya bangett kalau cayangg bisa lewatin semuaa.
                  Karena, cayangg adalah perempuan yangg hebatt, masihh bisa
                  berdiri tegak walaupun ada masalah yangg menghampiri cayangg.
                  Dengan bertambahnya umur cayangg, mudah mudahan cayangg
                  menjadi perempuan yangg selaluu kuattt 💕💕💕
                </span>
                <br />
                <br />
                <span>
                  Di hari spesial ini, akuu cuma mau cayangg tauu kaloo cayangg
                  itu berhargaaa bangett buat akuu 💕💕💕. Jangan pernah ragu
                  sama diri cayangg sendiri, karena akuu selalu percayaa sama
                  cayangg. Akuu mauu selalu barengg cayangg, darii bahagia nyaa
                  cayangg, sedihh nyaa cayangg, semuaa nyaa barengg cayangg.
                  Akuu kurangg bisa bikin kata kata yangg baguss buat cayangg 🥲
                  tapii semua apa yang aku sampaikan itu berasal dari pikiran
                  akuu dan perasaan akuu cayangg 💕💕💕💕
                </span>
                <br />
                <br />
                <span>
                  Sekali lagii selamatt ulangg tahun cayanggg nyaa akuu
                  cintaanyaa akuu 💕💕💕💕💕💕🎉🎉🎉🎉🎉🎉🎉. Wish youu all the
                  best cayangg 💕💕💕💕. I love youu so muchh cayangg nyaa akuu
                  cintaaanyaa akuuu 💕💕💕💕💕💕. Peluk hangaattt untukk
                  cayanggg 💕💕💕💕💕💕💕
                </span>
                <br />
                <br />
              </DialogDescription>
            </DialogContent>
                <Gallery />
          </Dialog>
        </div>
      </div>
    </>
  );
}
