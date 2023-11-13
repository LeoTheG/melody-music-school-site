import { useEffect, useRef } from "react";

const TIME_BETWEEN_IMAGES = 10000;

export const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // auto scroll to next image
  useEffect(() => {
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
  }, []);

  return (
    <div className="carousel w-full rounded-md" ref={containerRef}>
      {imageUrls.map((url, index) => (
        <div key={index} className="carousel-item relative w-full">
          <img src={url} className="w-full" alt="musician" />
          {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="btn btn-circle" onClick={handleClickLeft}>
              ❮
            </div>
            <div className="btn btn-circle" onClick={handleClickRight}>
              ❯
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};
