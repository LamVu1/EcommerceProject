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
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then( res => this.props.history.push('/shop'));
  }

  handleDemo(e){
    

    // let demoUsername = "Demo".split('');
    // let demoPassword = [1,2,3,4,5,6];
  
    // this.setState({ username: '', password: '' });
    
    // document.getElementsByClassName('login-btn')['disabled'] = true;
    // document.getElementsByClassName('demo-login-btn')['disabled']= true

    e.preventDefault();
    const demo = {username: 'Demo', password: 123456}
    this.props.login(demo)
    .then( res => 
      {
        this.props.history.push('/shop')}
    );



    // const ghost = (string, field) => () => {
    //   if (string.length > 0) {
    //     this.setState({ [field]: this.state[field] + string[0] });        
    //     setTimeout(ghost(string.slice(1), field), 90);
    //   }
    // }
    //   const demoUsername = "Demo"; 
    //   const demoPassword = '123456';
    //   ghost(demoUsername, "username")();
    //   ghost(demoPassword, "password")();
      
    //   // const user = Object.assign({}, this.state);
    //   setTimeout( console.log(this.state), 1200);
    //   console.log(this.state)


  }

  render() {

    const {username, email, password} = this.state;

    return (
      <div className='sign-in'>
        <h1>Sign In</h1>
        <form className='sign-in-form'>
            <input type="text" name='username' placeholder='Username' value={username} onChange={this.handleChange}/>
            <input type="text" name='password' placeholder='Password' value={password} onChange={this.handleChange}/>
            <button className='login-btn' onClick={this.handleSubmit}>Submit</button>
            <button className='demo-login-btn' onClick={e => this.handleDemo(e)}>Demo User login</button>
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
