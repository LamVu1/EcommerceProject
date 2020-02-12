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

product1 = Product.create!(title: 'Nike Air Force 1 07', description: 'Foam midsole
Metal "AF1" dubrae
Perforations on the toe
Rubber sole
Shown: White/White
Style: 315122-111', price: 90)
file1_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1-1.jpg')
file1_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1-2.jpg')
file1_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1-5.jpg')
file1_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1-4.jpg')
file1_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe1-3.jpg')
product1.photos.attach(io: file1_1, filename: 'shoe1-1.jpg')
product1.photos.attach(io: file1_2, filename: 'shoe1-2.jpg')
product1.photos.attach(io: file1_3, filename: 'shoe1_3.jpg')
product1.photos.attach(io: file1_4, filename: 'shoe1_4.jpg')
product1.photos.attach(io: file1_5, filename: 'shoe1_5.jpg')


product2 = Product.create!(title: 'Nike Air Max 270 React', description: 'Colors are inspired by OG Nike hiking campaigns.
The Max Air 270 unit and full Nike React foam midsole deliver all-day comfort from heel to toe.
Nike React technology delivers an extremely smooth ride, reduces weight and adds flexibility.
Woven fabric provides a soft, lightweight fit and feel.
Soft, padded collar with a low cut design feels comfortable.
Heel-to-toe rubber adds traction and durability.
Shown: Light Orewood Brown/Sail/Khaki/Hyper Crimson
Style: CU3014-181', price: 160)
file2_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe2-1.jpg')
file2_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe2-2.jpg')
file2_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe2-3.jpg')
file2_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe2-4.jpg')
file2_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe2-5.jpg')
product2.photos.attach(io: file2_1, filename: 'shoe2-1.jpg')
product2.photos.attach(io: file2_2, filename: 'shoe2-2.jpg')
product2.photos.attach(io: file2_3, filename: 'shoe2-3.jpg')
product2.photos.attach(io: file2_4, filename: 'shoe2-4.jpg')
product2.photos.attach(io: file2_5, filename: 'shoe2-5.jpg')


product3 = Product.create!(title: 'Nike Air Max 1 DNA Ch. 1', description: 'Original 91 Air Huarache Run color blocking creates a throwback vibe.
Huarache lettering on the heel replaces the Nike Air logo to emphasize the mash-up design.
Neoprene tongue adds soft comfort around the ankle.
Foam midsole with Nike Air cushioning gives you a plush underfoot feel.
Rubber outsole with thick tread adds durable traction.
Shown: White/Royal Blue/Scream Green/Black
Style: AR3863-100', price: 130)
file3_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe3-1.jpg')
file3_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe3-2.jpg')
file3_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe3-3.jpg')
file3_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe3-4.jpg')
file3_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe3-5.jpg')
product3.photos.attach(io: file3_1, filename: 'shoe3-1.jpg')
product3.photos.attach(io: file3_2, filename: 'shoe3-2.jpg')
product3.photos.attach(io: file3_3, filename: 'shoe3-3.jpg')
product3.photos.attach(io: file3_4, filename: 'shoe3-4.jpg')
product3.photos.attach(io: file3_5, filename: 'shoe3-5.jpg')


product4 = Product.create!(title: 'Nike Air Max Excee', description: 'Visible Air unit is visible through 3 windows for an updated look.
A foam midsole and outsole with rubber pods provide lightweight comfort and durability.
Elongated design lines honor the Air Max 90 while modernizing it in a provocative way.
Product Details
Mesh, leather and suede upper with synthetic leather overlays
Shown: White/Bright Cactus/Track Red/Hyper Blue
Style: CD4165-101', price: 90)
file4_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe4-1.jpg')
file4_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe4-2.jpg')
file4_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe4-3.jpg')
file4_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe4-4.jpg')
file4_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe4-5.jpg')
product4.photos.attach(io: file4_1, filename: 'shoe4-1.jpg')
product4.photos.attach(io: file4_2, filename: 'shoe4-2.jpg')
product4.photos.attach(io: file4_3, filename: 'shoe4-3.jpg')
product4.photos.attach(io: file4_4, filename: 'shoe4-4.jpg')
product4.photos.attach(io: file4_5, filename: 'shoe4-5.jpg')


product5 = Product.create!(title: 'Nike CruzrOne (Bright Crimson)', description: 'The outsole is angled to create an incredibly smooth heel-to-toe transition during use.
tacked Nike React foam in the heel feels incredibly soft and tapers to the toe, allowing you to move freely.
The low-cut collar adds a sleek, streamlined look. Thick padding and super-soft wool lining add to the comfort.
No-sew details combine with stitched overlays for added durability, while mesh and perforations on the sides help your foot breathe.
Rubber sole adds traction and durability.
Wool lining is quick-drying and can be worn with or without socks.
Midsole design mimics circular pattern on the heel for a unified look.
Traditional lacing
Shown: Bright Crimson/White/Black/Electric Green
Style: CD7307-600', price: 150)
file5_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5-1.jpg')
file5_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5-2.jpg')
file5_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5-3.jpg')
file5_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5-4.jpg')
file5_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe5-5.jpg')
product5.photos.attach(io: file5_1, filename: 'shoe5-1.jpg')
product5.photos.attach(io: file5_2, filename: 'shoe5-2.jpg')
product5.photos.attach(io: file5_3, filename: 'shoe5-3.jpg')
product5.photos.attach(io: file5_4, filename: 'shoe5-4.jpg')
product5.photos.attach(io: file5_5, filename: 'shoe5-5.jpg')


product6 = Product.create!(title: 'NikeCourt Air Zoom Vapor Cage 4', description: 'Medial lace eyestays are covered for added durability while sliding.
1/2-length sleeve gives you a sock-like fit.
Designed for use on hard court surfaces.
Product Details
Removable insole
Shown: White/Gridiron/Wheat/Laser Crimson
Style: CD0424-105
', price: 150)
file6_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6-1.jpg')
file6_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6-2.jpg')
file6_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6-3.jpg')
file6_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6-4.jpg')
file6_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe6-5.jpg')
product6.photos.attach(io: file6_1, filename: 'shoe6-1.jpg')
product6.photos.attach(io: file6_2, filename: 'shoe6-2.jpg')
product6.photos.attach(io: file6_3, filename: 'shoe6-3.jpg')
product6.photos.attach(io: file6_4, filename: 'shoe6-4.jpg')
product6.photos.attach(io: file6_5, filename: 'shoe6-5.jpg')


product7 = Product.create!(title: 'NikeCourt Air Zoom Zero' , description: 'Full-length Zoom Air unit is curved to deliver responsive cushioning.
Integrated crash pad helps promote a smooth heel-to-toe transition.
1/2 sleeve provides a snug, sock-like fit.
Gilly straps on the medial and lateral side integrate with the laces for a customizable fit.
Midsole foam on top of the front Zoom Air unit brings the unit closer to the ground.
Midsole foam underneath the back of the Zoom Air unit brings the unit closer to your heel.
Outsole is cored out in the middle to reduce weight and show off the Zoom Air unit.
Outsole material wraps over the toe on the medial side for added durability while sliding.
Removable insole
Shown: Black/Volt/White
Style: AA8018-007', price: 130)
file7_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7-1.jpg')
file7_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7-2.jpg')
file7_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7-3.jpg')
file7_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7-4.jpg')
file7_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe7-5.jpg')
product7.photos.attach(io: file7_1, filename: 'shoe7-1.jpg')
product7.photos.attach(io: file7_2, filename: 'shoe7-2.jpg')
product7.photos.attach(io: file7_3, filename: 'shoe7-3.jpg')
product7.photos.attach(io: file7_4, filename: 'shoe7-4.jpg')
product7.photos.attach(io: file7_5, filename: 'shoe7-5.jpg')


product8 = Product.create!(title: 'Nike Air Max Impact', description: 'Pressure-Tested Cushioning
Visible Max Air cushioning under the heel helps absorb impact from hard landings.
Lightweight Heel Support
Molded heel clip inspired by the Air Max 270 is light and helps keep your foot stable.
2 bands extend up each side of the shoe that the laces feed through. When you lace up, they pull down over your foot to lock you in.
Supportive Ankle Comfort
Padded collar provides comfort and support up through the ankle.
Rubber wraps up forefoot for durability.
Rubber outsole with herringbone details provides traction.
Lightweight mesh material with reinforced toe
Resilient foam midsole
Synthetic leather and textile materials in upper', price: 90)
file8_1 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8-1.jpg')
file8_2 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8-2.jpg')
file8_3 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8-3.jpg')
file8_4 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8-4.jpg')
file8_5 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8-5.jpg')
product8.photos.attach(io: file8_1, filename: 'shoe8-1.jpg')
product8.photos.attach(io: file8_2, filename: 'shoe8-2.jpg')
product8.photos.attach(io: file8_3, filename: 'shoe8-3.jpg')
product8.photos.attach(io: file8_4, filename: 'shoe8-4.jpg')
product8.photos.attach(io: file8_5, filename: 'shoe8-5.jpg')


# product9 = Product.create!(title: 'test shoe 9', description: 'test shoe 9 description', price: 100)
# file9 = open('https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/shoe8.jpg')
# product9.photos.attach(io: file9, filename: 'shoe9.jpg')