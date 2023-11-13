import img from "../assets/locations/locations-background.jpg";
import { PageWithLargeHeader } from "../components/PageWithLargeHeader";

export const ScheduleALesson = () => {
  return (
    <PageWithLargeHeader
      img={img}
      title="Schedule a lesson"
      subtitle="Begin your musical journey today!"
    >
      <div className="flex flex-col z-10 relative px-32 bg-base-100 min-h-[300px] py-8">
        <div className="text-2xl flex flex-col gap-8">
          <div>We offer lessons for all ages and experience levels!</div>
          <div className="text-xl flex flex-col gap-4">
            <div>Call us at two locations</div>
            <div>
              Glendale - 334 N. Central Ave. Glendale CA 91203. (818) 244-8244
            </div>
            <div>
              Granada Hills - 17727 Chatsworth St, Granada Hills, CA 91344.
              (818) 363-4343
            </div>
          </div>
        </div>
      </div>
    </PageWithLargeHeader>
  );
};
