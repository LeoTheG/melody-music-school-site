import { MusicLessonsPage } from "../../components/MusicLessonsPage";

export const Piano = () => {
  return (
    <MusicLessonsPage
      img="https://melody-music-school.s3.amazonaws.com/piano/piano-banner.jpg"
      instrument="Piano"
      body="We offer piano lessons for all ages and levels. Our experienced instructors will teach you how to play the piano and read music. We offer private lessons one-on-one. Additionally, we offer group lessons to learn how to play with others."
      imageUrls={imageUrls}
    />
  );
};

const imageUrls = [
  "https://melody-music-school.s3.amazonaws.com/piano/C-048.jpg",
  "https://melody-music-school.s3.amazonaws.com/piano/C-057.jpg",
  "https://melody-music-school.s3.amazonaws.com/piano/C-065.jpg",
  "https://melody-music-school.s3.amazonaws.com/piano/C-071.jpg",
  "https://melody-music-school.s3.amazonaws.com/piano/C-098.jpg",
];
