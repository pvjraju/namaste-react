import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"P.V.J.Raju (function)"}
          location={"Kallal_Fucntional"}
        />
      </div>
    );
  }
}

export default About;
