import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child compoment Did mount.");

    const data = await fetch("https://api.github.com/users/pvjraju");

    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Kallal Gang");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Componet Did Mount");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will un Mount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child render");
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pvjraju26</h4>
      </div>
    );
  }
}

export default UserClass;
