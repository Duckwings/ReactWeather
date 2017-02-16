var React = require('react');

var WeatherForm = React.createClass ({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
    //  updates.city = city;
      this.props.onSearch(location);
    }
  },

  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter City Name"/>
        </div>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
