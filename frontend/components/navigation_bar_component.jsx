import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../reducers/session/session_actions';
import { Link } from 'react-router-dom';
import CartDropdown from '../components/cart_dropdown_component';
import { toggleCartHidden } from '../reducers/cart/cart_actions';
import { withRouter } from 'react-router-dom';


class NagivationBar extends React.Component{
  constructor(){
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout().then(()=>{this.props.history.push('/')})
  }


  render(){

    
    const { logout, currentUser, toggleCartHidden, hidden } = this.props;
    
      let content;
     
          content = <div className="header">
                        <Link to='/shop'><img className='logo' src={window.img1}/></Link>
                        {currentUser
                         ? <div className='right-bar-content'>
                            <button className='cart' onClick={toggleCartHidden}>
                                <i className="fas fa-shopping-cart"></i>      
                            </button>
                            <button onClick={this.handleLogout}>Log Out</button>
                           </div>
                          : null
                        }
                        
                        {hidden 
                            ? null
                            :
                            <div className='DropDown-Background'onClick={toggleCartHidden}>
                                <div onClick={ e => e.stopPropagation()}>
                                    <CartDropdown />
                                </div>
                            </div>
                        }
                    </div>
      
     
    return(
      <div>
          {content}
      </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
      return({currentUser: state.session.id,
            hidden: state.cart.hidden,
            cartItems: state.cart.cartItems,
            history: ownProps.history
        })
}

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
  })


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NagivationBar));