import React from "react";
import './Styles.css';




export default function Home() {
  return (
    <header>
    <nav>
      <div className="logo">
        {" "}
        <h1 style={{ fontSize: 20 }}> Ravel Vocal </h1>{" "}
      </div>
      
    </nav>
    <main>
      <section>
        <h3>Ravel Vocal</h3>
        <h1>Make your Soul Fly</h1>
        <a href="/sign-in" className="btone">
          Start listening
        </a>
       
      </section>
    </main>
  </header>
  );
}
