import React, { useState } from "react";
import "./Creatlock.css";
import Form from "react-bootstrap/Form";
// import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";

function Creatlock() {
  const [show, setShow] = useState(false);

  const createLockScheme = Yup.object().shape({
    tokenAddress: Yup.string("'EntermIL")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required(),
    // ownerAddress: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    // title: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    // amount: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("amount is a required field"),
    // date: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Unlock time need to be after now"),
    // date1: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("TGE Date needs to be after now"),
    // tgePercent: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("TGE Percent can not be blank"),
    // cycleDays: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Cycle can not be blank"),
    // cycleReleasePercent: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Cycle Release Percent can not be blank"),
    // email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      tokenAddress: "",
      ownerAddress: "",
      title: "",
      amount: "",
      date: "",
      date1: "",
      tgePercent: "",
      cycleDays: "",
      cycleReleasePercent: "",
    },
    validationSchema: createLockScheme,
    onSubmit: (values) => {
      // same shape as initial values
      console.log(values);
      callAPI(values);
    },
  });

  const callAPI = (values) => {
    // if (values.tokenAddress.length > 3) {
    //call web3
    formik.setErrors({ tokenAddress: "Invalid Address" });
    // }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 bg-light py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 bg-white">
              <div className="text-start fw-bold mt-4 border-bottom pb-4">
                Create your lock
              </div>
              <div className="my-4">
                <form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="text-start aFtr_sty">
                      <Form.Label>
                        Token or LP Token address{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      name="tokenAddress"
                      placeholder="Enter token or PL token address"
                      onChange={formik.handleChange}
                      value={formik.values.tokenAddress}
                      className="hovr_clr"
                    />
                    {console.log("formik.errors", formik.errors)}
                    {console.log("formik.errors", formik)}
                    <div className="text-start">
                      {formik.errors.tokenAddress && (
                        <Form.Text className="text-danger">
                          {formik.errors.tokenAddress}
                        </Form.Text>
                      )}
                    </div>
                    <Form.Group
                      className="my-3"
                      controlId="formBasicCheckbox"
                      onClick={() => setShow(!show)}
                    >
                      <Form.Check
                        type="checkbox"
                        label={
                          <span className="apna ">use another owner?</span>
                        }
                        className="text-start hovr_clr"
                      />
                    </Form.Group>
                  </Form.Group>

                  <div className={`${show ? "d-block" : "d-none"}`}>
                    <div className="text-start aFtr_sty">
                      <Form.Label>Owner</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      name="ownerAddress"
                      placeholder="Enter your address "
                      className="hovr_clr"
                    />
                    <div className="text-start">
                      <Form.Text className="text-primary">
                        the address you input here will be receive the tokens
                        once they are unlocked
                      </Form.Text>{" "}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="text-start aFtr_sty">
                      <Form.Label>Title</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Ex:My Lock"
                      className="hovr_clr"
                    />

                    <div className="text-start mt-3 aFtr_sty">
                      <Form.Label>
                        Amount <span className="text-danger">*</span>
                      </Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      name="amount"
                      placeholder="Enter amount"
                      className="hovr_clr"
                    />
                    <div className="text-start">
                      <Form.Text className="text-danger">
                        amount is a required field
                      </Form.Text>{" "}
                    </div>
                  </div>

                  <Form.Group className="my-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={<span className="apna">use vesting?</span>}
                      className="text-start"
                    />
                  </Form.Group>

                  <div className="">
                    <div className="text-start mt-3 aFtr_sty">
                      <Form.Label>
                        Lock until (UTC time)
                        <span className="text-danger">*</span>
                      </Form.Label>
                    </div>
                    <Form.Control
                      type="date"
                      name="date"
                      placeholder="Select date"
                      className="hovr_clr"
                    />
                    <div className="text-start">
                      <Form.Text className="text-danger">
                        Unlock time need to be after now
                      </Form.Text>{" "}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="text-start mt-3 aFtr_sty">
                        <Form.Label>
                          Lock until (UTC time)
                          <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="date"
                        name="date1"
                        placeholder="Select date"
                        className="hovr_clr"
                      />
                      <div className="text-start">
                        <Form.Text className="text-danger">
                          TGE Date needs to be after now
                        </Form.Text>{" "}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-start mt-3 aFtr_sty">
                        <Form.Label>
                          TGE Percent <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="number"
                        name="tgePercent"
                        placeholder="Ex:10"
                        className="hovr_clr"
                      />
                      <div className="text-start">
                        <Form.Text className="text-danger">
                          TGE Percent can not be blank
                        </Form.Text>{" "}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="text-start mt-3 aFtr_sty">
                        <Form.Label>
                          Cycle days (days)
                          <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="number"
                        name="cycleDays"
                        placeholder="Ex:10"
                        className="hovr_clr"
                      />
                      <div className="text-start">
                        <Form.Text className="text-danger">
                          Cycle can not be blank
                        </Form.Text>{" "}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="text-start mt-3 aFtr_sty">
                        <Form.Label>
                          Cycle Release Percent
                          <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="number"
                        name="cycleReleasePercent"
                        placeholder="Ex:10"
                        className="hovr_clr"
                      />
                      <div className="text-start">
                        <Form.Text className="text-danger">
                          Cycle Release Percent can not be blank
                        </Form.Text>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-start rounder yelo_box">
                    <span>
                      Please exclude PinkLock's lockup address
                      0x407993575c91ce7643a4d4 from fees, rewards, max tx amount
                      to start locking tokens. <br /> We don't support rebase
                      tokens.
                    </span>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-small loc_buttn">
                      Lock
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-8">
              <p>
                Disclaimer: The information provided shall not in any way
                constitute a recommendation as to whether you should invest in
                any product discussed. We accept no liability for any loss
                occasioned to any person acting or refraining from action as a
                result of any material provided or published.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creatlock;
