import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 5,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child compoment Did mount.");
  }

  render() {
    const { name, location } = this.props;
    console.log("Child render");
    return (
      <div className="user-card">
        <h1>Count : {this.state.count} </h1>
        <h1>Count2 : {this.state.count2} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pvjraju26</h4>
      </div>
    );
  }
}

export default UserClass;
