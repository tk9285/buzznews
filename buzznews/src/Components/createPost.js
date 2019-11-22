import React, { Component } from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
import Axios from "axios";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      submit: false
    };
  }
  onSubmit = e => {
    e.preventDefault();
    console.log("state", this.state);
    Axios.post(`https://5dced5b175f9360014c26447.mockapi.io/buzznews`, {
      description: this.state.description,
      title: this.state.title,
      image: this.state.imageUrl
    }).then(res => {
      console.log("res");
      this.props.addSportStories(res.data);
      this.setState({
        submit: true
      });
      setTimeout(() => {
        this.setState({
          submit: false
        });
      }, 1000);
      window.location.reload();
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div id="createPost" className="Home">
        <div className="Story createPost" style={{height: "80vh"}}>
          <div className="Headline" style={{ backgroundColor: "#b0c4de" }}>
            <b> CREATE A POST</b>
          </div>
          <div className="form">
            <div className="formContent">
              <form className="formStyle">
                {this.state.submit && (
                  <div className="row">
                    <b className="success"> Post Submitted Succefully</b>
                  </div>
                )}
                <div className="row">
                  <label className="label"> Title: </label>
                  <input
                    name="title"
                    type="text"
                    className="input"
                    value={this.state.title}
                    onChange={e => this.changeHandler(e)}
                    required
                  />
                </div>
                <div className="row">
                  <label className="label"> Description: </label>
                  <input
                    name="description"
                    type="text"
                    className="input"
                    value={this.state.description}
                    onChange={e => this.changeHandler(e)}
                    required
                  />
                </div>
                <div className="row">
                  <label className="label"> Image URL: </label>
                  <input
                    name="imageUrl"
                    type="text"
                    className="input"
                    value={this.state.imageUrl}
                    onChange={e => this.changeHandler(e)}
                    required
                  />
                </div>

                <div className="btnrow">
                  <button
                    type="submit"
                    className="btn"
                    onClick={e => this.onSubmit(e)}
                  >
                    Submit Post
                  </button>
                </div>
              </form>
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
    );
  }
}

export default CreatePost;
