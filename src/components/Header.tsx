import { Link } from "react-router-dom";
import logo from "../assets/melody-logo.png";

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
  ],
};

export const Header = ({ showBackground = false, smallLogo = false }) => {
  return (
    <div
      className="flex flex-row px-16 py-8 justify-between z-10 relative"
      style={{
        backgroundColor: showBackground ? "#212121" : "undefined",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Melody Logo"
          className="w-40 h-auto"
          style={{
            width: smallLogo ? 100 : "undefined",
          }}
        />
      </Link>
      <div className="flex gap-4">
        {links.map((link) => {
          const links = hoverableLinks[link.label];
          if (links) {
            return <Hoverable text={link.label} links={links} />;
          }
          return (
            <Link to={link.href}>
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
    <div className="dropdown dropdown-hover">
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
          <Link to={link.href}>
            <div className="text-lg">{link.label}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
