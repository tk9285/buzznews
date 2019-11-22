import React from "react";
import "../App.css";
import { IoMdMenu, IoMdSearch } from "react-icons/io";

class Footer extends React.Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="footer" className="footer">
        <div className="box">
          <div className="innerBox">
            <IoMdSearch size={30}  />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
