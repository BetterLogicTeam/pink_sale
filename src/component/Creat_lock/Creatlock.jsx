import React, { useState } from 'react'
import "./Creatlock.css"
import Form from 'react-bootstrap/Form';

function Creatlock() {
const [show, setShow] = useState(false)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-md-12 bg-light py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 bg-white">
                            <div className='text-start fw-bold mt-4 border-bottom pb-4'>Create your lock</div>
                            <div className='my-4'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <div className='text-start aFtr_sty'>
                                            <Form.Label>Token or LP Token address <span className='text-danger'>*</span></Form.Label></div>
                                        <Form.Control type="text" placeholder="Enter token or PL token address" className='hovr_clr' />
                                        <div className='text-start'><Form.Text className="text-danger">Invalid address</Form.Text> </div>
                                        <Form.Group className="my-3" controlId="formBasicCheckbox" onClick={()=>setShow(!show)}>
                                            <Form.Check type="checkbox" label={<span className='apna '>use another owner?</span>} className="text-start hovr_clr" />
                                        </Form.Group>
                                    </Form.Group>

                                    <div className={`${show ? "d-block" : "d-none"}`}>
                                        <div className='text-start aFtr_sty'><Form.Label>Owner</Form.Label></div>
                                        <Form.Control type="text" placeholder="Enter your address " className='hovr_clr'/>
                                        <div className='text-start'><Form.Text className="text-primary">the address you input here will be receive the tokens once they are unlocked</Form.Text> </div>
                                    </div>

                                    <div className='mt-3'>
                                        <div className='text-start aFtr_sty'><Form.Label>Title</Form.Label></div>
                                        <Form.Control type="text" placeholder="Ex:My Lock" className='hovr_clr' />

                                        <div className='text-start mt-3 aFtr_sty'><Form.Label>Amount <span className='text-danger'>*</span></Form.Label></div>
                                        <Form.Control type="text" placeholder="Enter amount" className='hovr_clr'/>
                                        <div className='text-start'><Form.Text className="text-danger">amount is a required field</Form.Text> </div>
                                    </div>

                                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label={<span className='apna'>use vesting?</span>} className="text-start" />
                                    </Form.Group>

                                    <div className=''>
                                        <div className='text-start mt-3 aFtr_sty'><Form.Label>Lock until (UTC time)<span className='text-danger'>*</span></Form.Label></div>
                                        <Form.Control type="date" placeholder="Select date" className='hovr_clr' />
                                        <div className='text-start'><Form.Text className="text-danger">Unlock time need to be after now</Form.Text> </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className='text-start mt-3 aFtr_sty'><Form.Label>Lock until (UTC time)<span className='text-danger'>*</span></Form.Label></div>
                                            <Form.Control type="date" placeholder="Select date" className='hovr_clr' />
                                            <div className='text-start'><Form.Text className="text-danger">TGE Date needs to be after now</Form.Text> </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='text-start mt-3 aFtr_sty'><Form.Label>TGE Percent <span className='text-danger'>*</span></Form.Label></div>
                                            <Form.Control type="number" placeholder="Ex:10" className='hovr_clr'/>
                                            <div className='text-start'><Form.Text className="text-danger">TGE Percent can not be blank</Form.Text> </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className='text-start mt-3 aFtr_sty'><Form.Label>Cycle days (days)<span className='text-danger'>*</span></Form.Label></div>
                                            <Form.Control type="number" placeholder="Ex:10" className='hovr_clr' />
                                            <div className='text-start'><Form.Text className="text-danger">Cycle can not be blank</Form.Text> </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className='text-start mt-3 aFtr_sty'><Form.Label>Cycle Release Percent<span className='text-danger'>*</span></Form.Label></div>
                                            <Form.Control type="number" placeholder="Ex:10" className='hovr_clr' />
                                            <div className='text-start'><Form.Text className="text-danger">Cycle Release Percent can not be blank</Form.Text> </div>
                                        </div>
                                    </div>

                                    <div className='mt-4 text-start rounder yelo_box'>
                                        <span>Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4 from fees, rewards, max tx amount to start locking tokens. <br /> We don't support rebase tokens.</span>
                                    </div>

                                    <div className='mt-4'>
                                        <button  className='btn btn-small loc_buttn'>Lock</button>
                                    </div>


                                </Form>
                            </div>

                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-lg-8">
                            <p>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creatlock