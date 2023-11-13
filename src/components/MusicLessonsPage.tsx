import { Carousel } from "./Carousel";
import { PageWithLargeHeader } from "./PageWithLargeHeader";

export const MusicLessonsPage = ({
  img,
  instrument,
  body,
  imageUrls,
}: {
  img: string;
  instrument: string;
  body: string;
  imageUrls: string[];
}) => {
  return (
    <PageWithLargeHeader
      img={img}
      title={`${instrument} Lessons in Glendale and Granada Hills`}
      subtitle="Located in Glendale and Granada Hills - Call us at (818) 599-1606"
    >
      <BelowBanner body={body} instrument={instrument} imageUrls={imageUrls} />
    </PageWithLargeHeader>
  );
};

const BelowBanner = ({
  body,
  instrument,
  imageUrls,
}: {
  body: string;
  instrument: string;
  imageUrls: string[];
}) => {
  return (
    <div className="flex flex-col items-center gap-8 font-light bg-base-100 z-10 relative pt-8">
      <div className="md:px-0 px-8 text-4xl">
        About Our {instrument} Lessons
      </div>
      <div className="w-[400px] flex flex-col gap-4">
        <Carousel imageUrls={imageUrls} />
      </div>
      <div className="font-light text-xl md:w-[400px] md:px-0 px-8 ">
        {body}
      </div>
    </div>
  );
};

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
    imageUrls: [4, 5, 6, 7, 11, 12, 13, 14].map(
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
    imageUrls: [2].map(
      (i) => `https://melody-music-school.s3.amazonaws.com/violin/${i}.jpg`
    ),
    // imageUrls: Array.from({ length: 2 }).map(
    //   (_, i) =>
    //     `https://melody-music-school.s3.amazonaws.com/violin/${i + 1}.jpg`
    // ),
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

export const MusicLessonsPages = instruments.map((instrument) => {
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
