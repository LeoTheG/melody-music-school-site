import "./App.css";
import { Header } from "./components/Header";
import backgroundImg from "./assets/background.jpg";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AboutUs } from "./routes/AboutUs";
import { Footer } from "./components/Footer";
import { MusicLessonsPage } from "./components/MusicLessonsPage";

const musicLessonsPages = [
  {
    instrument: "Piano",
    img: "https://melody-music-school.s3.amazonaws.com/piano/piano-banner.jpg",
    body: "We offer piano lessons for all ages and levels. Our experienced instructors will teach you how to play the piano and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to play with others.",
    imageUrls: [
      "https://melody-music-school.s3.amazonaws.com/piano/C-048.jpg",
      "https://melody-music-school.s3.amazonaws.com/piano/C-057.jpg",
      "https://melody-music-school.s3.amazonaws.com/piano/C-065.jpg",
      "https://melody-music-school.s3.amazonaws.com/piano/C-071.jpg",
      "https://melody-music-school.s3.amazonaws.com/piano/C-098.jpg",
    ],
  },
  {
    instrument: "Guitar",
    img: "https://melody-music-school.s3.amazonaws.com/guitar/guitar-banner.jpg",
    body: "We offer guitar lessons for all ages and levels. Our experienced instructors will teach you how to play the guitar and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to play with others.",
    imageUrls: [4, 5, 6, 7, 8, 11, 12, 13, 14].map(
      (i) => `https://melody-music-school.s3.amazonaws.com/guitar/${i + 1}.jpg`
    ),
  },
  {
    instrument: "Voice",
    img: "https://melody-music-school.s3.amazonaws.com/voice/voice-banner.jpg",
    body: "We offer voice lessons for all ages and levels. Our experienced instructors will teach you how to sing and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to sing with others.",
    imageUrls: Array.from({ length: 4 }).map(
      (_, i) =>
        `https://melody-music-school.s3.amazonaws.com/voice/${i + 1}.jpg`
    ),
  },
  {
    instrument: "Violin",
    img: "https://melody-music-school.s3.amazonaws.com/violin/violin-banner.jpg",
    body: "We offer violin lessons for all ages and levels. Our experienced instructors will teach you how to play the violin and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to play with others.",
    imageUrls: Array.from({ length: 1 }).map(
      (_, i) =>
        `https://melody-music-school.s3.amazonaws.com/violin/${i + 1}.jpg`
    ),
  },
  {
    instrument: "Drums And Percussion",
    img: "https://melody-music-school.s3.amazonaws.com/drums/drums-banner.jpg",
    body: "We offer drums and percussion lessons for all ages and levels. Our experienced instructors will teach you how to play the drums and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to play with others.",
    imageUrls: [2, 3, 4, 5, 6].map(
      (i) => `https://melody-music-school.s3.amazonaws.com/drums/${i}.jpg`
    ),
  },
];

const instruments = [
  "Piano",
  "Guitar",
  "Voice",
  "Violin",
  "Drums And Percussion",
];

const MusicLessonsPages = instruments.map((instrument) => {
  const musicLessonsPage = musicLessonsPages.find(
    (page) => page.instrument === instrument
  );

  if (!musicLessonsPage)
    throw new Error(`No music lessons page found for instrument ${instrument}`);

  const { img, body, imageUrls } = musicLessonsPage;
  const path = `/music-lessons/${instrument
    .toLowerCase()
    .replaceAll(" ", "-")}`;
  console.log({ path });

  return {
    path: path,
    element: (
      <MusicLessonsPage
        img={img}
        instrument={instrument}
        body={body}
        imageUrls={imageUrls}
      />
    ),
  };
});

const hashRouter = createHashRouter([
  { path: "/", element: <Home /> },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  ...MusicLessonsPages,
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={hashRouter} />;
      <Footer />
    </>
  );
};

function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-fit relative pb-16">
        <img
          src={backgroundImg}
          alt="background"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />

        <Header />
        <div className="px-16 text-center flex flex-col gap-8">
          <h1 className="text-8xl font-bold drop-shadow-lg text-white">
            Professional Music Lessons For All Levels And Ages
          </h1>
          <h2 className="text-2xl drop-shadow-lg text-white italic">
            Located in Glendale and Granada Hills - Call us at (818) 599-1606
          </h2>
        </div>
      </div>
      <BelowBanner />
    </div>
  );
}

const BelowBanner = () => {
  return (
    <div className="flex flex-col items-center pt-16 space-y-8 font-poppins [&_p]:text-lg px-32">
      <div className="text-2xl font-semibold">
        Glendale and Granada Hills Music Schools
      </div>

      <h2 className="text-xl font-bold">Our Philosophy</h2>
      <p>
        For decades, Melody Intl. Music School has been the cornerstone of
        quality music education in our community. We are committed to imparting
        the gift of music, having nurtured the talents of thousands. Our
        curriculum, enriched with music theory and scales, is designed to foster
        the artist within.
      </p>

      <h2 className="text-xl font-bold">Yearly Recitals</h2>
      <p>
        Each year, our students showcase their skills at our recital, a
        spectacular event where students practice and play musical pieces in
        front of an audience. A testament to their dedication, practice, and
        passion.
      </p>

      {/* Band Formation */}
      <h2 className="text-xl font-bold">Playing in Bands</h2>
      <p>
        We foster a collaborative environment, offering unique opportunities to
        join bands. Students learn to play with others under guidance from our
        professional instructors.
      </p>

      <h2 className="text-xl font-bold">Accredited Certificates</h2>
      <p>
        Our training extends beyond playing music. We prepare every student to
        excel in recognized examinations, earning accredited music certificates
        that mark their standing as distinguished musicians.
      </p>

      <h2 className="text-xl font-bold">Join Us</h2>
      <p>
        Embark on your musical journey with Melody Intl. Music School. Enroll
        today and transform your musical dreams into reality!
      </p>
    </div>
  );
};

export default Router;
