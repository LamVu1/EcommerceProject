import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/session/session_actions';
import { withRouter } from "react-router";


class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(this.props.history.push('/shop'));
  }

  render() {

    const {username, email, password} = this.state;

    return (
      <div className='sign-in'>
        <h1>Sign In</h1>
        <form className='sign-in-form'>
            <input type="text" name='username' placeholder='Username' value={username} onChange={this.handleChange}/>
            <input type="text" name='password' placeholder='Password' value={password} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
})

const mapStateToProps = (state, ownProps) => {
  
  return(
    { 
      state: state,
      history: ownProps.history
    }
  )
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
