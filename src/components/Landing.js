import React from 'react';

const Landing = (props) => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Landing;


////////////
// Header //
////////////

const Header = () => {
  return (
    <header className="Header">
      <a href="#" className="logo" style={{backgroundImage: 'url(http://blog.blackbloggersconnect.com/wp-content/uploads/2011/09/urban-politico-UP-logo.jpg)'}}>
      </a>
      <Navigation />
    </header>
  );
};

// Navigation
const Navigation = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul>
          <li><a href="/users"> My Users</a></li>
          <li><a href="/data"> Raw Data</a></li>
        </ul>
      </nav>
    </div>
  );
};

//////////
// Hero //
//////////

const Hero = (props) => {
  return (
    <div id="hero" className="Hero" style={{backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/christmas-black.png)'}}>
      <div className="content">
        <h2>USER PANEL</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="My Users" path="/users"/>
          <HeroButton primary={false} text="+ Add User" />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

// Hero Button
const HeroButton = (props) => {
  return (
    <a href={props.path || "#"} className="Button" data-primary={props.primary}>{props.text}</a>
  );
};
