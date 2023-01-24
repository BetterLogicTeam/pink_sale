import React from "react";

import "./Launchpad_card.css";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
{
  /* {LockIcon}  */
}

function Launchpad_card(props) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 ">
            <div className="card-body bg_color ">
              <div className=" d-flex justify-content-between align-items-center ">
                <img src={props.img_card} alt="" className="img_card" />
                <div>
                  <p className=" p_bg text-white px-2 py-1">
                    <svg
                      stroke="currentColor"
                      className="icon_lock"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path>
                    </svg>
                    upcoming
                  </p>
                </div>
              </div>

              <div className="my-3">
                <p className="text-white mb-1 hh"> {props.para_1}</p>
                <p className="text-white mb-1 kk">{props.para_2}</p>
              </div>
              <p className="text-white progress_text mb-2">
                Progress{props.para_3}
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="50"
                  style={{width:"20%"}}
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="text-white progress_text">{props.BNB_1}</p>
                <p className=" text-white progress_text"> {props.BNB_2}</p>
              </div>
              <hr className="hr" />

              <div className="d-flex justify-content-between text-white">
                <p>
                  Sale Starts In: <br />
                  <strong>
                    <span>00</span>
                    <span className="dotdot">:</span>
                    <span>00</span>
                    <span className="dotdot">:</span>
                    <span>06</span>
                    <span className="dotdot">:</span>
                    <span>41</span>
                  </strong>{" "}
                </p>

                <div>
                  <Link to="/Launchpad_list_view" className="btn max_btn_color "  role="button">
                    View
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Launchpad_card;
