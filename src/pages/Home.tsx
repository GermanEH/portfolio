import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import LinkedinLogo from './../assets/linkedin_logo.jpg'
import GithubLogo from './../assets/github_logo.jpg'
import GmailLogo from './../assets/gmail_logo.jpg'
import HandFlame from './../assets/hand_with_flame.jpg'
import FireVideo from './../assets/fire_reveal.mp4'

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
      <section>
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1 className="box" data-content="About">Full</h1>
        <h1 className="box" data-content="Projects">Stack</h1>
        <h1 className="box" data-content="Contact">Developer</h1>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </section>
        <section>
        <h2>Unleash the power of Dev arts</h2>
        <h2>Germán Horianski</h2>
        <Link to='https://www.linkedin.com/in/ghorianski/' target="_blank">
          <img src={LinkedinLogo} alt='linkedin_logo' className="logo"></img>
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
