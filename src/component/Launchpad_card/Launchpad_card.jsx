import React from "react";
import Card_img from "../Assets/Binance.png";
import "./Launchpad_card.css";
import LockIcon from "@mui/icons-material/Lock";
{
  /* {LockIcon}  */
}

function Launchpad_card() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 ">
            <div class="card-body bg_color ">
              <div className=" d-flex justify-content-between align-items-center ">
                <img src={Card_img} alt="" className="img_card" />
                <div>
                <p className=" p_bg text-white px-2 py-1">
                <svg stroke="currentColor" className="icon_lock" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path></svg>
                 
                   upcoming
                </p></div>
              </div>

              <div className="my-3">
                <p className="text-white mb-1 hh">Tweetfi</p>
                <p className="text-white mb-1 kk">1 BNB = 30,000 TW.</p>
              </div>
              <p className="text-white progress_text mb-1">Progress (0.00%)</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-white">0 BNB</p>
                <p className=" text-white">200 BNB</p>
              </div>
              <hr className="hr" />

              <div className="d-flex justify-content-between text-white">
                <p>
                  Sale Starts In: <br />
                  <strong>
                    <span>00</span>
                    <span class="dotdot">:</span>
                    <span>00</span>
                    <span class="dotdot">:</span>
                    <span>06</span>
                    <span class="dotdot">:</span>
                    <span>41</span>
                  </strong>{" "}
                </p>

                <div>
                  <a class="btn max_btn_color " href="#" role="button">
                    View
                  </a>{" "}
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
