import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss'; // Assuming you have a global CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <header className="fixed-top">
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/team">Team</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-fill overflow-auto custom-scrollbar main-content">
        <Component {...pageProps} />
      </main>

      <footer  className="fixed-bottom">
        {/* <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="/terms">Terms of Service</a></li>
          <li className="nav-item"><a className="nav-link" href="/privacy">Privacy Policy</a></li>
        </ul> */}
        <div className="d-flex justify-content-center">
        Brough to you by Question Jams!
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
