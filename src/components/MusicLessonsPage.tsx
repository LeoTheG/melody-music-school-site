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
    <div className="flex flex-col items-center gap-8 font-light">
      <div className="text-4xl">About Our {instrument} Lessons</div>
      <div className="w-[400px] flex flex-col gap-4">
        <Carousel imageUrls={imageUrls} />
      </div>
      <div className="font-light text-xl w-[400px]">{body}</div>
    </div>
  );
};
