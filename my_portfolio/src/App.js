import TopNavbar from "./components/topNavbar";
import Info from "./components/info";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import { Route, Switch } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="app">
          <header>
            <TopNavbar />
          </header>
          <main>
            <section className="info-section">
              <Info />
            </section>
            <section className="skills-section">
              <Skills />
            </section>
            <section className="profile-section">
              <Profile />
            </section>
            <section className="project-section">
              <h1>Projects</h1>
              <article>
                <Projects />
              </article>
            </section>
          </main>
          <footer></footer>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
