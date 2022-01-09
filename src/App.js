import React from "react";
import { Contacts } from "./components/contact/Contacts";
import { ExperienceContainer } from "./components/ExperienceContainer/ExperienceContainer";
import Header from "./components/Header/Header";
import { ProjectContainer } from "./components/ProjectContainer/ProjectContainer";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";
import { TopContainer } from "./components/TopCointainer/TopContainer";

function App() {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contacts />
    </div>
  );
}

export default App;
