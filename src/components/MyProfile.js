import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state={name: '', description: '', check: false};

  handleInput = (e, filed) => {
    if (filed === 'check') {
      this.setState({
        'check': e.target.checked,
      })
    } else {
      this.setState({
        [filed]: e.target.value,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('your name is ' +  this.state.name);
    console.log('your description is ' + this.state.description);
  }

  render() {
    return (
      <div className="profile">
        <h2>My Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" 
            id="name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleInput(e, "name")}>
          </input>

          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea name="description"
          id="description"
          value={this.state.description}
          onChange={(e) => this.handleInput(e, "description")}>
          </textarea>

          <div className="agree">
            <input className="checkbox"
            type="checkbox"
            name="confirm"
            id="confirm"
            onChange={(e) => this.handleInput(e, "check")}/>
            <label className="mess" htmlFor="confirm">I have read the terms of conduct</label>
          </div>
          

          <input 
          className="submit"
          disabled={!this.state.name || !this.state.description || !this.state.check}
          type="submit"
          value="Submit"
          >
          </input>
        </form>
      </div>
    );
  }
}

export default MyProfile;


