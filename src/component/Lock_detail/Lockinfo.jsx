import React from 'react'
import "./Lockinfo.css"
import { Link } from 'react-router-dom'
function Lockinfo() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-md-12 bg-light py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 bg-white">
                            <div className='text-start border-bottom py-3'>
                                <span className='fw-bold'>Lock info</span>
                            </div>
                            <div className="my-4">
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Current Locked Amount</span>
                                    <span className='fnt_sz'>200,000,000 CRAFT</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Current Values Locked</span>
                                    <span className='fnt_sz'>$3,320</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Token Address</span>
                                    <span className='fnt_sz'><a href="" className='adrs'> 0x29F46d1fd9AdD564</a></span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Token Name</span>
                                    <span className='fnt_sz'>TaleCraft</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Token Symbol</span>
                                    <span className='fnt_sz'>CRAFT</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Token Decimals</span>
                                    <span className='fnt_sz'>9</span>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center mt-4 p-0">
                            <div className="col-lg-10 bg-white">
                                <div className='text-start border-bottom py-3'>
                                    <span className='fw-bold'>Lock records</span>
                                </div>

                                <div className='row detl my-4'>
                                    <div className="col-lg-2">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>Wallet</div>
                                            <div className='mt-3 ln_two_edt'>0xdf7a...D81F</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>Amount</div>
                                            <div className='mt-3 ln_two_edt'>200,000,000</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>Cycle(d)</div>
                                            <div className='mt-3'>-</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>Cycle Release(%)</div>
                                            <div className='mt-3'>-</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>TGE(%)</div>
                                            <div className='mt-3'>-</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='wall text-start'>
                                            <div className='fr_edt'>Unlock time(UTC)</div>
                                            <div className='mt-3 d-flex justify-content-around'>
                                                <span className='ln_two_edt'> 2023.12.19 04:38</span>
                                                <span><Link to="/Lockin" className='adrs'>View</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
    )
}

export default Lockinfo