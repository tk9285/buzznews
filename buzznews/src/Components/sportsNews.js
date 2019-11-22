import React, { Component } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown
} from "react-icons/fa";

class SportsNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      active: false,
      error: false
    };
  }

  nextStory = () => {
    const maxValue = this.props.sportStories && this.props.sportStories.length;
    if (this.state.currentIndex >= maxValue - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: Math.min(this.state.currentIndex + 1, maxValue)
      });
    }
  };

  previouStory = () => {
    const maxValue = this.props.sportStories && this.props.sportStories.length;
    if (this.state.currentIndex <= 0) {
      this.setState({
        currentIndex: maxValue - 1
      });
    } else {
      this.setState({
        currentIndex: Math.min(this.state.currentIndex - 1, maxValue)
      });
    }
  };

  clickMore = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    var image =
      "https://static01.nyt.com/images/2019/11/15/science/15HOSPITALS/15HOSPITALS-thumbStandard.jpg";
    return (
      <div id="sportsNews">
        <div className="Home">
          <div className="Story">
            <div className="Headline" style={{ backgroundColor: "#b0c4de" }}>
              {this.state.error ? "No Story Found" : <b>SPORTS NEWS</b>}
            </div>
            <div className="content">
              <div className="leftContent">
                {this.state.active ? (
                  <div className="description">
                    <p className="mobilepara">
                      {this.props.sportStories &&
                        this.props.sportStories[this.state.currentIndex]
                          .description}
                    </p>
                  </div>
                ) : (
                  <div className="topHeading">
                    <h2>
                      {" "}
                      {this.props.sportStories &&
                        (this.props.sportStories[this.state.currentIndex]
                          .title ||
                          this.props.sportStories[this.state.currentIndex]
                            .name)}
                    </h2>
                  </div>
                )}
                <div className="description">
                  <p className="para">
                    {this.props.sportStories &&
                      this.props.sportStories[this.state.currentIndex]
                        .description}
                  </p>
                  <div className="moreInfo">
                    <button
                      type="submit"
                      className="roundButton"
                      onClick={() => this.clickMore()}
                    >
                      Click Here for more info.
                    </button>
                  </div>
                </div>
                <div className="arrowContainer">
                  <button
                    type="submit"
                    className="previousBtn"
                    onClick={() => this.previouStory()}
                  >
                    <FaRegArrowAltCircleLeft size={30} className="alignLeft" />
                    Previous Story
                  </button>
                  <button
                    type="submit"
                    className="nextBtn"
                    onClick={() => this.nextStory()}
                  >
                    Next Story
                    <FaRegArrowAltCircleRight
                      size={30}
                      className="alignRight"
                    />
                  </button>
                </div>
              </div>
              <div className="rightContent">
                <img
                  src={
                    this.props.sportStories &&
                    this.props.sportStories[this.state.currentIndex].image
                  }
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="arrowsContainer">
            <a href="#header">
              <FaRegArrowAltCircleUp size={70} className="alignLeft" />
            </a>
            <a href="#footer">
              {" "}
              <FaRegArrowAltCircleDown size={70} className="alignLeft" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SportsNews;
