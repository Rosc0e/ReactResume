import React from "react";
import "../componentStyles/ResumeStyle.css";

export const ResumeContent = () => {
  return (
    <div>
      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <div className="job-title">Assistant Manager / Sales</div>
          <div className="job-desc">Oceanside Ace Hardware</div>
          <div className="job-points">
            <ul>
              <li>Promotion of a postive customer enviroment</li>
              <li>Close management of a 45,0000 item inventory</li>
              <li>Team management and development</li>
              <li>co-head of B2B sales</li>
            </ul>
          </div>
        </div>
        <div className="job">
          <div className="job-title">3D printing technician / Cashier</div>
          <div className="job-desc">Smoke Spot Glass Gallery</div>
          <div className="job-points">
            <ul>
              <li>Customer guidance from door to sale</li>
              <li>
                Production of products using 3D printing from concept to print
              </li>
              <li>
                Software exp: Fusicon 360, Blender, Pursa slicer, Cura,
                Octoprint
              </li>
              <li>Knowledge of glass art and styles</li>
            </ul>
          </div>
        </div>
        <div className="job">
          <div className="job-title">Robot Maintenace/Demolition</div>
          <div className="job-desc">SEH-america</div>
          <div className="job-points">
            <ul>
              <li>
                Preformed repairs and tear downs on robots designed to transfer
                silicone wafers to various production areas
              </li>
              <li>Worked closely with a team to meet deadlines</li>
              <li>Experience in large scale demoltions</li>
              <li>Experience in ISO Class 3 cleanrooms</li>
            </ul>
          </div>
        </div>
        <div className="job">
          <div className="job-title">Salesmen</div>
          <div className="job-desc">Eazy Rollerz</div>
          <div className="job-points">
            <ul>
              <li>Demostrated product to customers in a performative way</li>
              <li>Went above and beyond to satisfy roused customers</li>
              <li>Maintained inventory and cash count of stall</li>
              <li>Generation of sales and recurring customers</li>
              <li>Crowd sales tatics</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
