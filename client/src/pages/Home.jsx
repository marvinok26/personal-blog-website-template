import React, { useState, useEffect } from 'react';


import '../css/Home.css';

import blog1 from '../images/blog-1.png';
import blog2 from '../images/blog-2.png';
import blog3 from '../images/blog-3.png';
import blog4 from '../images/blog-4.png';
import blog5 from '../images/blog-5.png';
import blog6 from '../images/blog-6.png';
import blog7 from '../images/blog-7.png';
import blog8 from '../images/blog-8.png';
import blog9 from '../images/blog-9.png';
import blog10 from '../images/blog-10.png';
import hero from '../images/hero.png';
import dark from '../images/logo-dark.svg';
import author from '../images/author.png';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Home = () => {
  // Define state for theme
  const [theme, setTheme] = useState('light-theme');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  // // Add event listener for theme button
  useEffect(() => {
    const themeBtns = document.querySelectorAll('.theme-btn');

    themeBtns.forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });

    return () => {
      // Cleanup: Remove event listener when component unmounts
      themeBtns.forEach((btn) => {
        btn.removeEventListener('click', toggleTheme);
      });
    };
  }, []);

  return (
    <div className={theme}>
      <Header />
      <main>
        <div className="hero">
          <div className="container">
            <div className="left">
              <h1 className="h1">
                Hi, I'm <b>Marvin&nbsp;Okongo</b>.<br />Web Developer
              </h1>
              <p className="h3">
                Specialized in <abbr title="Accessibility">a11y</abbr> and Core Web Vitals
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">Contact Me</a>
                <a href="#" className="btn btn-secondary">About Me</a>
              </div>
            </div>
            <div className="right">
              <div className="pattern-bg"></div>
              <div className="img-box">
                <img src={hero} alt="Julia Walker" className="hero-img" />
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">

            <div className="blog">
              <h2 className="h2">Latest Blog Post</h2>
              <div className="blog-card-group">
                {[
                  {
                    bannerSrc: blog1,
                    bannerAlt: "Building microservices with Dropwizard, MongoDB & Docker",
                    topic: "Database",
                    title: "Building microservices with Dropwizard, MongoDB & Docker",
                    text: "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
                    date: "2022-01-17",
                    readTime: "3 min",
                  },
                  {
                    bannerSrc: blog2,
                    bannerAlt: "Fast web page loading on a $20 feature phone",
                    topic: "Web Performance",
                    title: "Fast web page loading on a $20 feature phone",
                    text: "Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone.",
                    date: "2021-12-10",
                    readTime: "2 min",
                  },
                  {
                    bannerSrc: blog3,
                    bannerAlt: "Accessibility Tips for Web Developers",
                    topic: "Accessibility",
                    title: "Accessibility Tips for Web Developers",
                    text: "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools and resources can help here, even if you're totally new to web accessibility.",
                    date: "2021-11-28",
                    readTime: "4 min",
                  },
                  {
                    bannerSrc: blog4,
                    bannerAlt: "Dynamically Securing Databases using Hashicorp Vault",
                    topic: "Database",
                    title: "Dynamically Securing Databases using Hashicorp Vault",
                    text: "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to securing complex infrastructures and defining strong authorization and authentication policies across the enterprise.",
                    date: "2021-11-20",
                    readTime: "4 min",
                  },
                  {
                    bannerSrc: blog5,
                    bannerAlt: "Adaptive Loading - Improving Web Performance on low-end devices",
                    topic: "Web Performance",
                    title: "Adaptive Loading - Improving Web Performance on low-end devices",
                    text: "Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device capabilities, a 'one-size' fits all experience may not always work. Sites that delight users on high-end devices can be unusable on low-end ones, particularly on median mobile and desktop hardware and in emerging markets.",
                    date: "2021-11-10",
                    readTime: "3 min",
                  },
                  {
                    bannerSrc: blog6,
                    bannerAlt: "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
                    topic: "Accessibility",
                    title: "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
                    text: "We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain types of people: Sighted mouse-users, who have good fine motor skills and are good at using computers.",
                    date: "2021-10-25",
                    readTime: "7 min",
                  },
                  {
                    bannerSrc: blog7,
                    bannerAlt: "Building a Restful CRUD API with Node JS, Express, and MongoDB",
                    topic: "Database",
                    title: "Building a Restful CRUD API with Node JS, Express, and MongoDB",
                    text: "Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a messenger that sends your request to the provider and then returns the response to you.",
                    date: "2021-10-15",
                    readTime: "5 min",
                  },
                  {
                    bannerSrc: blog8,
                    bannerAlt: "Monitoring Performance with the PageSpeed Insights API",
                    topic: "Web Performance",
                    title: "Monitoring Performance with the PageSpeed Insights API",
                    text: "The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from the Chrome User Experience Report (CrUX).",
                    date: "2021-10-03",
                    readTime: "5 min",
                  },
                  {
                    bannerSrc: blog9,
                    bannerAlt: "The best web accessibility tools for developers in 2021",
                    topic: "Accessibility",
                    title: "The best web accessibility tools for developers in 2021",
                    text: "Ensuring that your website is accessible is essential if you want to provide a great user experience. With the rise in popularity of accessibility, there's an abundance of tools available for web developers to use. This article will take a look at some of the best tools that are currently available.",
                    date: "2021-09-21",
                    readTime: "8 min",
                  },
                  {
                    bannerSrc: blog10,
                    bannerAlt: "Core Web Vitals - Measure and Optimize",
                    topic: "Web Performance",
                    title: "Core Web Vitals - Measure and Optimize",
                    text: "Core Web Vitals are an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. These metrics are intended to help site owners measure the user experience on their site.",
                    date: "2021-09-12",
                    readTime: "4 min",
                  },
                ].map((blog, index) => (
                  <div className="blog-card" key={index}>
                    <div className="blog-card-banner">
                      <img src={blog.bannerSrc} alt={blog.bannerAlt} width="250" className="blog-banner-img" />
                    </div>
                    <div className="blog-content-wrapper">
                      <button className="blog-topic text-tiny">{blog.topic}</button>
                      <h3><a href="#" className="h3">{blog.title}</a></h3>
                      <p className="blog-text">{blog.text}</p>

                      <div class="wrapper-flex">

                        <div class="profile-wrapper">
                          <img src={author} alt="Marvin Okongo" width="50" />
                        </div>

                        <div class="wrapper">
                          <a href="#" class="h4">Marvin Okongo</a>

                          <p class="text-sm">
                            <time datetime="2024-05-31">May 31, 2024</time>
                            <span class="separator"></span>
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT4M">4 min</time>
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* ASIDE */}


            <div className="aside">
              <div className="topics">
                <h2 className="h2">Topics</h2>
                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="server-outline"></ion-icon>
                  </div>
                  <p>Database</p>
                </a>
                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </div>
                  <p>Accessibility</p>
                </a>
                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>
                  <p>Web Performance</p>
                </a>
              </div>
              <div className="tags">
                <h2 className="h2">Tags</h2>
                <div className="wrapper">
                  <button className="hashtag">#mongodb</button>
                  <button className="hashtag">#nodejs</button>
                  <button className="hashtag">#a11y</button>
                  <button className="hashtag">#mobility</button>
                  <button className="hashtag">#inclusion</button>
                  <button className="hashtag">#webperf</button>
                  <button className="hashtag">#optimize</button>
                  <button className="hashtag">#performance</button>
                </div>
              </div>
              <div className="contact">
                <h2 className="h2">Let's Talk</h2>
                <div className="wrapper">
                  <p>
                    Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.
                  </p>
                  <ul className="social-link">
                    <li>
                      <a href="#" className="icon-box discord">
                        <ion-icon name="logo-discord"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-box twitter">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-box facebook">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="newsletter">
                <h2 className="h2">Newsletter</h2>
                <div className="wrapper">
                  <p>
                    Subscribe to our newsletter to be among the first to keep up with the latest updates.
                  </p>
                  <form action="#">
                    <input type="email" name="email" placeholder="Email Address" required />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>




            {/* END ASIDE */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
