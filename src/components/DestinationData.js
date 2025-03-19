import { Component } from "react";
import "./DestinationStyles.css";
import Des1 from "../image/des1.jpg";
import Des2 from "../image/des2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>
            <b>{this.props.heading}</b>
          </h2>
          <p>
            <b>{this.props.text}</b>
          </p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
