import { RouterProvider, createHashRouter } from "react-router-dom";
import { AboutUs } from "./routes/AboutUs";
import { Footer } from "./components/Footer";
import { MusicLessonsPages } from "./components/MusicLessonsPage";
import { Home } from "./routes/Home";
import { Locations } from "./routes/Locations";
import { ScheduleALesson } from "./routes/ScheduleALesson";

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
