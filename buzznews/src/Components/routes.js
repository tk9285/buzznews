import React, { Component } from "react";
import TopStoryNews from "./storyNews";
import SportsNews from "./sportsNews";
import CreatePost from "./createPost";
import Footer from "./footer";
import Header from "./Header";
import axios from "axios";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportStories: "",
      error: false
    };
  }

  componentWillMount = () => {
    axios
      .get("https://5dd2d9416625890014a6e1b3.mockapi.io/buzznews")
      .then(res => {
        console.log("re", res.data);
        const postData = res && res.data.data;
        const sportData = res && res.data;
        if (postData) {
          this.setState({
            sportStories: postData
          });
        } else {
          this.setState({
            sportStories: sportData
          });
        }
      })
      .catch(err => {
        console.log("error", err);
        this.setState({
          error: true
        });
      });
  };

  addSportStories = value => {
    let cloneSportsStories = [...this.state.sportStories];
    cloneSportsStories.push(value);
    this.setState({
      sportStories: cloneSportsStories
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TopStoryNews />
        <SportsNews sportStories={this.state.sportStories} />
        <CreatePost addSportStories={this.addSportStories} />
        <Footer />
      </div>
    );
  }
}

export default Routes;
