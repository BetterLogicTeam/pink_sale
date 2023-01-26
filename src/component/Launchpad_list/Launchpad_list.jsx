import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Launchpad_list.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Launchpad_card from "../Launchpad_card/Launchpad_card";
import Card_img from "../Assets/Binance.png";
import Card_img2 from "../Assets/unity.png";
import Card_img3 from "../Assets/pepsi.png";
import Card_img4 from "../Assets/pinkswap.a95de4f3.png";
import Form from "react-bootstrap/Form";
import {
  pinkSaleLockContract,
  pinkSaleLockAbi,
  tokenAbi,
  tokenAdress,
  PinkSaleICOFactoryContractAddress,
  PinkSaleICOFactoryContractABI,
  PinksaleICOContractABI,
  PinksaleICOContractAddress,
} from "../../utilies/Contract";
import { loadWeb3 } from "../../connectivity/connectivity";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [totalIcos, setTotalIcos] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const allIcos = async () => {
    const web3 = window.web3;
    let acc = await loadWeb3();
    let allIcosInfo = [];
    let obj;
    let pinkSaleFactoryICO = new web3.eth.Contract(
      PinkSaleICOFactoryContractABI,
      PinkSaleICOFactoryContractAddress
    );
    let totalIcos = await pinkSaleFactoryICO.methods.totalICOs().call();
    console.log("icos", totalIcos);
    for (let index = 0; index < totalIcos.length; index++) {
      const contractAddress = totalIcos[index];
      let pinkSaleICO = new web3.eth.Contract(
        PinksaleICOContractABI,
        contractAddress
      );
      let tokenDetail = await pinkSaleICO.methods.tokeninfo().call();
      let icoInfo = await pinkSaleICO.methods.ICO_info().call();
      let icoProgress = await pinkSaleICO.methods.status().call();
      let soldPercent = (icoProgress.sold_amount / icoInfo.token_supply) * 100;
      // console.log("soldPercent", soldPercent);
      let currentDateSeconds = Math.round(new Date().getTime() / 1000);
      console.log(currentDateSeconds);
      let endTimeLessthenStartTime;
      let timeInfo;

      if (currentDateSeconds < Number(icoInfo.ICO_start)) {
        timeInfo = {
          timerTitle: "  ICO Starts In",
          seconds: icoInfo.ICO_start,
          backgroundcolor: "#fdfaea",
          color: "#d29813",
          title: "Upcoming",
        };
      } else if (currentDateSeconds < Number(icoInfo.ICO_end)) {
        timeInfo = {
          timerTitle: "  ICO Ends In",
          seconds: icoInfo.ICO_end,
          backgroundcolor: "#d1fae5",
          color: "#10b981",
          title: "ICO Live",
        };
      } else {
        timeInfo = {
          timerTitle: "  ICO Ended ",
          seconds: icoInfo.ICO_end,
          backgroundcolor: "#ffeaef",
          color: "#ff3465",
          title: "ICO Ended",
        };
      }
      obj = {
        tokenName: tokenDetail.name,
        tokenSymbol: tokenDetail.symbol,
        totalSupply: web3.utils.fromWei(icoInfo.token_supply),
        soldAmount: web3.utils.fromWei(icoProgress.sold_amount),
        startTime: icoInfo.ICO_start,
        endTime: icoInfo.ICO_end,
        progressInPercent: soldPercent,
        timeInfo: timeInfo,
      };
      // allIcosInfo.push(obj);
      allIcosInfo = [{ ...obj }, ...allIcosInfo];
      // console.log("icoInfo", icoInfo.token_supply);
      // console.log("icoProgress", icoProgress);
    }
    // console.log("objectobject", allIcosInfo);

    setTotalIcos([...allIcosInfo]);
  };
  useEffect(() => {
    allIcos();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          className="mt-4"
        >
          <Tab label="All launchpads" {...a11yProps(0)} />
          <Tab label="My Contributions" {...a11yProps(1)} />
        </Tabs>
        <div className="input_filed mt-5 px-4 px-md-5 ">
          <div className="text-start for_fnt"></div>

          <Form.Control
            type="url"
            className="url_input input_flied_of_pink "
            placeholder="Enter token address"
            autoComplete="on"
          />
        </div>
      </Box>
      <TabPanel value={value} index={0} className="">
        <div className="launh_grid">
          {totalIcos.map((item, index, arr) => {
            return (
              <Launchpad_card
                img_card={Card_img}
                totalSupply={`1 BNB = ${item.totalSupply} ${item.tokenSymbol}`}
                para_3="(0.00%)"
                soldAmountForProgress={`${item.soldAmount} ${item.tokenSymbol}`}
                totalSupplyForProgress={`${item.totalSupply} ${item.tokenSymbol}`}
                tokenName={item.tokenName}
                tokenSymbol={item.tokenSymbol}
                startTime={item.startTime}
                endTime={item.endTime}
                progressInPercent={item.progressInPercent}
                timeInfo={item.timeInfo}
              />
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="launh_grid">
          <Launchpad_card
            img_card={Card_img}
            para_1="Tweetfi"
            para_2="1 BNB = 30,000 TW."
            para_3="(0.00%)"
            BNB_1="0 BNB"
            BNB_2="200 BNB"
          />
          <Launchpad_card
            img_card={Card_img2}
            para_1="untitled presale"
            para_2="150 BNB - 250 BNB"
            para_3="(0.00%)"
            BNB_1="0 BNB"
            BNB_2="250 BNB"
          />
          <Launchpad_card
            img_card={Card_img3}
            para_1="-"
            para_2="0.1 BNB"
            para_3="(0.00%)"
            BNB_1="0 BNB"
            BNB_2="200 BNB"
          />
          <Launchpad_card
            img_card={Card_img4}
            para_1="untitled presale"
            para_2="1 USDC - 2 USDC"
            para_3="(0.00%)"
            BNB_1="0 USDC"
            BNB_2="2 USDC"
          />
          <Launchpad_card
            img_card={Card_img4}
            para_1="aa"
            para_2="0.002 BNB - 0.003 BNB"
            para_3="(0.00%)"
            BNB_1="0 BNB"
            BNB_2="200 BNB"
          />
          <Launchpad_card
            img_card={Card_img4}
            para_1="Etherst"
            para_2="120 BNB"
            para_3="(0.00%)"
            BNB_1="0 BNB"
            BNB_2="200 BNB"
          />
        </div>
      </TabPanel>
    </Box>
  );
}
