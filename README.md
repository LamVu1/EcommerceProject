# [MyShoeShop](https://myshoeshop.herokuapp.com/#/)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shop.png)
# Overview
MyShoeShop, a website inspired by Nike.com, an online shoe store for users to shop for shoes.

## Features include:
- Users are able to log in, sign up, and log out.
- Users are able like to a product.
- Users are able to add a product to their shopping cart.
- Users can proceed to checkout and use Stripe API to make payment.

# Technologies
- Database: [PostgreSQL](https://www.postgresql.org/)
- Backend: [Ruby on Rails](https://rubyonrails.org/)
- Frontend Components: [React.js](https://reactjs.org/)
- Frontend State: [Redux](https://redux.js.org/)
- Cloud Storage: [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/)

MyShoeShop backend utilizes Ruby on Rails web application framework and PostgreSQL, storing user's account information and querying data. I used Jbuilder to send JSON objects from my backend to the frontend. I used React.js with Redux for state managment and building user interfaces. I also used React-router and Jquery for routing and interacting with backend. I used Amazon Web Services S3 cloud storage for image hosting.

# Website Features
## Sign In/Sign Up
Allow the user to use the application's features only when signed in.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/signin.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/signup.png)


## Browsing Products
Allow the user to browse products. 

Users can sort products by name and price. 
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/sort.png)


Users can also search product by name.
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/search.png)


## Likes
Users can like or favorite a product on both the products page or the product's detail page.


![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/favoritesp.png)


![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/like.png)


## Profile
User's can view their favorite products on their profile page.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/favorites.png)


## Shopping Cart
User's can add a product to their shopping cart on the product's detail page after they select a shoe size. They can have multiple items of different size.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/productdetail.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoppingcart.png)

## Checkout 
User's when be sent  to the checkout page when they are ready. They can change the quantity or remove an item on this page.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/checkout.png)


User's can checkout using the Stripe test checkout component. They can enter the test card information displayed on the page to experience the checkout process.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/stripe.png)
