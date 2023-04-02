import * as React from "react";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HailIcon from "@mui/icons-material/Hail";
import HandshakeIcon from "@mui/icons-material/Handshake";

import "./style.css";

export default function AchievementsList() {
  return (
    <div class="container achievements">
      <div class="text-center mb-5">
        <h3 class="section_header">Measurable milestones</h3>
        <p>
          We offer programs with placement assistance to help our learners find
          success
        </p>
      </div>
      <div class="row gx-5">
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div class="icons">
            <ShowChartIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">99.35%</span>
            <p class="m-0">Avg. Salary Hike</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div class="icons">
            <AttachMoneyIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">₹ 1.5 Cr</span>
            <p class="m-0">Highest Package</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div class="icons">
            <HailIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">100%</span>
            <p class="m-0">Placement Record</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div class="icons">
            <HandshakeIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">400+</span>
            <p class="m-0">Industry Partners</p>
          </div>
        </div>
      </div>
    </div>

    // <div className="container achievements">
    //   <div className="text-center mb-5">
    //     <h3 className="section_header">Measurable milestones</h3>
    //     <p>
    //       We offer programs with placement assistance to help our learners find
    //       success
    //     </p>
    //   </div>
    //   <div class="row gx-5">
    //     <div class="col-lg-3 d-flex align-items-center">
    //       <ShowChartIcon className="icons" />
    //       <div className="col-sm-6">
    //         <span className="h2 fw-bold">99.35%</span>
    //         <p className="m-0">Avg. Salary Hike</p>
    //       </div>
    //     </div>
    //     <div class="col-md-3 d-flex align-items-center">
    //       <AttachMoneyIcon className="icons" />
    //       <div>
    //         <span className="h2 fw-bold">₹ 1.5 Cr</span>
    //         <p className="m-0">Highest Package</p>
    //       </div>
    //     </div>
    //     <div class="col-md-3 d-flex align-items-center">
    //       <HailIcon className="icons" />
    //       <div>
    //         <span className="h2 fw-bold">100%</span>
    //         <p className="m-0">Placement Record</p>
    //       </div>
    //     </div>
    //     <div class="col-md-3 d-flex align-items-center">
    //       <HandshakeIcon className="icons" />
    //       <div>
    //         <span className="h2 fw-bold">400+</span>
    //         <p className="m-0">Industry Partners</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
