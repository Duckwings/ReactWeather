var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on react, i've built this for the
        complete web app developper course.
      </p>
      <p>
        Here are some of the tools i used
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - i used openWeatherMap to search for Weather
            data by city name
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
