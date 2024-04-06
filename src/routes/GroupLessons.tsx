import { PageWithLargeHeader } from "../components/PageWithLargeHeader";

export const GroupLessons = () => {
  return (
    <PageWithLargeHeader
      img={
        "https://melody-music-school.s3.amazonaws.com/piano/piano-banner.jpg"
      }
      title="Group lessons"
      subtitle="Located in Glendale and Granada Hills - Call us at (818) 599-1606"
    >
      <div className="w-full h-full flex flex-col py-16 items-center">
        <div className="px-8 md:px-0 md:w-[520px] h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl font-poppins">About Our Group Lessons</h1>
          <div className="text-lg font-light">
            Melody International Music School Inc. is a premier music school
            that offers a unique opportunity for students to learn and play
            music in groups. Our experienced and talented instructors specialize
            in guiding groups of students, such as drummers, guitarists, and
            bassists, to collaborate and create music together in person.
            <br />
            <img
              src="https://melody-music-school.s3.amazonaws.com/group-lessons/0.jpg"
              alt="group lesson"
            />
            <br />
            We believe that group lessons provide a dynamic and interactive
            learning environment, where students can enhance their musical
            skills while also developing teamwork and communication abilities.
            Our group lessons are designed to cater to various skill levels and
            musical interests, ensuring that every student can find a group that
            resonates with their goals and preferences.
            <br />
            <br />
            Our in-person sessions allow groups to connect and practice in a
            shared space, fostering a sense of community and collaboration. We
            accommodate groups from different locations, ensuring that distance
            is no barrier to a shared musical experience.
            <br />
            <br />
            At Melody Music School, we are passionate about fostering a sense of
            community and collaboration among our students. Join our group
            lessons today and embark on a musical journey that will not only
            enhance your individual skills but also create lasting memories and
            friendships through the power of music.
          </div>
        </div>
      </div>
    </PageWithLargeHeader>
  );
};
