# [MyShoeShop](https://myshoeshop.herokuapp.com/#/)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shop.png)
# Overview
Scribbblez is a web application inspired by Dribbble a social media platform for designers and artists to share their artwork.

## Features include:
- Users are able to log in, sign up, and log out.
- Users are allowed to create posts and view posts.
- Users are allow to comment posts and like comments.
- Users can follow other users and like posts.

# Technologies
- Database: [PostgreSQL](https://www.postgresql.org/)
- Backend: [Ruby on Rails](https://rubyonrails.org/)
- Frontend Components: [React.js](https://reactjs.org/)
- Frontend State: [Redux](https://redux.js.org/)
- Cloud Storage: [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/)

Scribbblez backend utilizes Ruby on Rails web application framework and PostgreSQL, storing user's account information and querying data. I used Jbuilder to send JSON objects from my backend to the frontend. I used React.js with Redux for state managment and building user interfaces. I also used React-router and Jquery for routing and interacting with backend. I used Amazon Web Services S3 cloud storage for image hosting.

# Website Features
## Sign In/Sign Up
Allow the user to use the application's features only when signed in. User's can upload a profile picture when they are signing up.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/signin.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/signup.png)

Handling image preview:
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/imagepreview.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/productdetail.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoppingcart.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/checkout.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/stripe.png)


## Post
Allow the users to post images by either browsing file or drag and drop.

![alt text](https://github.com/LamVu1/Sribbble-Clone-App/blob/master/app/assets/images/Posting.gif)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/handleDrop.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/postexample.png)

Each post opens up at modal.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/modal.png)

## Likes and Comments
Users can leave comments and like a post and a comment.
A posts status detail will show the total likes and views this post received.

![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/like.png)

## Profile
User's can view their posts, liked posts, and other users they followed. User's can also leave a profile message or introduction for other user's to see.

![alt text](hhttps://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/favorites.png)



