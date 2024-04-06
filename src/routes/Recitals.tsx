// import img from "../assets/about-us/about-us.jpg";
import img from "../assets/background.jpg";
import { Carousel } from "../components/Carousel";
import { PageWithLargeHeader } from "../components/PageWithLargeHeader";

// ex: https://melody-music-school.s3.amazonaws.com/recitals/1.jpg
const imageUrls = Array.from({ length: 22 }).map(
  (_, i) => `https://melody-music-school.s3.amazonaws.com/recitals/${i + 1}.jpg`
);

delete imageUrls[0];

export const Recitals = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <PageWithLargeHeader
        img={img}
        title="Recitals"
        subtitle="Music Schools in Glendale and Granada Hills"
      >
        <div className="w-full h-full flex flex-col py-16 items-center">
          <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-poppins">
              {"Melody Music School's Recitals"}
            </h1>
            <div className="text-lg font-light">
              {
                "Every year, we host recitals for our students. This is a great opportunity for students to showcase their talent and hard work. It's also a great way for students to gain confidence and experience performing in front of an audience. We encourage all of our students to participate in our recitals. It's a fun and rewarding experience for everyone involved."
              }
            </div>
            <Carousel imageUrls={imageUrls} />
          </div>
        </div>
      </PageWithLargeHeader>
    </div>
  );
};
