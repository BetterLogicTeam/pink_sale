import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import "./Create_private_sale.css";
import "./Lauchpad.css";
import Form from "react-bootstrap/Form";
import { BiImage } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { ImReddit } from "react-icons/im";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  pinkSaleLockContract,
  pinkSaleLockAbi,
  tokenAbi,
  tokenAdress,
  PinkSaleICOFactoryContractAddress,
} from "../../utilies/Contract";
import { loadWeb3 } from "../../connectivity/connectivity";
import { useState } from "react";
import moment from "moment";

const steps = [
  {
    title: "Before you start",
    dis: "Input your awesome title and choose the currency",
  },

  // {
  //   title: "Add Additional Info",
  //   dis: "Let people know who you are",
  // },
  {
    title: "Finish",
    dis: "Review your information",
  },
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [showtokeninfo, setshowtokeninfo] = React.useState(false);
  const [tokenInfo, setTokenInfo] = React.useState("");
  const [validate, setValidate] = useState(true);
  const [getInputdata, setgetInputdata] = useState();
  const myhandle = async (e, formikData) => {
    formik.setValues({
      tokenAddress: formikData.tokenAddress,
      currency: e,
      exchangeRate: formikData.exchangeRate,
      startTime: formikData.startTime,
      endTime: formikData.endTime,
      totalSupply: formikData.totalSupply,
    });
  };
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const mySchema = Yup.object().shape({
  //   tokenAddress: Yup.string().required("tokenAddress is a required field"),

  //   // tokenAddress: Yup.string().required("Token Address is a required field"),
  //   exchangeRate: "Please enter exchange rate",
  //   // amount: Yup.string().required("amount is a required field"),
  //   // date: Yup.date()
  //   //   .required("Unlock time need to be after now")
  //   //   .min(new Date(), "date must be greater then current date"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     tokenAddress: "",
  //     currency: "",
  //     exchangeRate: "",
  //   },
  //   validationSchema: mySchema,

  //   onSubmit: async (values, action) => {
  //     // await callAPI(values);
  //     // action.resetForm();
  //   },
  // });

  const createLaunchpadSchema = Yup.object().shape({
    tokenAddress: Yup.string().required("tokenAddress is a required field"),

    exchangeRate: Yup.number()
      .min(1, "please enter value greater then 0")
      .required("exchange rate is required"),
    totalSupply: Yup.number()
      .min(0, "please enter value in positive")
      .required("Total Supply is required to create ICO"),

    amount: Yup.string().required("amount is a required field"),
    startTime: Yup.date()
      .required("Must Enter Start time")
      .min(new Date(), "date must be greater then current date"),
    endTime: Yup.date()
      .required("Must enter end time")
      .min(Yup.ref("startTime"), "end date can't be before start date"),
    // "end date can't be before start date"
    // .min(new Date(), "date must be greater then current date"),
  });

  const formik = useFormik({
    initialValues: {
      tokenAddress: "",
      currency: "BNB",
      exchangeRate: "",
      totalSupply: "",
      amount: "",
      startTime: "",
      endTime: "",
      useAnotherOwner: false,
      tokenerror: "",

      //   date1: "",
      //   tgePercent: "",
      //   cycleDays: "",
      //   cycleReleasePercent: "",
    },
    validationSchema: createLaunchpadSchema,

    onSubmit: async (values, action) => {
      await createLaunchpad(values);
    },
  });

  const valid = async (e) => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    let _addressStatus;
    const _address = e.target.value;
    // console.log("_address", web3.utils.isAddress(_address));

    if (web3.utils.isAddress(_address)) {
      try {
        _addressStatus = await web3.eth.getCode(_address);
      } catch (error) {
        console.log(error.message);
      }

      let obj = {};
      if (_addressStatus === "0x") {
        setshowtokeninfo(false);

        setValidate(false);

        formik.setErrors({
          tokenAddress: "Invalid Address",
        });
      } else {
        setgetInputdata(e.target.value);
        sessionStorage.setItem("token_Address", e.target.value);
        let pinkSaleToken = new web3.eth.Contract(tokenAbi, _address);
        let tokenName, tokenSymbol, tokenDecimal, tokenBalance;
        tokenName = await pinkSaleToken.methods.name().call();
        tokenSymbol = await pinkSaleToken.methods.symbol().call();
        tokenDecimal = await pinkSaleToken.methods.decimals().call();
        tokenBalance = await pinkSaleToken.methods.balanceOf(acc).call();

        tokenBalance = web3.utils.fromWei(tokenBalance);
        obj.tokenName = tokenName;
        obj.tokenSymbol = tokenSymbol;
        obj.tokenDecimal = tokenDecimal;
        obj.tokenBalance = tokenBalance;
        console.log("_addressStatus", obj);

        setshowtokeninfo(true);
      }
      setTokenInfo({ ...obj });

      // console.log("obj", obj);
    } else {
      setshowtokeninfo(false);

      setValidate(false);

      // formik.setErrors({
      //   tokenAddress: "Invalid Address",
      // });
    }
  };

  const handleTotalSupply = async (e) => {
    let totalSupply = e.target.value;

    if (!(totalSupply <= tokenInfo.tokenBalance)) {
      setTimeout(() => {
        formik.setErrors({
          totalSupply: `totalSupply must be less or equal to token balance`,
        });
      }, 500);
      formik.handleChange(e);
    } else {
      formik.handleChange(e);
    }
  };

  const createLaunchpad = async (values) => {
    alert("fraz");
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }} className="box_back_color pt-1 ">
      <Stepper activeStep={activeStep} className="d-none d-md-flex my-5">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <span className="text-white">{label.title}</span>
              </StepLabel>
              <span className="text-white "> {label.dis}</span>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep == 0 ? (
            <>
              <div className="container ">
                <div className="row justify-content-center  ">
                  <div className="col-lg-10 border mt-5 color_of_back_ground box_shadow">
                    <Form className="my-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="text-start for_fnt">
                          <p className="text-danger">(*) it reruired fields</p>

                          <Form.Label>Token address*</Form.Label>
                        </div>
                        {console.log("formik today", formik)}
                        <Form.Control
                          type="text"
                          name="tokenAddress"
                          value={formik.values.tokenAddress}
                          onChange={(e) => {
                            formik.handleChange(e);
                            valid(e);
                          }}
                          placeholder="Ex: This is my private sale"
                          className="input_flied_of_pink"
                        />
                        <div className="text-start">
                          {formik.errors.tokenAddress && (
                            <Form.Text className="text-danger">
                              {formik.errors.tokenAddress}
                            </Form.Text>
                          )}
                        </div>
                        <div className="text-start ">
                          <Form.Text className="pool_edt ">
                            Pool creation fee: 0.01 BNB
                          </Form.Text>
                        </div>
                      </Form.Group>
                      {showtokeninfo ? (
                        <>
                          <ul class="list-group list-group-flush ">
                            <li class="list-group-item d-flex justify-content-between align-items-center fs_14">
                              Name
                              <span className=" fs_14">
                                {tokenInfo.tokenName}
                              </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center fs_14">
                              Symbol
                              <span className="fs_14">
                                {tokenInfo.tokenSymbol}
                              </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center fs_14">
                              Deimals
                              <span className="fs_14">
                                {tokenInfo.tokenDecimal}
                              </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center fs_14">
                              Balance
                              <span className=" fs_14">
                                {tokenInfo.tokenBalance}
                              </span>
                            </li>
                          </ul>
                        </>
                      ) : (
                        ""
                      )}
                      {/* <div className="name_symbal ">
                        <div className="d-flex justify-content-between border-bottom">
                          <p>Name</p>
                          <p>JWDToken</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom pt-3">
                          <p>Symbol</p>
                          <p>JWD</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom pt-3">
                          <p>Decimals</p>
                          <p>18</p>
                        </div>
                      </div> */}

                      <div className="currency_box mt-2">
                        <div className="text-start pt-4">
                          <p className="fw-bold">Currency</p>
                        </div>
                        <div className="chek_box">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="BNB"
                              name="currency"
                              defaultChecked={formik.values.currency === "BNB"}
                              onChange={(e) => myhandle("BNB", formik.values)}
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              BNB
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="BUSD"
                              name="currency"
                              // checked={formik.values.currency === "BUSD"}
                              onChange={(e) => myhandle("BUSD", formik.values)}
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              BUSD
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="USDT"
                              name="currency"
                              // checked={formik.values.currency === "USDT"}
                              onChange={(e) => myhandle("USDT", formik.values)}
                              id="flexRadioDefault2"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault2"
                            >
                              USDT
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value="USDC"
                              name="currency"
                              // checked={formik.values.currency === "USDC"}
                              onChange={(e) => myhandle("USDC", formik.values)}
                              id="flexRadioDefault2"
                            />

                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault2"
                            >
                              USDC
                            </label>
                          </div>
                        </div>
                        {/* <div className="text-start ">
                          <Form.Text className="pool_edt">
                            Users will pay with BNB for your token
                          </Form.Text>
                        </div> */}
                      </div>
                      {/* <div>
                        <div className="opentin pt-4">
                          <p className="fw-bold">Fee options</p>
                          <div class=" text-start">
                            5% BNB raised only (Recommended)
                          </div>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="mt-4 text-start col-lg-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <div className="text-start for_fnt">
                              <Form.Label>Exchange rate *</Form.Label>
                            </div>
                            <Form.Control
                              type="number"
                              className="input input_flied_of_pink"
                              placeholder="0"
                              autoComplete="on"
                              name="exchangeRate"
                              value={formik.values.exchangeRate}
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                            />
                            <div className="text-start">
                              {formik.errors.exchangeRate && (
                                <Form.Text className="text-danger">
                                  {formik.errors.exchangeRate}
                                </Form.Text>
                              )}
                            </div>
                            <label
                              className="form-check-label pool_edt crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              If user spend 1 {`${formik.values.currency}`} how
                              many tokens will user receive ?
                            </label>
                          </Form.Group>
                        </div>
                        <div className="mt-4 text-start col-lg-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <div className="text-start for_fnt">
                              <Form.Label>Total Supply *</Form.Label>
                            </div>
                            <Form.Control
                              type="number"
                              className="input input_flied_of_pink"
                              placeholder="0"
                              autoComplete="on"
                              name="totalSupply"
                              value={formik.values.totalSupply}
                              onChange={async (e) => {
                                handleTotalSupply(e);
                              }}
                            />
                            <div className="text-start">
                              {formik.errors.totalSupply && (
                                <Form.Text className="text-danger">
                                  {formik.errors.totalSupply}
                                </Form.Text>
                              )}
                            </div>
                            <label
                              className="form-check-label pool_edt crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              How much supply will be transfered to ICO
                              contract?
                            </label>
                          </Form.Group>
                        </div>
                      </div>

                      <div className="pb-3">
                        <div className="row mt-3">
                          <div className="text-start for_fnt">
                            <Form.Label>
                              Select start time & end time (UTC)
                            </Form.Label>
                          </div>
                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              {/* {console.log("dirty", formik)} */}
                              <div className="text-start for_fnt">
                                <Form.Label>Start time (UTC)</Form.Label>
                              </div>
                              {console.log("date", formik.values.date)}
                              <Form.Control
                                type="datetime-local"
                                name="startTime"
                                className="input input_flied_of_pink"
                                placeholder="Select date"
                                autoComplete="on"
                                onChange={formik.handleChange}
                                value={formik.values.startTime}
                                // Value={formik?.values?.date?.toString()}
                                // defaultValue={formik?.values?.date?.toString()}
                              />
                              <div className="text-start">
                                {formik.errors.startTime && (
                                  <Form.Text className="text-danger">
                                    {formik.errors.startTime}
                                  </Form.Text>
                                )}
                              </div>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>End time (UTC)</Form.Label>
                              </div>
                              <Form.Control
                                type="datetime-local"
                                className="input input_flied_of_pink"
                                placeholder="Select date"
                                autoComplete="on"
                                name="endTime"
                                onChange={formik.handleChange}
                                value={formik.values.endTime}
                              />
                              <div className="text-start">
                                {formik.errors.endTime && (
                                  <Form.Text className="text-danger">
                                    {formik.errors.endTime}
                                  </Form.Text>
                                )}
                              </div>
                            </Form.Group>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          onClick={handleNext}
                          type="button"
                          className="btn btn-sm  m-auto loc_buttn_nex_back"
                          disabled={
                            !formik.dirty ||
                            formik.errors.totalSupply ||
                            formik.errors.endTime ||
                            formik.errors.startTime ||
                            formik.errors.exchangeRate ||
                            formik.errors.tokenAddress
                          }
                        >
                          Next
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </>
          ) : // ) : activeStep == 1 ? (
          //   <>
          //     <div className="container">
          //       <div className="row justify-content-center">
          //         <div className="col-lg-10  border mt-5 color_of_back_ground box_shadow">
          //           <Form className="my-3">
          //             <div className="currency_box mt-2">
          //               <div className="text-start for_fnt">
          //                 <Form.Label>Whitelist</Form.Label>
          //               </div>
          //               <div className="chek_box_tow d-flex">
          //                 <div class="form-check">
          //                   <input
          //                     class="form-check-input"
          //                     type="radio"
          //                     name="flexRadioDefault"
          //                     id="flexRadioDefault1"
          //                   />
          //                   <label
          //                     class="form-check-label crnc d-flex justify-content-start"
          //                     for="flexRadioDefault1"
          //                   >
          //                     Disable
          //                   </label>
          //                 </div>
          //                 <div class="form-check">
          //                   <input
          //                     class="form-check-input"
          //                     type="radio"
          //                     name="flexRadioDefault"
          //                     id="flexRadioDefault2"
          //                   />
          //                   <label
          //                     class="form-check-label crnc d-flex justify-content-start"
          //                     for="flexRadioDefault2"
          //                   >
          //                     Enable
          //                   </label>
          //                 </div>
          //               </div>
          //               <div className="text-start">
          //                 <Form.Text className="pool_edt_tow ">
          //                   You can enable/disable whitelist anytime
          //                 </Form.Text>
          //               </div>
          //             </div>
          //             <div className="main_form_box mt-3">
          //               <div className="row">
          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>Softcap (ETH)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Ex:10"
          //                       autoComplete="on"

          //                     />
          //                     <div className="text-start ">
          //                       <Form.Text className="pool_edt">
          //                         Softcap must be = 50% of Hardcap!
          //                       </Form.Text>
          //                     </div>
          //                   </Form.Group>
          //                 </div>

          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>HardCap (ETH)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Ex:10"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>

          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>Minimum buy (ETH)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="0.1 ETH"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>

          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>Maximum buy (ETH)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="0.2 ETH"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>
          //               </div>

          //               <div className="row mt-3">
          //                 <div className="text-start for_fnt">
          //                   <Form.Label>
          //                     Select start time & end time (UTC)
          //                   </Form.Label>
          //                 </div>
          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>Start time (UTC)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="datetime-local"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Select date"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>

          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>End time (UTC)</Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="datetime-local"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Select date"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>
          //               </div>

          //               <div className="row">
          //                 <div className="col-lg-12">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>
          //                         First Fund Release For Project (%)
          //                       </Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Ex: 40%"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>
          //               </div>

          //               <div className="row mt-3">
          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>
          //                         Fund Vesting Period Each Cycle (days)
          //                       </Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Enter (days). Ex: 3"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>

          //                 <div className="col-lg-6">
          //                   <Form.Group
          //                     className="mb-3"
          //                     controlId="formBasicEmail"
          //                   >
          //                     <div className="text-start for_fnt">
          //                       <Form.Label>
          //                         Fund Release Each Cycle (percent)
          //                       </Form.Label>
          //                     </div>
          //                     <Form.Control
          //                       type="number"
          //                       className="input input_flied_of_pink"
          //                       placeholder="Ex: 20%"
          //                       autoComplete="on"

          //                     />
          //                   </Form.Group>
          //                 </div>
          //               </div>

          //               <div className="main_tow_bbtn d-flex justify-content-center">
          //                 <button
          //                   type="button"
          //                   className="btn btn-sm  mt-3 me-3 loc_buttn_nex_back"
          //                   onClick={handleBack}
          //                 >
          //                   Back
          //                 </button>
          //                 <button
          //                   type="button"
          //                   className="btn btn-sm  mt-3 loc_buttn_nex_back"
          //                   onClick={handleNext}
          //                 >
          //                   Next
          //                 </button>
          //               </div>
          //             </div>
          //           </Form>
          //         </div>
          //       </div>
          //     </div>
          //   </>
          activeStep == 5 ? (
            <>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 color_of_back_ground box_shadow border mt-5">
                    <Form className="my-3">
                      <div className="main_form_box mt-3">
                        <div className="row">
                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Logo URL</Form.Label>
                              </div>
                              <BiImage className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://..."
                                autoComplete="on"
                              />
                              <div className="text-start ">
                                <Form.Text className="pool_edt">
                                  URL must end with a supported image extension
                                  png, jpg, jpeg or gif. You can upload your
                                  image at{" "}
                                  <a
                                    href="https://upload.pinksale.finance/ "
                                    className="text-decoration-none third_frm_lk"
                                    target="_blank"
                                  >
                                    https://upload.pinksale.finance/
                                  </a>
                                </Form.Text>
                              </div>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Website</Form.Label>
                              </div>
                              <TbWorld className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Facebook</Form.Label>
                              </div>
                              <CiFacebook className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://facebook.com/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Twitter</Form.Label>
                              </div>
                              <RiTwitterLine className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://twitter.com/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Github</Form.Label>
                              </div>
                              <FiGithub className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://github.com/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Telegram</Form.Label>
                              </div>
                              <FaTelegramPlane className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://t.me/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Instagram</Form.Label>
                              </div>
                              <AiOutlineInstagram className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://instagram.com/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Discord</Form.Label>
                              </div>
                              <BsDiscord className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://t.me/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Reddit</Form.Label>
                              </div>
                              <ImReddit className="icon_cls" />
                              <Form.Control
                                type="url"
                                className="url_input input_flied_of_pink input_flied_of_pinks"
                                placeholder="Ex: https://Reddit.com/..."
                                autoComplete="on"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-12 pt-3">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Description</Form.Label>
                              </div>
                              <textarea
                                name="description"
                                id="description"
                                placeholder="Ex: This is the best project..."
                                cols="30"
                                rows="5"
                                className="text_ara input_flied_of_pink"
                              ></textarea>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="main_tow_bbtn d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-sm  mt-3 me-3 loc_buttn_nex_back"
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm  mt-3 loc_buttn_nex_back"
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </>
          ) : activeStep == 1 ? (
            <>
              <div className="container">
                <div className="row justify-content-center">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="col-lg-10 color_of_back_ground box_shadow text-white border mt-5">
                      <table class="table">
                        <tbody>
                          <tr className="">
                            <td className="text-start clc_fr_size">
                              Total Supply
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_color">
                              {formik.values.totalSupply} JWD
                            </td>
                          </tr>
                          <tr className="">
                            <td className="text-start clc_fr_size">
                              Factory Address
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu ">
                              <a
                                href={`https://testnet.bscscan.com/address/${PinkSaleICOFactoryContractAddress}`}
                                target="_blank"
                              >
                                {PinkSaleICOFactoryContractAddress}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start clc_fr_size">
                              Token name
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu">
                              {tokenInfo.tokenName}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start clc_fr_size">
                              Token symbol
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu">
                              {tokenInfo.tokenSymbol}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start clc_fr_size">
                              Token decimals
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu">
                              {tokenInfo.tokenDecimal}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start clc_fr_size">
                              Start time
                            </td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu">
                              {formik.values.startTime}(UTC)
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start clc_fr_size">Time end</td>
                            <td></td>
                            <td></td>
                            <td className="text-end clc_fr_blu">
                              {formik.values.endTime} (UTC)
                            </td>
                          </tr>
                          {/* <tr>
                          <td className="text-start clc_fr_size">Website</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">
                            https://photos.pinksale.finance/file/pinksale-logo-upload/1673441258678-449fc65d8fb1ca37799fece99e750623.jpg
                          </td>
                        </tr> */}
                        </tbody>
                      </table>

                      <div></div>
                      <div className="main_tow_bbtn d-flex justify-content-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-sm  mt-3 me-3 loc_buttn_nex_back"
                          onClick={handleBack}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm  mt-3 loc_buttn_nex_back"
                          onClick={createLaunchpad}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            "step 03"
          )}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Stggep {activeStep}</Typography> */}

          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
          <div className="">
            <p className="w-75 m-auto py-5 text-start text-md-center">
              Disclaimer: The information provided shall not in any way
              constitute a recommendation as to whether you should invest in any
              product discussed. We accept no liability for any loss occasioned
              to any person acting or refraining from action as a result of any
              material provided or published.
            </p>
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
