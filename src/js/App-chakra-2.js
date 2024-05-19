import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <Tabs defaultIndex={1}>
      <TabPanels>
        <TabPanel>
          <Image
            boxSize="200px"
            fit="cover"
            src="https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png"
          />
        </TabPanel>
        <TabPanel>
          <Image
            boxSize="200px"
            fit="cover"
            src="https://images5.alphacoders.com/810/thumbbig-810547.webp"
          />
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab>Naruto</Tab>
        <Tab>Sasuke</Tab>
      </TabList>
    </Tabs>
  );
}

export default App;
