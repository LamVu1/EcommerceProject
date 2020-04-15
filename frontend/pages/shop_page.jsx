import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../reducers/products/product_actions';
import ProductItem from '../components/product_item_component';
import SlideShow from '../components/slideshow';
import {fetchLikes} from '../reducers/likes/like_actions';
import { toggleLoader } from '../reducers/ui/ui_actions';
import {fetchCartItems} from '../reducers/cart/cart_actions'


class ShopPage extends React.Component {
   constructor(props){
       super(props);
       this.state ={
           products: [],
           search:''
       }
       this.handleTop = this.handleTop.bind(this);
       this.handleFilter = this.handleFilter.bind(this);
       this.handleHoverEnter = this.handleHoverEnter.bind(this);
       this.handleHoverLeave = this.handleHoverLeave.bind(this);
       this.handleSearch = this.handleSearch.bind(this);
       this.handleClear = this.handleClear.bind(this);

   }
    componentDidMount(){
        this.props.fetchAllProducts().then(products => this.setState({products: Object.values(products.products)}))
        this.props.fetchLikes()
        this.props.fetchCartItems()
        this.props.toggleLoader()
        setTimeout(()=>{this.props.toggleLoader()}, 500);

    }
    
    handleTop(){
        document.documentElement.scrollTop = 0;
    }

    handleSearch(e){
        e.preventDefault();
        this.setState({search: e.target.value}) 
    }


    handleHoverEnter(){
        let options = document.getElementsByClassName('filter-options')     
        options[0].style.display = "flex";          
    }

    handleHoverLeave(){
        let options = document.getElementsByClassName('filter-options')
        options[0].style.display = "none";
    }

    handleFilter(op){
         
        if(op==='low'){
            this.setState({products: this.state.products.sort((a,b)=> (a.price<b.price)?-1:1)}) 
        }
        else if(op==='high'){
            this.setState({products: this.state.products.sort((a,b)=> (a.price>b.price)?-1:1)}) 
        }
        else if(op==='A-Z'){
            this.setState({products: this.state.products.sort((a,b)=> (a.title<b.title)?-1:1)}) 
        }
        else if(op==='Z-A'){
            this.setState({products: this.state.products.sort((a,b)=> (a.title>b.title)?-1:1)}) 
        }
        else{
            return
        }   
    }

    handleClear(){
        this.setState({search: ''})
    }
  
    render(){
        


        let filteredSearch = this.state.products.filter((ele)=> ele.title.toLowerCase().includes(this.state.search.toLowerCase()))
        
        let products = filteredSearch.map((product, id)=>{
            return(
                <ProductItem 
                key = {id}
                item = {product}
                />
            )
        })

        
       
                    // <img src="https://c.static-nike.com/a/images/w_1920,h_400,c_fill,f_auto/e2f3e4b5-904a-4efd-9b4c-c6d261b57cf8/image.jpg" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_460,c_limit/ehgqwxonm1vk2pttvlq2/nike-running.jpg" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_460,c_limit/eb40b307-b29a-4222-bd7c-302f33365951/nike-skateboarding.png" alt=""/>
                    // <img src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_698,c_limit/tpfrbdg1bholbs6t9t3d/nike-soccer.jpg" alt=""/>
                    // <div>
                    //     BAR
                    // </div>
                // <div>
                //     <SlideShow />
                // </div>
        
        return(
            <div className='shop-page'>
                <div className='filter-search-div'>



                
                <div className='search-div'>
                    <form className='search-form'>
                        <input onChange={this.handleSearch} type="text" name="" value={this.state.search} placeholder='Search'/>
                        {this.state.search===''
                     

                        ?
                        <i className="fas fa-search"></i>
                        :
                        <div className='search-clear'><i onClick={this.handleClear} className="fas fa-times"></i></div>
                        }
                    </form>
                </div>
                <div className='filter-dropdown' onMouseLeave={this.handleHoverLeave}>
                    <div onMouseEnter={this.handleHoverEnter} className='filter-button'>Sort by:</div>
                    <div className='filter-options'>
                        <button className='filter-option' onClick={()=>this.handleFilter('low')}>Price: Low to High</button>
                        <button className='filter-option' onClick={()=>this.handleFilter('high')}>Price: High to Low</button>
                        <button className='filter-option' onClick={()=>this.handleFilter('A-Z')}>Alphabet: A to Z</button>
                        <button className='filter-option' onClick={()=>this.handleFilter('Z-A')}>Alphabet: Z to A</button>
                    </div>
                </div>
                </div>
                <div className='shop-page-shoes'>
                {products.length!==0
                ?products
                : <div className='empty-search'>No Items Found</div>
                }
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                    <div className='shop-empty-div'></div>
                </div>
                <div className='scroll-btn' onClick={this.handleTop}><i className="far fa-arrow-alt-circle-up"></i>
                <p>
                Back to Top
                </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    
    return(
        {
            products: Object.values(state.entities.products)
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchAllProducts: () => dispatch(fetchProducts()),
    fetchLikes: ()=>dispatch(fetchLikes()),
    toggleLoader: () => dispatch(toggleLoader()),
    fetchCartItems: ()=>dispatch(fetchCartItems())
})


export default connect(mapStateToProps, mapDispatchToProps )(ShopPage);
