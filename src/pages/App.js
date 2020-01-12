import React from 'react';
import '../styles/App.css';
import About from '../components/about'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function App() {
  return (
    <div>
      <header>
        <Navbar 
        textOne="Investments"
        textSecond="How to invest"
        textFour="Insights"
        />
      </header>
        <About
        title="About Exemplar"
        text="We're a real estate technology company whose goal is to empower investors with direct access to fully vetted, institunional-grade real estate investments faster and smarter than ever before."
        textLeft="Our Investment Team brings over 20 billion CZK in real estate transaction experience from leading firms like Blackstone and Goldman Sachs - while our engineering and products teams hail form leading tech companies like Dropbox and Square."
        textRight="With in-depth experience in real estate, combined with cutting-edge technology and close local operator partnerships, Exemplar brings you access to institutional-grade investments with greater transparency and lower fees."
        />

        <Footer
        titleOne="Contact us"
        numberphone="+420 228 225 674"
        email="support@exemplar.cz"
        textContact=" We are available Monday through Friday between 9 a.m. – 7 p.m. "

        titleSecond="For Investors"
        investortext="Investments"
        investortexttwo="How to Invest"
        investortextthird="Real Estate Funds"

        titleThird="About Exemplar"
        first="About & Team"
        second="Contact Us"

        titleFour="Resources"
        firsttext="Insights"
        secondtext="Investor Academy"
        />
    </div>
  );
}

export default App;
