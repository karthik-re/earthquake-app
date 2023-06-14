import React from "react";

import style from "./DummyContent.module.css";

const Dummy = () => {
  return (
    <div className={style.container}>
      <h3>What is site?</h3>
      <p>
        Hello. Thank you for visiting my project. I have built this sample
        webpage using React. I wanted to practice the things I have learnt and I
        found this API when I was creating a mobile app for the same in 2020. I
        mainly wanted to showcase what I can do with React. Please feel free to
        navigate the site and contact me if you want to know more.
      </p>
      <h3>How did you build this project?</h3>
      <p>
        I have mainly used react-router to build this sample project. I tried to
        use it wherever possible including form submission (filter data
        submission in the earthquakes page). The most challenging part of this
        was implementation of the 'Apply' and 'Clear' button functionality.
        Apply was easier compared to Clear as I could use the react-router form
        submission capability. For Clear I had to research a bit and found that
        the usage of useSubmit() was what was required to programatically submit
        the form and set the input fields to default. Another challenging thing
        for me was handling the double slider (which was created using the
        react-slider package)
      </p>
      <h3>How do I navigate this site?</h3>
      <p>
        Click on the links in the header to navigate between pages. Earthquakes
        page has information related to earthquakes which was taken from the
        official USGS earthquake API. Find more about this
        <a href="https://earthquake.usgs.gov/fdsnws/event/1/."> here</a>. Use
        the filters on the left handside to get relevant information. Then use
        the "Clear" button to set the filters back to default values. The
        weather api portion is still under work. I may or may not implement it
        here in this project. Click on <b>"About"</b> in the footer to see more
        of my work.
      </p>
    </div>
  );
};

export default Dummy;
