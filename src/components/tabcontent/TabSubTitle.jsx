"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import CardList from "../card/CardList";

const data = [
  {
    label: "Latest",
    value: "LATEST"
  },
  {
    label: "Most Downloded",
    value: "MOST_DOWNLOAD"
  },

  {
    label: "Most Commented",
    value: "MONST_COMMENTED"
  },
];

const TabSubTitle = () => {

  return (
    <Tabs id="custom-animation" value="TAB_VALUE">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            activeClassName="bg-gray-500 rounded-md text-red-800"
            className="text-2xl font-semibold"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <CardList type={value} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabSubTitle;
