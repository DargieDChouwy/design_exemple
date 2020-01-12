import React from 'react';
import '../styles/App.css';
import About from '../components/about'

function App() {
  return (
    <div>
      <About
      title="About Exemplar"
      text="We're a real estate technology company whose goal is to empower investors with direct access to fully vetted, institunional-grade real estate investments faster and smarter than ever before."
      textLeft="Our Investment Team brings over 20 billion CZK in real estate transaction experience from leading firms like Blackstone and Goldman Sachs - while our engineering and products teams hail form leading tech companies like Dropbox and Square."
      textRight="With in-depth experience in real estate, combined with cutting-edge technology and close local operator partnerships, Exemplar brings you access to institutional-grade investments with greater transparency and lower fees. Exemplar brings you access to institutional-grade investments with greater transparency and lower fees. "
      />
    </div>
  );
}

export default App;
