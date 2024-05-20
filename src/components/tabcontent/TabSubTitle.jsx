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
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Most Downloded",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Most Commented",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

const TabSubTitle = () => {
  return (
    <Tabs id="custom-animation" value="html">
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
            <CardList />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabSubTitle;
