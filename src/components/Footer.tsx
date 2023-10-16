export const Footer = ({ showBackground = true }) => {
  return (
    <div
      className="flex flex-col px-32 py-8 text-white gap-8"
      style={{
        backgroundColor: showBackground ? "#212121" : "undefined",
      }}
    >
      <div className="flex flex-row gap-4">
        {socialMedia.map((social) => {
          return (
            <a href={social.href}>
              <div className="text-white text-3xl h-fit w-fit cursor-pointer">
                {social.icon}
              </div>
            </a>
          );
        })}
      </div>
      <div>Glendale - 334 N. Central Ave. Glendale CA 91203</div>
      <div>Granada Hills - 17727 Chatsworth St, Granada Hills, CA 91344</div>
      <div>{"Call us at (818) 599-1606"}</div>
    </div>
  );
};

function IconFacebook() {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
      <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
    </svg>
  );
}

const socialMedia = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/usmelodymusic",
    icon: <IconFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/melodyintl.musicschool/",
    icon: <IconInstagram />,
  },
];
