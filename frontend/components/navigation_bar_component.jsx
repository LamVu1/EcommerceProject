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
      if(currentUser){
          content = <div className="header">
                        <Link className='logo' to='/shop'>Logo</Link>
                        <div className='right-bar-content'>
                            <button className='cart' onClick={toggleCartHidden}>
                                <i className="fas fa-shopping-cart"></i>      
                            </button>
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
      }
     
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