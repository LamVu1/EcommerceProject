import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../reducers/session/session_actions';
import { Link } from 'react-router-dom';
import CartDropdown from '../components/cart_dropdown_component';
import { toggleCartHidden } from '../reducers/cart/cart_actions';


class NagivationBar extends React.Component{
  constructor(){
    super();
 
  }

  render(){

    
    const { logout, currentUser, toggleCartHidden, hidden } = this.props;
    
      let content;
     
          content = <div className="header">
                        <Link to='/shop'><img className='logo' src={window.img1}/></Link>
                        <div className='right-bar-content'>
                            <button className='cart' onClick={toggleCartHidden}>
                                <i className="fas fa-shopping-cart"></i>      
                            </button>
                            <button onClick={logout}>Log Out</button>
                        </div>
                        
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

const mapStateToProps = (state) => {
      return({currentUser: state.session.id,
            hidden: state.cart.hidden,
            cartItems: state.cart.cartItems
        })
}

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
  })


  export default connect(mapStateToProps, mapDispatchToProps)(NagivationBar);