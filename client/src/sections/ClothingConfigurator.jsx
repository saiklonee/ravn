import { useState, useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { PiTShirtDuotone } from "react-icons/pi";
import gsap from "gsap";

const ClothingConfigurator = () => {
  const [angle, setAngle] = useState(0);

  // Clothing indexes
  const [topwearIndex, setTopwearIndex] = useState(0);
  const [bottomwearIndex, setBottomwearIndex] = useState(0);
  const [shoesIndex, setShoesIndex] = useState(0);

  const imageRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const models = {
    "-135": "/model/model-6.png",
    "-90": "/model/model-4.png",
    "-45": "/model/model-5.png",
    0: "/model/model-1.png",
    45: "/model/model-7.png",
    90: "/model/model-2.png",
    135: "/model/model-8.png",
    180: "/model/model-3.png",
  };

  // -----------------------------
  // CLOTHING DATA
  // -----------------------------

  const topwear = [
    "/cloths/topwear/red-shirt.png",
    "/cloths/topwear/bonker-cc.png",
    "/cloths/topwear/bonker-divine-tshirt.png",
  ];

  const bottomwear = [
    "/cloths/bottomwear/blue-jeans.png",
    "/cloths/topwear/black-flame-tshirt.png",
  ];

  const shoes = [
    "/cloths/shoes/white-shoes.png",
    "/cloths/topwear/black-flame-tshirt.png",
  ];

  // -----------------------------
  // MODEL ROTATION
  // -----------------------------

  const rotateRight = () => {
    const nextAngle = angle === 180 ? -135 : angle + 45;

    // Arrow click effect
    gsap.fromTo(
      rightArrowRef.current,
      {
        scale: 1,
      },
      {
        scale: 0.75,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      },
    );

    // Model rotation
    gsap.to(imageRef.current, {
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        setAngle(nextAngle);

        gsap.set(imageRef.current, {
          rotate: 0,
        });
      },
    });
  };

  const rotateLeft = () => {
    const nextAngle = angle === -135 ? 180 : angle - 45;

    // Arrow click effect
    gsap.fromTo(
      leftArrowRef.current,
      {
        scale: 1,
      },
      {
        scale: 0.75,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      },
    );

    // Model rotation
    gsap.to(imageRef.current, {
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        setAngle(nextAngle);

        gsap.set(imageRef.current, {
          rotate: 0,
        });
      },
    });
  };

  // -----------------------------
  // TOPWEAR
  // -----------------------------

  const nextTopwear = () => {
    setTopwearIndex((prev) => (prev + 1) % topwear.length);
  };

  const previousTopwear = () => {
    setTopwearIndex((prev) => (prev - 1 + topwear.length) % topwear.length);
  };

  // -----------------------------
  // BOTTOMWEAR
  // -----------------------------

  const nextBottomwear = () => {
    setBottomwearIndex((prev) => (prev + 1) % bottomwear.length);
  };

  const previousBottomwear = () => {
    setBottomwearIndex(
      (prev) => (prev - 1 + bottomwear.length) % bottomwear.length,
    );
  };

  // -----------------------------
  // SHOES
  // -----------------------------

  const nextShoes = () => {
    setShoesIndex((prev) => (prev + 1) % shoes.length);
  };

  const previousShoes = () => {
    setShoesIndex((prev) => (prev - 1 + shoes.length) % shoes.length);
  };

  return (
    <section className="w-full h-screen bg-amber-50 flex flex-col overflow-hidden">
      {/* UPPER SECTION : heading  */}
      <div className="w-full h-1/15 flex items-center gap-4 justify-center">
        <div>
          <PiTShirtDuotone className="w-7 h-7" />
        </div>
        <div>
          <h3 className="font-bold text-2xl">CLOTH CONFIGURATOR</h3>
        </div>
      </div>

      {/* LOWER SECTION  */}

      <div className="w-full flex h-14/15">
        {/* ================================= */}
        {/* LEFT / MODEL */}
        {/* ================================= */}

        <div className="w-2/3 h-full flex flex-col justify-center pb-3 pt-2 relative">
          {/* add your image section  */}
          <div className="flex flex-col items-center absolute left-5 bottom-5 gap-2 z-3">
            <div className="w-30 aspect-square border flex justify-center items-center hover:bg-black/20 transition-colors cursor-pointer">
              <IoMdAdd className="w-5 h-5" />
            </div>
            <div className="text-sm">Add your Image</div>
          </div>

          {/* man woman selector  */}

          <div className="flex items-center absolute left-5 top-5 gap-2 border p-1 text-sm z-3">
            <div className="px-3 py-1 bg-black text-white cursor-pointer">
              Male
            </div>
            <div className="px-3 py-1 hover:bg-black/20 cursor-pointer">
              <p>Female</p>
            </div>
          </div>

          {/* main part  */}
          <div className="w-full h-13/15 flex justify-center">
            {/* LEFT MODEL ARROW */}
            <button
              ref={leftArrowRef}
              onClick={rotateLeft}
              className="w-1/5 h-full flex justify-center items-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft className="w-10 h-10" />
            </button>
            {/* MODEL */}
            <div className="h-full overflow-hidden">
              <img
                ref={imageRef}
                src={models[angle]}
                alt="Model"
                className="h-full object-contain"
              />
            </div>
            {/* RIGHT MODEL ARROW */}
            <button
              ref={rightArrowRef}
              onClick={rotateRight}
              className="w-1/5 h-full flex justify-center items-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowRight className="w-10 h-10" />
            </button>
          </div>
          <div className="w-full h-1/15 flex justify-center items-center -translate-x-3">
            <button className="bg-black text-white px-6 py-2 cursor-pointer border border-black hover:text-black hover:bg-transparent transition-all">
              Add To Cart
            </button>
          </div>
        </div>

        {/* ================================= */}
        {/* RIGHT PANEL */}
        {/* ================================= */}

        <div className="w-1/3 h-full flex flex-col">
          {/* HEADING */}
          <div className="w-full h-1/10 p-4 flex justify-center">WARDROBE</div>

          {/* CLOTHING */}
          <div className="w-full h-9/10">
            <div className="w-full h-full flex flex-col">
              {/* ================================= */}
              {/* TOPWEAR */}
              {/* ================================= */}

              <div className="w-full h-2/7 mx-auto flex justify-center p-1 gap-6">
                {/* PREVIOUS */}
                <button
                  onClick={previousTopwear}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft className="w-7 h-7" />
                </button>

                {/* IMAGE */}
                <div className="h-full aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={topwear[topwearIndex]}
                    alt="Topwear"
                  />
                </div>

                {/* NEXT */}
                <button
                  onClick={nextTopwear}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowRight className="w-7 h-7" />
                </button>
              </div>

              {/* ================================= */}
              {/* BOTTOMWEAR */}
              {/* ================================= */}

              <div className="w-full h-3/7 mx-auto flex justify-center p-1 gap-6">
                {/* PREVIOUS */}
                <button
                  onClick={previousBottomwear}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft className="w-7 h-7" />
                </button>

                {/* IMAGE */}
                <div className="h-full w-1/3">
                  <img
                    className="w-full h-full object-contain"
                    src={bottomwear[bottomwearIndex]}
                    alt="Bottomwear"
                  />
                </div>

                {/* NEXT */}
                <button
                  onClick={nextBottomwear}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowRight className="w-7 h-7" />
                </button>
              </div>

              {/* ================================= */}
              {/* SHOES */}
              {/* ================================= */}

              <div className="w-full h-2/7 mx-auto flex justify-center p-1 gap-6">
                {/* PREVIOUS */}
                <button
                  onClick={previousShoes}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft className="w-7 h-7" />
                </button>

                {/* IMAGE */}
                <div className="h-full aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={shoes[shoesIndex]}
                    alt="Shoes"
                  />
                </div>

                {/* NEXT */}
                <button
                  onClick={nextShoes}
                  className="h-full flex items-center cursor-pointer"
                >
                  <MdOutlineKeyboardArrowRight className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingConfigurator;
