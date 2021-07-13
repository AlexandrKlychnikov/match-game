import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import "./styles.css";
import "./components/header.css";
import HamburgerMenuButton, {handleClick} from "./Hamburger";
import ToggleButton from "./components/ToggleButton";
import MainPage from "./components/pages/MainPage";
import ActionsSetA from "./components/pages/ActionsSetA";
import ActionsSetB from "./components/pages/ActionsSetB";
import AnimalsSetA from "./components/pages/AnimalsSetA";
import AnimalsSetB from "./components/pages/AnimalsSetB";
import Clothes from "./components/pages/Clothes";
import Emotions from "./components/pages/Emotions";
import Food from "./components/pages/Food"
import Fruits from "./components/pages/Fruits"
import { StartButton } from "./components/StartButton";
import Indicator, { indicatorValue } from "./components/Indicator";
import CategoryLocation from "./components/CategoryLocation";

export default function App() {

  const [value, setValue] = React.useState(true);
  
  return (
    <Router>
      <CategoryLocation />
      <div className="wrapper">
          <header className="header">
            <div className="container">
              <HamburgerMenuButton />
              <nav className="navigation">
                <ul className="navigation__list">
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={1} to="/">Main Page</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={2} to="/ActionsSetA">Actions (set A)</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={3} to="/ActionsSetB">Actions (set B)</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={4} to="/AnimalsSetA">Animals (set A)</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={5} to="/AnimalsSetB">Animals (set B)</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={6} to="/Clothes">Clothes</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={7} to="/Emotions">Emotions</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={8} to="/Food">Food</Link>
                  </li>
                  <li className="navigation__item" onClick={handleClick}>
                    <Link key={9} to="/Fruits">Fruits</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <ToggleButton
              onColor="#BDECB6"
              isOn={value}
              handleToggle={() => setValue(!value)}
            />
           </header>
          <Indicator arr={indicatorValue} />
          <Switch>
            <Route key={9} path="/Fruits">
              <Fruits value={value}/>
              <StartButton value={value} />   
            </Route>
            <Route key={8} path="/Food">
              <Food value={value} />
              <StartButton value={value} />  
            </Route>
            <Route key={7} path="/Emotions">
              <Emotions value={value} />
              <StartButton value={value} />  
            </Route>
            <Route key={6} path="/Clothes">
              <Clothes value={value} />
              <StartButton value={value} />  
            </Route>
            <Route key={5} path="/AnimalsSetB">
              <AnimalsSetB value={value}/>
              <StartButton value={value} />  
            </Route>
            <Route key={4} path="/AnimalsSetA">
              <AnimalsSetA value={value} />
              <StartButton value={value} />  
            </Route>
            <Route key={3} path="/ActionsSetB">
              <ActionsSetB value={value} />
              <StartButton value={value} />  
            </Route>
            <Route key={2} path="/ActionsSetA">
              <ActionsSetA value={value} />
              <StartButton value={value} />   
            </Route>
            <Route key={1} path="/">
              <MainPage value={value}/>
            </Route>
          </Switch>
          <div className="break"></div>
        <footer>Here will be footer</footer>    
      </div>
      </Router>
  );
}
