import React from "react";
import "../App.css";
import { IoMdMenu, IoMdSearch } from "react-icons/io";

class Header extends React.Component {
  state = {
    collapsed: true,
    toggle: false
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  sideNav = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  menu = () => {
    console.log("aa");
    return (
      <div className="w--nav-menu-open ">
        <div className="menuContent">
          <a href="#topStory">
            <button
              type="submit"
              className="menuButton"
              onClick={() => this.sideNav()}
            >
              Top Story
            </button>
          </a>
          <a href="#sportsNews">
            <button
              type="submit"
              className="menuButton"
              onClick={() => this.sideNav()}
            >
              Sports News
            </button>
          </a>
          <a href="#createPost">
            <button
              type="submit"
              className="menuButton"
              onClick={() => this.sideNav()}
            >
              Create Post
            </button>
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div id="header" className="Header">
        <div
          // className={
          //   this.state.toggle ? "leftSection  w--nav-menu-open " : "leftSection"
          // }
          className="leftSection"
          onClick={() => this.sideNav()}
        >
          <IoMdMenu size={60} />
          <div className="iconBorder">
            <IoMdSearch size={30} />
          </div>
        </div>

        <div className="rightSection">
          <h1 className="heading">BuzzNews</h1>
          {/* <a href="#topStory">
            <button type="submit" className="btn">
              Top Story
            </button>
          </a>
          <a href="#sportsNews">
            <button type="submit" className="btn">
              Sports News
            </button>
          </a>
          <a href="#createPost">
            <button type="submit" className="btn">
              Create Post
            </button>
          </a> */}
        </div>
        {this.state.toggle && this.menu()}
      </div>
    );
  }
}

export default Header;
