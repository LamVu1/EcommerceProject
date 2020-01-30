# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
demoUser = User.create!(username: 'Demo', email: 'Demo@email.com', password: '123456')


Product.destroy_all

product1 = Product.create!(title: 'test shoe 1', description: 'test shoe description 1', price: 100)
file1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1.jpg')
product1.photos.attach(io: file1, filename: 'shoe1.jpg')


product2 = Product.create!(title: 'test shoe 2', description: 'test shoe 2 description', price: 100)
file2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/ezgif.com-webp-to-jpg.jpg')
product2.photos.attach(io: file2, filename: 'shoe2.jpg')

product3 = Product.create!(title: 'test shoe 3', description: 'test shoe 3 description', price: 100)
file3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/ezgif.com-webp-to-jpg+(2).jpg')
product3.photos.attach(io: file3, filename: 'shoe3.jpg')

product4 = Product.create!(title: 'test shoe 4', description: 'test shoe 4 description', price: 100)
file4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/ezgif.com-webp-to-jpg+(1).jpg')
product4.photos.attach(io: file4, filename: 'shoe4.jpg')

product5 = Product.create!(title: 'test shoe 5', description: 'test shoe 5 description', price: 100)
file5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/ezgif.com-webp-to-jpg+(3).jpg')
product5.photos.attach(io: file5, filename: 'shoe5.jpg')

product6 = Product.create!(title: 'test shoe 6', description: 'test shoe 6 description', price: 100)
file6 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5.jpg')
product6.photos.attach(io: file6, filename: 'shoe6.jpg')

product7 = Product.create!(title: 'test shoe 7', description: 'test shoe 7 description', price: 100)
file7 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6.jpg')
product7.photos.attach(io: file7, filename: 'shoe7.jpg')

product8 = Product.create!(title: 'test shoe 8', description: 'test shoe 8 description', price: 100)
file8 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7.jpg')
product8.photos.attach(io: file8, filename: 'shoe8.jpg')

product9 = Product.create!(title: 'test shoe 9', description: 'test shoe 9 description', price: 100)
file9 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8.jpg')
product9.photos.attach(io: file9, filename: 'shoe9.jpg')