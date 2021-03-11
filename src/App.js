import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import About from './pages/About';
import Links from './pages/Links';
import Projects from './pages/Projects';

console.log(`%c
${' '.repeat(33)}
${' '.repeat(7)}Made by Iqbal Lodin${' '.repeat(7)}
${' '.repeat(33)}
${' '.repeat(2)}Want to see the source code?${' '.repeat(3)}
${' '.repeat(33)}\n`,
    'background: #007aff; color: white'
);
console.log('\nhttps://github.com/iqballerr/my_website\n ')


const App = () => {
	return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Links/>
          </Route>
          <Route path="/projects" exact>
            <Projects/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  )
};

export default App;
