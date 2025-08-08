import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount.");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1> This is the About us page.</h1>
        <User name={"P.V.J.Raju (function)"} location={"Kallal_Fucntional"} />

        <UserClass name={"P.V.J.Raju (Class)"} location={"Kallal_Class"} />

        <UserClass name={"P.V.J.Raju2 (Class)"} location={"Kallal_Class2"} />
      </div>
    );
  }
}

export default About;
