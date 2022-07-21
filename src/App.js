import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from "./tab_pages/Home";
import Projects from "./tab_pages/Projects";
import AboutMe from "./tab_pages/AboutMe";
import Resume from "./tab_pages/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tabs>
              <TabList>
                  <Tab>Home</Tab>
                  <Tab>About Me</Tab>
                  <Tab>Projects</Tab>
                  <Tab>Resume</Tab>
              </TabList>

              <TabPanel>
                  <Home/>
              </TabPanel>
              <TabPanel>
                  <AboutMe/>
              </TabPanel>
              <TabPanel>
                  <Projects/>
              </TabPanel>
              <TabPanel>
                  <Resume/>
              </TabPanel>
          </Tabs>
      </header>
    </div>
  );
}

export default App;