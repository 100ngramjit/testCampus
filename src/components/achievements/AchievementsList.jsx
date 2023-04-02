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
          <div>
            <ShowChartIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">99.35%</span>
            <p class="m-0">Avg. Salary Hike</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div>
            <AttachMoneyIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">₹ 1.5 Cr</span>
            <p class="m-0">Highest Package</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div>
            <HailIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">100%</span>
            <p class="m-0">Placement Record</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex align-items-center mb-3">
          <div>
            <HandshakeIcon className="icons" />
          </div>
          <div class="ms-3">
            <span class="h2 fw-bold">400+</span>
            <p class="m-0">Industry Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
