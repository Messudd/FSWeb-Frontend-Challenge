import TopNavbar from "./components/topNavbar";
import Info from "./components/info";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import { Route, Switch } from "react-router-dom";
import BottomNav from "./components/bottomNav";
import { useContext } from "react";
import { dataContext } from "./context/dataContext";
import AnimatedPage from "./components/animatedPage";
import HireMe from "./components/hireMe";
import MoreInfo from "./components/moreInfo";
import "./app.css";

function App() {

  const myState = useContext(dataContext);
  const {other} = myState.data;
  const themeMode = myState.mode;


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
              <Skills />
            </section>
            <section className="profile-section">
              <Profile />
            </section>
            <section id="projectss" className="project-section">
              <h1 style={{ color: !themeMode && "#AEBCCF" }}>{other.proj}</h1>
              <article>
                <Projects />
              </article>
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
      <Route path = '/moreInfo'>
        <MoreInfo/>
      </Route>
    </Switch>
  );
}

export default App;
