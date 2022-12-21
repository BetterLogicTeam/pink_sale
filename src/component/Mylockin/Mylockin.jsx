import React from 'react'
import "./Mylockin.css"

function Lockin() {
    return (
        <div className='container red_order'>
            <div className="row">
                <div className="col-lg-12 col-md-12 bg-light py-5">
                    <div className="row d-flex justify-content-center">

                        <div className="col-lg-10 bg-white">
                            <div className='my-4'>
                                <div>
                                    <span>Unlock in</span>
                                </div>
                                <div className='main_time mt-3 d-flex justify-content-center'>
                                    <div className='pik_clr p-2 arounded'>364</div>
                                    <div className='pik_clr p-2 arounded'>15</div>
                                    <div className='pik_clr p-2 arounded'>50</div>
                                    <div className='pik_clr p-2 arounded'>22</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 bg-white mt-4">
                            <div className='text-start border-bottom py-3'>
                                <span className='fw-bold'>Token Info</span>
                            </div>
                            <div className="my-4">
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

                        <div className="col-lg-10 bg-white mt-4">
                            <div className='text-start border-bottom py-3'>
                                <span className='fw-bold'>Lock Info</span>
                            </div>
                            <div className="my-4">
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Total Amount Locked</span>
                                    <span className='fnt_sz'><a href="" className='adrs'> 200,000,000 TaleCraft</a></span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Total Values Locked</span>
                                    <span className='fnt_sz'>$5,834</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Owner</span>
                                    <span className='fnt_sz'>0xdf7aA038ab152B8dd703F05</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Lock Date</span>
                                    <span className='fnt_sz'>2022.12.19 04:38 UTC</span>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <span className='left_txt'>Unlock Date</span>
                                    <span className='fnt_sz'>2023.12.19 04:38 UTC (in a year)</span>
                                </div>

                            
                                <div className='last_butn_main py-2 mt-3 '>
                                    <button type='button' className='btn btn-sm fst_bB'>Transfer Lock Ownership</button>
                                    <button type='button' className='btn btn-sm fst_bB'>Renounce Lock Ownership</button>
                                    <button type='button' className='btn btn-sm fst_bB'>Update</button>
                                    <button type='button' className='btn btn-sm fst_bB' disabled>Unlock</button>
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

export default Lockin
