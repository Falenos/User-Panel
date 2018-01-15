import React from 'react';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

// Header
// If reused, move to components/layout
const Header = () => {
  return (
    <header className='Header'>
      <a href='#' className='logo' style={{backgroundImage: 'url(http://blog.blackbloggersconnect.com/wp-content/uploads/2011/09/urban-politico-UP-logo.jpg)'}}>
      </a>
      <Navigation />
    </header>
  );
};

// Navigation
const Navigation = () => {
  return (
    <div id='navigation' className='Navigation'>
      <nav>
        <ul>
          <li><a href='/users'> My Users</a></li>
          <li><a href='/data'> Raw Data</a></li>
        </ul>
      </nav>
    </div>
  );
};

// Hero
const Hero = () => {
  return (
    <div id='hero' className='Hero' style={{backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/christmas-black.png)'}}>
      <div className='content'>
        <h2>USER PANEL</h2>
        <p>Made with React, Redux, Webpack and Express</p>
        <h3>Additional Features</h3>
        <p>Server Side Rendering, Automated tests</p>
        <h3>Comments</h3>
        <p>There is still an issue with styles and SSR. This is why there is an initial rendering without styles when you enter /users. Js is fine though</p>
        <p>Also DataApi transforms the users array to obj for slightly better performance (in case we had a lot of users)</p>
        <div className='button-wrapper'>
          <HeroButton primary={true} text='My Users' path='/users'/>
          <HeroButton primary={false} text='+ Add User' />
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
};

// Hero Button
const HeroButton = (props) => {
  return (
    <a href={props.path || '#'} className='button' data-primary={props.primary}>{props.text}</a>
  );
};

export default Landing;
