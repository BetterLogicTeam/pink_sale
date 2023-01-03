// import React from "react";

// import Typography from "@mui/material/Typography";

// import mata from "../Assets/mata mask.svg";
// import mata1 from "../Assets/trust.svg";
// import mata2 from "../Assets/wallet.svg";
// import mata3 from "../Assets/coinbase.png";
// import mata4 from "../Assets/safepal.jpg";
// import mata5 from "../Assets/token.png";
// import mata6 from "../Assets/math.png";
// import mata7 from "../Assets/install.png";
// import bnc1 from "../Assets/bnc-1.svg";
// import bnc2 from "../Assets/bnb.png";
// import bnc3 from "../Assets/matic.png";
// import bnc4 from "../Assets/avalache.svg";
// import bnc5 from "../Assets/fantom.svg";
// import bnc6 from "../Assets/cornor.svg";
// import bnc7 from "../Assets/doge.png";
// function Modal_connect() {
//   return (
//     <div className="model_flex">
//       <Typography
//         className="d-flex justify-content-end d-none d-md-flex "
//         component="div"
//         sx={{ flexGrow: 1 }}
//       >
//         <button className="btn button_nav text-dark me-2 d-flex align-items-center ">
//           {" "}
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             stroke-width="0"
//             viewBox="0 0 1024 1024"
//             class="hide-on-mobile"
//             height="18"
//             width="18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"></path>
//           </svg>
//           <span className="font_size_eth">dexview.com</span>
//         </button>
//         <div>
//           {/* <!-- Modal connect --> */}
//           <div
//             class="modal fade"
//             id="staticBackdrop"
//             data-bs-backdrop="static"
//             data-bs-keyboard="false"
//             tabindex="1"
//             aria-labelledby="staticBackdropLabel"
//             aria-hidden="true"
//           >
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h5
//                     class="modal-title-1 text-dark fs-6"
//                     id="staticBackdropLabel"
//                   >
//                     Connect to a wallet
//                   </h5>
//                   <button
//                     type="button"
//                     class="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div class="modal-body">
//                   <div className="container">
//                     <div className="row pt-3">
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">MataMask</p>
//                       </div>
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata1}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">TrustWallet</p>
//                       </div>
//                     </div>
//                     <div className="row pt-3">
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata2}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">WalletConnect</p>
//                       </div>
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata3}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">Coinbase Wallet</p>
//                       </div>
//                     </div>
//                     <div className="row pt-3">
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata4}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">SafePal Wallet</p>
//                       </div>
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata5}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">TokenPocket</p>
//                       </div>
//                     </div>
//                     <div className="row pt-3">
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata6}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">Math Wallet</p>
//                       </div>
//                       <div className="col-6 mata_hover">
//                         <div>
//                           <img
//                             src={mata7}
//                             width="15%"
//                             className="mata_img"
//                             alt=""
//                           />
//                         </div>
//                         <p className="mata_text">Install BitKeep</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           class="modal fade"
//           id="exampleModal"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5
//                   class="modal-title-1 text-dark fs-6"
//                   id="staticBackdropLabel"
//                 >
//                   Choose network
//                 </h5>
//                 <button
//                   type="button"
//                   class="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div class="modal-body">
//                 <div className="container">
//                   <div className="row pt-3 d-flex justify-content-between">
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc1} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Ethereum</p>
//                       </div>
//                     </div>
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc2} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">BNB Smart Chain</p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* second row  */}
//                   <div className="row pt-3 d-flex justify-content-between">
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc3} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Matic(Polygon)</p>
//                       </div>
//                     </div>
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc4} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Avalanche</p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* third row  */}
//                   <div className="row pt-3 d-flex justify-content-between">
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc5} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Fantom Opera</p>
//                       </div>
//                     </div>
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc6} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Cronos</p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* forth row */}
//                   <div className="row pt-3 d-flex justify-content-between">
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc7} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">DogeChain</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-start pt-3 color_testing">
//                     <p className="">Testing</p>
//                   </div>
//                   <div className="row  d-flex justify-content-between">
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc2} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">BNB Smart Chain</p>
//                       </div>
//                     </div>
//                     <div className="col-6 border_main_ETH">
//                       <div className="">
//                         <img src={bnc3} alt="" width="40px" />
//                       </div>
//                       <div>
//                         <p className="">Matic(Polygon)</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <button
//           className="btn button_nav text-dark me-2 d-flex align-items-center "
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//         >
//           {" "}
//           <img src={bnc1} className="pe-0 pe-md-1 img_width" alt="" />
//           <span className="font_size_eth d-none d-md-flex">ETH MAINNET</span>
//         </button>
//         <button
//           className="btn  font_size_connect"
//           data-bs-toggle="modal"
//           data-bs-target="#staticBackdrop"
//         >
//           Connect
//         </button>
//       </Typography>
//     </div>
//   );
// }

// export default Modal_connect;

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import mata from "../Assets/mata mask.svg";
import mata1 from "../Assets/trust.svg";
import mata2 from "../Assets/wallet.svg";
import mata3 from "../Assets/coinbase.png";
import mata4 from "../Assets/safepal.jpg";
import mata5 from "../Assets/token.png";
import mata6 from "../Assets/math.png";
import { useSelector, useDispatch } from "react-redux";

import mata7 from "../Assets/install.png";
import { connectWallet } from "../../features/pinksale/pinksaleSlice";
function Modal_connect() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showconnect, setShowConnect] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const walletaddress = useSelector((state) => state.pinksale.walletaddress);
  useEffect(() => {
    if (walletaddress.length > 20) {
      setShowConnect(true);
    } else if (walletaddress == "Wrong Network") {
      setShowConnect(false);
    } else if (walletaddress == "No Wallet") {
      setShowConnect(false);
    }
  }, [walletaddress]);

  return (
    <div className="model_flex">
      <Button variant="" className="font_size_connect" onClick={handleShow}>
        {showconnect ? (
          <div>{`${walletaddress.slice(0, 6)} ...${walletaddress.slice(
            walletaddress.length - 6
          )}`}</div>
        ) : (
          "Connect"
        )}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model_tital_bnb">
            {" "}
            Connect to a wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-center">
            <div className="row pt-3">
              <div
                className="col-6 mata_hover"
                onClick={() => {
                  dispatch(connectWallet());
                  handleClose();
                }}
              >
                <div>
                  <img src={mata} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">MataMask</p>
              </div>
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata1} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">TrustWallet</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata2} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">WalletConnect</p>
              </div>
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata3} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">Coinbase Wallet</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata4} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">SafePal Wallet</p>
              </div>
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata5} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">TokenPocket</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata6} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">Math Wallet</p>
              </div>
              <div className="col-6 mata_hover">
                <div>
                  <img src={mata7} width="15%" className="mata_img" alt="" />
                </div>
                <p className="mata_text">Install BitKeep</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modal_connect;
