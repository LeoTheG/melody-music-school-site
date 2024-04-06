import { PageWithLargeHeader } from "../components/PageWithLargeHeader";

export const OnlineLessons = () => {
  return (
    <PageWithLargeHeader
      img={
        "https://melody-music-school.s3.amazonaws.com/piano/piano-banner.jpg"
      }
      title="Online music lessons"
      subtitle="Located in Glendale and Granada Hills - Call us at (818) 599-1606"
    >
      <div className="w-full h-full flex flex-col py-16 items-center">
        <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-poppins">
            About Our Online Music Lessons
          </h1>
          <div className="text-lg font-light">
            Melody International Music School Inc. is a premier music school
            that offers a wide range of music lessons for students of all ages
            and skill levels. Our experienced and talented instructors are
            dedicated to providing personalized and engaging lessons for a
            variety of instruments, including piano, violin, guitar, drums, and
            many more.
            <br />
            <br />
            We understand that every student has unique needs and goals, which
            is why we offer customized lesson plans to suit individual
            preferences and learning styles. Whether you are a beginner looking
            to explore the world of music, or an advanced player seeking to
            refine your skills, our school has the resources and expertise to
            help you achieve your musical aspirations.
            <br />
            <img
              className="mt-4"
              src="https://melody-music-school.s3.amazonaws.com/online-lessons/online_music_lesson.jpg"
              alt="online music lesson"
            />
            <br />
            Our flexible online platform allows students to learn from the
            comfort of their own homes, making music education accessible to
            everyone, regardless of location. We cater to students in different
            cities, states, and even overseas, ensuring that distance is no
            barrier to quality music education.
            <br />
            <br />
            At Melody International Music School Inc., we are passionate about
            nurturing the musical talents of our students and helping them reach
            their full potential. Join us today and embark on a rewarding
            musical journey that will inspire and enrich your life.
          </div>
        </div>
      </div>
    </PageWithLargeHeader>
  );
};
