import img from "../assets/background.jpg";
import { Carousel } from "../components/Carousel";

import { PageWithLargeHeader } from "../components/PageWithLargeHeader";

const imageUrls = [
  "https://melody-music-school.s3.amazonaws.com/certificates/1.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/2.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/3.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/4.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/5.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/6.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/7.jpg",
  "https://melody-music-school.s3.amazonaws.com/certificates/8.jpg",
];

export const Certificates = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <PageWithLargeHeader
        img={img}
        title="Certificates"
        subtitle="Music Schools in Glendale and Granada Hills"
      >
        <div className="w-full h-full flex flex-col py-16 items-center">
          <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-poppins">Our Certificate Programs</h1>
            <div className="text-lg font-light">
              {
                "We offer personal education for all ages and levels. Our programs are designed to help students grow and become the best musicians they can be. This includes private one-on-one lessons, playing in groups, studying music theory, yearly recitals, and more. We offer certificate programs for students who want to take their music education to the next level. These are accredited certificates that recognize the hard work and dedication of our students."
              }
            </div>
            <Carousel imageUrls={imageUrls} />
          </div>
        </div>
      </PageWithLargeHeader>
    </div>
  );
};
