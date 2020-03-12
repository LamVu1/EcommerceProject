import React from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../reducers/session/session_actions';
import { Link } from 'react-router-dom';
import CartDropdown from '../components/cart_dropdown_component';
import { toggleCartHidden } from '../reducers/cart/cart_actions';
import { withRouter } from 'react-router-dom';
import {fetchCartItems} from '../reducers/cart/cart_actions'



class NagivationBar extends React.Component{
  constructor(){
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser!==null){
      this.props.fetchCartItems()
    }
}

  handleLogout(){
    this.props.logout().then(()=>{this.props.history.push('/')})
  }


  render(){
    
    const { logout, currentUser, hidden, toggleCartHidden, cartItems} = this.props;
    
    let itemCount = 0;
    cartItems.forEach((item)=>{
        itemCount+=item.quantity
    
      })
    
    let content;
    
    
    content = <div className="header">
                        <Link to='/shop'><img className='logo' src={window.img1}/></Link>
                            {
                              currentUser
                              ?
                              <div className='right-bar-content'>
                                <Link to='/profile/1' className='profile-container'>
                                    <img className='profile-img' src={window.profile}/>
                                </Link>
                                <button className='cart' onClick={toggleCartHidden}>
                                <i className="fas fa-shopping-cart"></i>  
                                  {
                                    itemCount!==0
                                    ?<p className='cart-item-count'>
                                       {itemCount}  
                                    </p>
                                    :null
                                  }
                                </button>
                                <button onClick={this.handleLogout}>Log Out</button>
                                </div>
                              :
                              null
                                
                              }
                                                     
                      
                      {hidden 
                          ? null
                          :
                          <div className='DropDown-Background'onClick={toggleCartHidden}>
                              <div onClick={ e => e.stopPropagation()}>
                                  <CartDropdown 
                                    cartItems = {cartItems}
                                  />
                              </div>
                          </div>
                      }
                        
                    </div>
      
     
    return(
      <div>
          {content}
          <div className='header-grey-bar'></div>
      </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  
    return(
      {currentUser: state.session.id,
        hidden: state.entities.cart.hidden,
        cartItems: Object.values(state.entities.cart.cartItems)
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    toggleCartHidden: ()=>dispatch(toggleCartHidden()),
    fetchCartItems: ()=>dispatch(fetchCartItems())
  })


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NagivationBar));