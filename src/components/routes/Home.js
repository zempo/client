import React from "react";
import { Link } from "react-router-dom";
import HomeFeature from "./HomeFeature";
import "../sass/Home.scss";

export default function Home() {
  return (
    <section className='pg home-pg'>
      <article className='hero'>
        <div>
          <h1>Never forget to water your plants again</h1>
          <Link className='hero-btn' to='/register'>
            Sign Up Now
          </Link>
        </div>
      </article>

      <article className='features'>
        <h2>What We Offer</h2>
        <div className='featureList'>
          <HomeFeature
            title='Organize'
            description='Keep track of all your plants in one place, right from the dashboard.'
          />
          <HomeFeature
            title='Forget'
            description="We keep track of your watering history and remind you to water, so you don't have to remember when you last watered or when to water next."
          />
          <HomeFeature
            title='Record'
            description='Quickly record watering so you can get back to your other tasks.'
          />
        </div>
      </article>

      <article className='mission'>
        <h2>Our Mission</h2>
        <p>
          In a time when there's an app for organizing just about everything in
          our lives, this isn't easily available for plant care.
        </p>
        <p>
          Water My Plants aims to help you get more organized with your plant
          care by keeping track for you. We want to help you become a savvy
          plant parent and never have to remember when you watered last.
        </p>
      </article>
    </section>
  );
}
