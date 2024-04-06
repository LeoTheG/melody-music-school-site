import img from "../assets/about-us/about-us.jpg";
import { Header } from "../components/Header";
export const AboutUs = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header showBackground smallLogo />
      <div className="w-full h-full flex flex-col py-16 items-center">
        <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-poppins">
            About Melody Music School & Sako Gharib
          </h1>
          <img src={img} alt="Founder" className="w-full" />
          <div className="text-lg font-light">
            {
              "Sako Gharib founded Melody Intl. Music School in 2003. He's personally taught hundreds of students and has a passion for music and teaching.  His guidance ensures that every student gets the best possible music education. Quality is our top priority, we focus on solid fundamentals."
            }
            <br />
            <br />
            {
              "Since founding Melody Music School, Sako and the instructors have been teaching students of all ages and levels. Compared to most other schools, we go beyond collecting tuition and teaching the bare minimum. We're committed to helping our students grow and become the best musicians they can be. This includes private one-on-one lessons, playing in groups, studying music theory, yearly recitals, and more."
            }
          </div>
        </div>
        {/* <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4 mt-8">
          <div className="text-2xl font-poppins">Our Instructors</div>
        </div> */}
      </div>
    </div>
  );
};
