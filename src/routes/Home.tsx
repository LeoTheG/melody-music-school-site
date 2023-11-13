import { Header } from "../components/Header";
import backgroundImg from "../assets/background.jpg";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="h-fit relative pb-16">
        <img
          src={backgroundImg}
          alt="background"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />

        <Header />
        <div className="px-16 flex w-full text-center justify-center">
          <div className="max-w-[800px] flex flex-col gap-8">
            <h1 className="text-5xl md:text-8xl font-bold drop-shadow-lg text-white">
              Professional Music Lessons For All Levels And Ages
            </h1>
            <h2 className="text-2xl drop-shadow-lg text-white italic">
              Located in Glendale and Granada Hills - Call us at (818) 599-1606
            </h2>
          </div>
        </div>
      </div>
      <BelowBanner />
    </div>
  );
};

const BelowBanner = () => {
  return (
    <div className="flex justify-center pt-16 px-8 md:px-32">
      <div className="max-w-[800px] flex flex-col font-poppins [&_p]:text-lg gap-8">
        <div className="text-2xl font-semibold">
          Glendale and Granada Hills Music Schools
        </div>

        <h2 className="text-xl font-bold">Our Philosophy</h2>
        <p>
          For decades, Melody Intl. Music School has been the cornerstone of
          quality music education in our community. We are committed to
          imparting the gift of music, having nurtured the talents of thousands.
          Our curriculum, enriched with music theory and scales, is designed to
          foster the artist within.
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
          We foster a collaborative environment, offering unique opportunities
          to join bands. Students learn to play with others under guidance from
          our professional instructors.
        </p>

        <h2 className="text-xl font-bold">Accredited Certificates</h2>
        <p>
          Our training extends beyond playing music. We prepare every student to
          excel in recognized examinations, earning accredited music
          certificates that mark their standing as distinguished musicians.
        </p>

        <h2 className="text-xl font-bold">Join Us</h2>
        <p>
          Embark on your musical journey with Melody Intl. Music School. Enroll
          today and transform your musical dreams into reality!
        </p>
      </div>
    </div>
  );
};
