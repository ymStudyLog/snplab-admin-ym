import React from "react";
import styled from "styled-components";
import { TabPanelProps } from "../../types/TabPanel.type";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GetItem from "../admin/GetItem";

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const FullWidthTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "var(--color-tabs-background)", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          sx={{
            bgcolor: "var(--color-tabs-background)",
            width: "100%",
            color: "var(--color-black)",
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="1차 모집" {...a11yProps(0)} />
          <Tab label="2차 모집" {...a11yProps(1)} />
          <Tab label="3차 모집" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Views>
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
        >
          <GetItem tab={"?submitdate_gte=2022. 7. 01.&submitdate_lte=2022. 7. 31."} />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
        >
          <GetItem tab={"?submitdate_gte=2022. 8. 01.&submitdate_lte=2022. 8. 31."}/>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
        >
          <GetItem tab={"?submitdate_gte=2022. 9. 01.&submitdate_lte=2022. 9. 31."}/>
        </TabPanel>
      </Views>
    </Box>
  );
};

export default FullWidthTabs;

const Views = styled.div``;
