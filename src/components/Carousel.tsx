import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const TIME_BETWEEN_IMAGES = 5000;
export const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualNavigation, setManualNavigation] = useState(false);

  // auto scroll to next image
  useEffect(() => {
    if (manualNavigation) return;

    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollLeft += container.clientWidth;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }, TIME_BETWEEN_IMAGES);

    return () => {
      clearInterval(interval);
    };
  }, [manualNavigation]);

  const handleClickLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    setManualNavigation(true);
    container.scrollLeft -= container.clientWidth;
  };

  const handleClickRight = () => {
    const container = containerRef.current;
    if (!container) return;

    setManualNavigation(true);
    container.scrollLeft += container.clientWidth;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="carousel w-full rounded-md relative" ref={containerRef}>
        {imageUrls.map((url, index) => (
          <div key={index} className="carousel-item relative w-full">
            <img
              src={url}
              className="w-full h-64 md:h-[400px] object-cover"
              alt="musician"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-[300px]">
        <div className="btn btn-circle bg-none" onClick={handleClickLeft}>
          <ArrowLeftIcon />
        </div>
        <div className="btn btn-circle" onClick={handleClickRight}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};
