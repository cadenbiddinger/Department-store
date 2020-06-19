50.times do
  Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    department: Faker::Commerce.department
  )
end

puts "50 Products Seeded"
