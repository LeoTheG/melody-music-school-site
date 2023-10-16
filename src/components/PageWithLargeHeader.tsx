import { PropsWithChildren } from "react";
import { Header } from "./Header";

export const PageWithLargeHeader: React.FC<
  PropsWithChildren<{ img: string; title: string; subtitle: string }>
> = ({ children, img, title, subtitle }) => {
  return (
    <div className="w-full h-full">
      <div className="h-fit relative pb-16">
        <img
          src={img}
          alt="background"
          className="w-full absolute top-0 left-0 object-cover h-[600px]"
        />
        <Header />

        <div className="px-16 text-center flex flex-col gap-8">
          <h1 className="text-8xl font-bold drop-shadow-lg text-white">
            {title}
          </h1>
          <h2 className="text-2xl drop-shadow-lg text-white italic">
            {subtitle}
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};
