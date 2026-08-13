import { useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import gsap from "gsap";

const ClothingConfigurator = () => {
  const [angle, setAngle] = useState(0);
  const imageRef = useRef(null);

  const models = {
    0: "/model/model-1.png",
    90: "/model/model-2.png",
    180: "/model/model-3.png",
    "-90": "/model/model-4.png",
  };

  const rotateRight = () => {
    const nextAngle = angle === 180 ? -90 : angle + 90;

    gsap.to(imageRef.current, {
      opacity: 100,
      x: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setAngle(nextAngle);

        gsap.fromTo(
          imageRef.current,
          {
            opacity: 100,
            x: 0,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      },
    });
  };

  const rotateLeft = () => {
    const nextAngle = angle === -90 ? 180 : angle - 90;

    gsap.to(imageRef.current, {
      opacity: 100,
      x: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setAngle(nextAngle);

        gsap.fromTo(
          imageRef.current,
          {
            opacity: 100,
            x: 0,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      },
    });
  };

  return (
    <section className="w-full h-screen bg-amber-50 flex overflow-hidden">
      {/* LEFT / MODEL */}
      <div className="w-2/3 h-full pt-5 pb-5 flex justify-center">
        {/* LEFT ARROW */}
        <button
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

        {/* RIGHT ARROW */}
        <button
          onClick={rotateRight}
          className="w-1/5 h-full flex justify-center items-center cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight className="w-10 h-10" />
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/3 h-full bg-amber-200"></div>
    </section>
  );
};

export default ClothingConfigurator;
