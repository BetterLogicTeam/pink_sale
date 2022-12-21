import * as React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Tokenli from '../Token_list/Tokenli';
import thinken from "../Assets/think.png"
import Mylock from "../Mylock_detail/Mylock"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 bg-light py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 bg-white">
                            <div className='mt-4'>
                                <Form.Control type="search" placeholder="Search by token address ..." />
                            </div>
                            <div className="mt-2">
                                <Box sx={{ width: '100%' }}>
                                    <div className="d-flex justify-content-end">
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="All" {...a11yProps(0)} className="text-capitalize" />
                                            <Tab label="My Lock" {...a11yProps(1)} className="text-capitalize" />
                                        </Tabs>
                                    </div>

                                    <TabPanel value={value} index={0}>
                                        <div className='d-flex justify-content-between'>
                                            <span className='fw-bold'>Token</span>
                                            <span className='fw-bold'>Amount</span>
                                            <span className='mg_k'></span>
                                        </div>
                                        <div className='frnt_Main my-5'>
                                            <div> <Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                            <div className='mt-3'><Tokenli token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                        </div>

                                        <div className='pgnation d-flex justify-content-center'>
                                            <Stack spacing={2}>
                                                <Pagination count={10} variant="outlined" shape="rounded" />
                                            </Stack>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <div className='d-flex justify-content-between'>
                                            <span className='fw-bold'>Token</span>
                                            <span className='fw-bold'>Amount</span>
                                            <span className='mg_k'></span>
                                        </div>

                                        <div className='frnt_Main my-5'>
                                            <div><Mylock token_pic={thinken} text_one="TaleCraft" text_tow="CRAFT" amount1="200,000,000" amount2="CRAFT" fullpage="View" /></div>
                                        </div>
                                    </TabPanel>

                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}