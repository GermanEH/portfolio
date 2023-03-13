import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import LinkedinLogo from './../assets/linkedin_logo.jpg'
import GithubLogo from './../assets/github_logo.jpg'
import GmailLogo from './../assets/gmail_logo.jpg'
import HandFlame from './../assets/hand_with_flame.jpg'
import FireVideo from './../assets/fire_reveal.mp4'
import Name from './../assets/german_horianski.svg'
import './../assets/svg.css'

export const Home: React.FC = () => {
  return (
    <header className="App">
        <section className="header">
          <video src={FireVideo} autoPlay muted></video>
          <div className="text">
            <span>P</span>
            <span>u</span>
            <span>s</span>
            <span>h</span>
            <span>&nbsp;</span>
            <span>y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>l</span>
            <span>i</span>
            <span>m</span>
            <span>i</span>
            <span>t</span>
            <span>s</span>
          </div>
        </section>
      <section className="title">

        <Name/>
        {/* <svg width="1092" height="220"><text x="150" y="200" fill="#fff" stroke="#333" id="text" strokeWidth="2" fontSize="95">Germán Horianski</text></svg> */}

        <h1 className="box" data-content="About">Full</h1>
        <h1 className="box" data-content="Projects">Stack</h1>
        <h1 className="box" data-content="Contact">Developer</h1>
      </section>
        <section>
        <h2>Unleash the power of Dev arts</h2>
        {/* <h2>Germán Horianski</h2> */}
        <Link to='https://www.linkedin.com/in/ghorianski/' target="_blank">
          <div className="logo_container">
            <img src={LinkedinLogo} alt='linkedin_logo' className="logo"></img>
          </div>
        </Link>
        <Link to='https://github.com/GermanEH' target="_blank">
          <img src={GithubLogo} alt='github_logo' className="logo"></img>
        </Link>
        <Link to='https://gmail.com' target="_blank">
          <img src={GmailLogo} alt='gmail_logo' className="logo"></img>
        </Link>
      </section>
      <section>
        <img src={HandFlame}alt="hand_with_flame" style={{ height: '300px', width: '200px' }}></img>
      </section>

    </header>
  )
}
