import { Fragment } from "react";
import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import StayProductive from "../StayProductive/StayProductive";
import GetStarted from "../GetStarted/GetStarted";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
<div className="dark:bg-slate-50">
      <Fragment>
        <Landing />
        <Features />
        <StayProductive />
        <Testimonials />
        <GetStarted />
      </Fragment>
</div>
  );
}
