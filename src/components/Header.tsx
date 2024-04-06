import { Link } from "react-router-dom";
import logo from "../assets/melody-logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SlideOver from "./SlideOver";
import { useState } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Music Lessons",
    href: "/music-lessons",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Schedule a lesson",
    href: "/schedule-a-lesson",
  },
  {
    label: "Recitals",
    href: "/recitals",
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
];

const hoverableLinks: { [key: string]: { label: string; href: string }[] } = {
  "Music Lessons": [
    {
      label: "Piano",
      href: "/music-lessons/piano",
    },
    {
      label: "Guitar",
      href: "/music-lessons/guitar",
    },
    {
      label: "Voice",
      href: "/music-lessons/voice",
    },
    {
      label: "Violin",
      href: "/music-lessons/violin",
    },
    {
      label: "Drums And Percussion",
      href: "/music-lessons/drums-and-percussion",
    },
    {
      label: "Online Lessons",
      href: "/music-lessons/online-lessons",
    },
    {
      label: "Group Lessons",
      href: "/music-lessons/group-lessons",
    },
  ],
};

export const Header = ({ showBackground = false, smallLogo = false }) => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  return (
    <div
      className="flex flex-row px-8 md:px-16 py-8 justify-between z-10 relative"
      style={{
        backgroundColor: showBackground ? "#212121" : "undefined",
      }}
    >
      <SlideOver
        isOpen={isSlideOverOpen}
        onClose={() => setIsSlideOverOpen(false)}
      >
        {links.map((link) => {
          const links = hoverableLinks[link.label];
          // if (links) {
          //   return <Hoverable text={link.label} links={links} />;
          // }
          if (links) {
            // return multiple links instead of hover in mobile
            return (
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link to={link.href}>
                    <div className="text-xl h-fit w-fit cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            );
          }
          return (
            <Link to={link.href}>
              <div className="text-xl h-fit w-fit cursor-pointer">
                {link.label}
              </div>
            </Link>
          );
        })}
      </SlideOver>
      <Link to="/">
        <img
          src={logo}
          alt="Melody Logo"
          className="w-32 md:w-40 h-auto"
          style={{
            width: smallLogo ? 100 : "undefined",
          }}
        />
      </Link>
      <div className="flex md:hidden flex-1 justify-end">
        <Bars3Icon
          className="w-16 text-white cursor-pointer"
          onClick={() => setIsSlideOverOpen(true)}
        />
      </div>
      <div className="hidden md:flex gap-4">
        {links.map((link) => {
          const links = hoverableLinks[link.label];
          if (links) {
            return <Hoverable text={link.label} links={links} />;
          }
          return (
            <Link to={link.href} className="h-fit">
              <div
                className="text-white text-xl h-fit w-fit cursor-pointer"
                style={{
                  textShadow: "0px 0px 3px #000000",
                }}
              >
                {link.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Hoverable = ({
  text,
  links,
}: {
  text: string;
  links: (typeof hoverableLinks)[string];
}) => {
  return (
    <div className="dropdown dropdown-hover h-fit">
      <label
        tabIndex={0}
        className="m-1 text-white text-xl cursor-pointer"
        style={{
          textShadow: "0px 0px 3px #000000",
        }}
      >
        {text}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-1 menu p-4 shadow bg-base-100 w-52 flex flex-col gap-2"
      >
        {links.map((link) => (
          <Link to={link.href} className="h-fit">
            <div className="text-lg h-fit">{link.label}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
