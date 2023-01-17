import * as React from "react";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            placeholder="Enter token name and token symbal"
            autoComplete="on"
          />
        </div>
      </Box>
      <TabPanel value={value} index={0} className="">
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
