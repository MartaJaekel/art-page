"use client";
import Image from "next/image";
import { useState } from "react";
import { useRef, MutableRefObject } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // get the calculated width of the main element
      const mainElement = document.getElementsByTagName("main")[0];
      const mainElementComputedStyle = getComputedStyle(mainElement);
      let mainElementWidth = mainElement.clientWidth;
      mainElementWidth -=
        parseFloat(mainElementComputedStyle.paddingLeft) +
        parseFloat(mainElementComputedStyle.paddingRight);

      console.log(document.getElementsByTagName("main")[0].style.margin);
      console.log(mainElementWidth);
      const scrollAmount =
        direction === "left" ? -1 * mainElementWidth : mainElementWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="font-serif">
      <main className="container mx-auto p-4 font-serif">
        <div>
          <div className="flex flex-row justify-center h-[10vh] relative z-10">
            <div className="absolute left-0 top-8">
              <button
                className="sm:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img src="/svg/menu.svg" alt="Menu" />
              </button>
            <ul className="hidden sm:flex flex-row lg:gap-8">
                <li className="hover:underline">Shop</li>
                <li className="hover:underline">Über mich</li>
                <li className="hover:underline">Kontakt</li>
              </ul>
            </div>

            <div className="flex content-center items-center">
              <h1 className="text-4xl">Essence</h1>
            </div>
            <div className="flex flex-row gap-5 absolute right-0 top-[36px]">
              <img src="/svg/instagram.svg" width={25} height={25}></img>
              <img src="/svg/shopping.svg" width={25} height={25}></img>
            </div>
          </div>

          {/* Conditional rendering for the menu (appears below the navigation) */}
          {menuOpen && (
            <div className="absolute top-[10vh] left-0 right-0 bg-white z-40 flex flex-col items-center p-8 shadow-lg sm:hidden">
              <ul className="flex flex-col gap-6 text-3xl">
                <li className="hover:underline cursor-pointer">Shop</li>
                <li className="hover:underline cursor-pointer">Über mich</li>
                <li className="hover:underline cursor-pointer">Kontakt</li>
              </ul>
            </div>
          )}

          <div
            style={{
              background: "url('/flecken.jpg')  no-repeat center center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              
            }}
             className="h-[516px] lg:h-[700px]"
          >
         
          </div>
        
          <section className="flex flex-col items-center py-20 m-12">
            <h2 className="text-4xl text-center lg:text-6xl">
              Aquarelle, die besondere <br /> Momente einfangen
            </h2>
            <button className=" bg-slate-500 text-cyan-50 p-4 mt-6">
              ALLE DRUCKE SHOPPEN
            </button>
          </section>
          <div className="flex flex-col gap-4 justify-center md:flex-row">
            <div className="relative">
              <Image
                src="/sand.avif"
                width={600}
                height={600}
                alt="painting"
                className="sm:-[300px]  md:h-[500px]  lg:h-[600px] w-[100%]"
              />
              <div className="absolute  top-8 left-10">
                <span className="text-black text-3xl">Sand-Serie</span>
              </div>
              <div className="absolute  bottom-3 left-10">
                <span className="text-black text-2xl">
                  <a className="underline">Jetzt Kaufen</a>
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/wasser.jpg"
                width={600}
                height={600}
                alt="painting"
                className="sm:-[300px]  md:h-[500px]  lg:h-[600px] w-[100%]"
              />
              <div className="absolute top-8 left-10">
                <span className="text-black text-3xl">Wasser-Serie</span>
              </div>
              <div className="absolute  bottom-3 left-10">
                <span className="text-black text-2xl">
                  <a className="underline">Jetzt Kaufen</a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center m-24">
              <h2 className="text-4xl">Beliebte Drucke</h2>
            </div>
            <section className="relative  flex justify-center">
              <button
                onClick={() => handleScroll("left")}
                className="absolute right-5 top-[-30px]"
              >
                <img
                  src="/svg/left.svg"
                  height={20}
                  width={20}
                  alt="Scroll Left"
                />
              </button>
              <button onClick={() => handleScroll("right")}>
                <img
                  className="absolute right-0 top-[-30px]"
                  src="/svg/rigth.svg"
                  height={20}
                  width={20}
                ></img>
              </button>

              {/* Image container with responsive width and scroll */}
              <div
                ref={scrollContainerRef}
                className="flex flex-row overflow-x-hidden whitespace-nowrap w-[100%]"
              >
                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/blue.avif"
                    width={300}
                    height={300}
                    alt="painting"
                    className=" w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 90€
                  </div>
                </div>

                <div className="p-2  relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/i.png"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 60€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/s.avif"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 50€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/z.jpg"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 50€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/d.png"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 90€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/b.avif"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 65€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/k.jpg"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 90€
                  </div>
                </div>

                <div className="p-2 relative flex-shrink-0 w-[100%] sm:w-[100%] md:w-[50%] lg:w-[25%]">
                  <Image
                    src="/e.jpg"
                    width={300}
                    height={300}
                    alt="painting"
                    className="w-full h-[50%] object-cover"
                  />
                  <div className="absolute bottom-50 left-0 p-2 bg-white text-black text-sm">
                    ab 70€
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="bg-red-200 flex flex-col md:flex-row justify-center gap-12 ">
            <div className="flex flex-row m-10">
              <Image
                src="/red.jpg"
                width={300}
                height={300}
                alt="painting"
                className=" md:h-[300px] w-[400px] lg:h-[500px] lg:w-[500px]"
              />
            </div>
            <div className=" sm:mt-0 md:mt-0 lg:mt-28 flex flex-col gap-5 p-6 ">
              <h3 className="text-4xl">
                Neue Drucke <br /> für diesen Sommer bestellen!
              </h3>
              <div className="mt-20">
                <p>
                  Entdecke die neuesten Drucke für diesen Sommer und bestelle
                  noch heute
                </p>
                <button className=" bg-slate-500 text-cyan-50 p-4 mt-6 w-fit px-8">
                  Jetzt Kaufen
                </button>
              </div>
            </div>
          </section>
          <div className="flex justify-center text-center m-20">
            <h3 className="text-4xl m-10 p-14 lg:text-6xl">
              Ich bin immer offen für eine Zusammenarbeit. Mehr über meine
              Geschichte erfährst du <br />
              <a className="underline">hier</a>
            </h3>
          </div>
        </div>
      </main>
      <div
        style={{
          background: "url('/watercolor.avif')  no-repeat center center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 className="pt-12 text-center text-5xl md:pt-32">Newsletter</h3>
        <p className="text-center mt-4">
          Erfahre als erster von unseren neuen Drucken, Sonderangeboten und
          anderen News
        </p>
        {/* Content inside the div */}
        <div className="flex flex-col justify-center gap-6 items-center m-3">
          <input type="email" placeholder="E-Mail" className=" p-4" />
          <button className="bg-slate-500 text-cyan-50 py-3 px-4">
            Regestrieren
          </button>
        </div>
      </div>
      <footer className="bg-white  p-4 h-[500px] flex flex-col justify-end">
        <div className="m-auto">
          <Image
            src="/flower.png"
            width={200}
            height={200}
            alt="flower"
          ></Image>
        </div>
        <ul className="flex flex-col items-center justify-center md:flex-row md:justify-around pb-16 border-b border-gray-300">
          <li className="underline">Shop</li>
          <li className="underline">Über mich</li>
          <li className="underline">Kontakt</li>
          <li className="underline">Rahmung & Passepartout</li>
          <li className="underline">Rechtliches</li>
          <li className="underline">Instagram</li>
        </ul>
        <div className="m-auto">
          <p className="p-8">Erstellt von Marta Jäkel</p>
        </div>
      </footer>
    </div>
  );
}
