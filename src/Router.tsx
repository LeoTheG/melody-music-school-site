import { RouterProvider, createHashRouter } from "react-router-dom";
import { AboutUs } from "./routes/AboutUs";
import { Footer } from "./components/Footer";
import { MusicLessonsPages } from "./components/MusicLessonsPage";
import { Home } from "./routes/Home";
import { Locations } from "./routes/Locations";
import { ScheduleALesson } from "./routes/ScheduleALesson";
import { OnlineLessons } from "./routes/OnlineLessons";
import { GroupLessons } from "./routes/GroupLessons";
import { Certificates } from "./routes/Certificates";
import { Recitals } from "./routes/Recitals";

const hashRouter = createHashRouter([
  { path: "/", element: <Home /> },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/schedule-a-lesson",
    element: <ScheduleALesson />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
  {
    path: "/recitals",
    element: <Recitals />,
  },
  {
    path: "/music-lessons/online-lessons",
    element: <OnlineLessons />,
  },
  {
    path: "/music-lessons/group-lessons",
    element: <GroupLessons />,
  },
  ...MusicLessonsPages,
]);

export const Router = () => {
  return (
    <>
      <RouterProvider router={hashRouter} />;
      <Footer />
    </>
  );
};
