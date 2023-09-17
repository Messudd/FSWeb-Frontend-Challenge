import TopNavbar from "./components/topNavbar";
import Info from "./components/info";
import Skills from "./components/skills";
import Profile from "./components/profile";
import ProjectsParent from "./components/projectsParent";
import { Route, Switch } from "react-router-dom";
import BottomNav from "./components/bottomNav";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "./context/dataContext";
import AnimatedPage from "./components/animatedPage";
import HireMe from "./components/hireMe";
import MoreInfo from "./components/moreInfo";
import "./app.css";

function App() {
  const [scroll, setScroll] = useState({ scrollY: null });
  const [comp, setComp] = useState({
    skillsMe: null,
    profileMe: null,
    ProjectsMe: null,
  });
  const myState = useContext(dataContext);
  const themeMode = myState.mode;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll({ scrollY: window.scrollY });
    });
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (scroll.scrollY > 320) {
      setComp({ ...comp, skillsMe: <Skills /> });
    }
    if (scroll.scrollY > 550) {
      setComp({ ...comp, profileMe: <Profile /> });
    }
    if (scroll.scrollY > 800) {
      setComp({ ...comp, ProjectsMe: <ProjectsParent /> });
    }
  }, [scroll.scrollY]);

  return (
    <Switch>
      <Route path="/" exact>
        <div
          className="app"
          style={{ backgroundColor: !themeMode && "#252128" }}
        >
          <header>
            <TopNavbar />
          </header>
          <main>
            <section className="info-section">
              <Info />
            </section>
            <section id="skillss" className="skills-section">
              {comp.skillsMe}
            </section>
            <section className="profile-section">{comp.profileMe}</section>
            <section id="projectss" className="project-section">
              {comp.ProjectsMe}
            </section>
          </main>
          <footer style={{ backgroundColor: !themeMode && "#141414" }}>
            <BottomNav />
          </footer>
        </div>
      </Route>
      <Route path="/contact_me" exact>
        <AnimatedPage>
          <HireMe />
        </AnimatedPage>
      </Route>
      <Route path="/moreInfo">
        <MoreInfo />
      </Route>
    </Switch>
  );
}

export default App;
