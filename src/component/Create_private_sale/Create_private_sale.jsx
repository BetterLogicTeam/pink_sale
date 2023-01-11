import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Create_private_sale.css";
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

const steps = [
  {
    title: "Before you start",
    dis: "Input your awesome title and choose the currency",
  },
  {
    title: "Private Sale",
    dis: "Enter the launchpad information that you want to raise , that should be enter all details about your presale",
  },
  {
    title: "Add Additional Info",
    dis: "Let people know who you are",
  },
  {
    title: "Finish",
    dis: "Review your information",
  },
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

  return (
    <Box sx={{ width: "100%" }} className="box_back_color">
      <Stepper activeStep={activeStep} className="d-none d-md-flex">
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
              <StepLabel {...labelProps}>{label.title}</StepLabel>
              <span className=""> {label.dis}</span>
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
              <div className="container">
                <div className="row justify-content-center  ">
                  <div className="col-lg-10 bg-white border mt-5">
                    <Form className="my-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="text-start for_fnt">
                          <Form.Label>Title</Form.Label>
                        </div>
                        <Form.Control
                          type="email"
                          placeholder="Ex: This is my private sale"
                        />
                        <div className="text-start ">
                          <Form.Text className="pool_edt">
                            Pool creation fee: 0.2 ETH
                          </Form.Text>
                        </div>
                      </Form.Group>

                      <div className="currency_box mt-2">
                        <div className="text-start for_fnt">
                          <Form.Label>Currency</Form.Label>
                        </div>
                        <div className="chek_box">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              ETH
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault2"
                            >
                              USDH
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
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
                        <div className="text-start ">
                          <Form.Text className="pool_edt">
                            Users will pay with ETH for your token
                          </Form.Text>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={handleNext}
                          type="button"
                          className="btn btn-sm cp_fr_bttn m-auto"
                        >
                          Next
                        </button>
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
                  <div className="col-lg-10 bg-white border mt-5">
                    <Form className="my-3">
                      <div className="currency_box mt-2">
                        <div className="text-start for_fnt">
                          <Form.Label>Whitelist</Form.Label>
                        </div>
                        <div className="chek_box_tow d-flex">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault1"
                            >
                              Disable
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              class="form-check-label crnc d-flex justify-content-start"
                              for="flexRadioDefault2"
                            >
                              Enable
                            </label>
                          </div>
                        </div>
                        <div className="text-start">
                          <Form.Text className="pool_edt_tow ">
                            You can enable/disable whitelist anytime
                          </Form.Text>
                        </div>
                      </div>
                      <div className="main_form_box mt-3">
                        <div className="row">
                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Softcap (ETH)</Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="Ex:10"
                                autoComplete="on"
                                value=""
                              />
                              <div className="text-start ">
                                <Form.Text className="pool_edt">
                                  Softcap must be = 50% of Hardcap!
                                </Form.Text>
                              </div>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>HardCap (ETH)</Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="Ex:10"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Minimum buy (ETH)</Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="0.1 ETH"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Maximum buy (ETH)</Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="0.2 ETH"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>
                        </div>

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
                              <div className="text-start for_fnt">
                                <Form.Label>Start time (UTC)</Form.Label>
                              </div>
                              <Form.Control
                                type="datetime-local"
                                className="input"
                                placeholder="Select date"
                                autoComplete="on"
                                value=""
                              />
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
                                className="input"
                                placeholder="Select date"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>
                                  First Fund Release For Project (%)
                                </Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="Ex: 40%"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>
                                  Fund Vesting Period Each Cycle (days)
                                </Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="Enter (days). Ex: 3"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>
                                  Fund Release Each Cycle (percent)
                                </Form.Label>
                              </div>
                              <Form.Control
                                type="number"
                                className="input"
                                placeholder="Ex: 20%"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="main_tow_bbtn d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3 me-3"
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3"
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
          ) : activeStep == 2 ? (
            <>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 bg-white border mt-5">
                    <Form className="my-3">
                      <div className="main_form_box mt-3">
                        <div className="row">
                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://..."
                                autoComplete="on"
                                value=""
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

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://facebook.com/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://twitter.com/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://github.com/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://t.me/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://instagram.com/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
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
                                className="url_input"
                                placeholder="Ex: https://t.me/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
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
                                className="url_input"
                                placeholder="Ex: https://Reddit.com/..."
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-12">
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <div className="text-start for_fnt">
                                <Form.Label>Youtube Video</Form.Label>
                              </div>
                              <Form.Control
                                type="url"
                                className="input"
                                placeholder="Ex: https://www.youtube.com/watch?v=xxxxxxxxx"
                                autoComplete="on"
                                value=""
                              />
                            </Form.Group>
                          </div>

                          <div className="col-lg-12">
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
                                className="text_ara"
                              ></textarea>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="main_tow_bbtn d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3 me-3"
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3"
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
          ) : activeStep == 3 ? (
            <>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 bg-white border mt-5">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td className="text-start clc_fr_size">Title</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_color">Haider</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">
                            Sale method
                          </td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu ">Public</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Softcap</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">1 ETH</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Hardcap</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">2 ETH</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">
                            Minimum buy
                          </td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">1 ETH</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">
                            Maximum buy
                          </td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">2 ETH</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Fund TGE</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">40%</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Fund Cycle</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">10 Days</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">
                            Fund Release Each Cycle
                          </td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">20%</td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Start time</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">
                            2023-01-12T10:41 (UTC)
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">End time</td>
                          <td></td>
                          <td></td>
                          <td className="text-end clc_fr_blu">
                            2023-01-24T14:46 (UTC)
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start clc_fr_size">Website</td>
                          <td></td>
                          <td></td>
                          <td className="text-end frr_brk">
                            <a
                              href=""
                              className="text-decoration-none clc_fr_color"
                            >
                              https://photos.pinksale.finance/file/pinksale-logo-upload/1673441258678-449fc65d8fb1ca37799fece99e750623.jpg
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="main_tow_bbtn d-flex justify-content-center mb-4">
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3 me-3"
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm cp_fr_bttn mt-3"
                            // onClick={handleNext}
                          >
                            Submit
                          </button>
                        </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            "step 04"
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
