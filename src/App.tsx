import React from "react";
import { Logo } from "./componets/Logo";
import { Aside } from "./componets/Aside";
import { ShortDescription } from "./componets/ShortDescription";
import { ResumeContent } from "./componets/resumeContent/ResumeContent";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <main className="container ">
      <div className="row  justify-content-center">
        <div className="col-auto">
          <Logo />
        </div>
      </div>
      <section className="row">
        <div id="shortDesc" className="col ">
          <h1 className="shortDesc justify-content-start"></h1>
          <ShortDescription />
          <div id="RCpad">
            <ResumeContent />
          </div>
        </div>
      </section>
      <div id="colpadtop" className="row  justify-content-center">
        <div className="col-auto ">
          <div>
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
