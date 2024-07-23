

import mongoose from 'mongoose';
import Product from '../Server/Models/Product.js';
import connectDB from "../Server/Models/db.js";

connectDB(); // Ensure database connection is established

const products = [
  // Painting
  {
    Name: 'Sunset in the Mountains',
    Description: 'A beautiful landscape painting capturing a serene sunset.',
    Price: 299.99,
    Stock: 10,
    Image: 'https://www.pinterest.com/pin/6473993210057224/',
    Category:'Painting',
    Status: 'available',
  },
  {
    Name: 'Abstract Colors',
    Description: 'An abstract painting with vibrant colors and dynamic shapes.',
    Price: 199.99,
    Stock: 8,
    Image: 'https://www.pinterest.com/pin/145663369216430159/',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Floral Artwork',
    Description: 'A floral painting with intricate details and lively colors.',
    Price: 249.99,
    Stock: 5,
    Image: 'https://www.pinterest.com/pin/145663369216492146/',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Cityscape',
    Description: 'A cityscape painting capturing the essence of urban life.',
    Price: 179.99,
    Stock: 12,
    Image: 'https://www.pinterest.com/pin/622833823494197549/',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Still Life',
    Description: 'A still life painting featuring everyday objects.',
    Price: 159.99,
    Stock: 6,
    Image: 'https://www.pinterest.com/pin/70437489019187/',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Abstract Expressionism',
    Description: 'An expressive abstract painting exploring emotions through colors and shapes.',
    Price: 349.99,
    Stock: 4,
    Image: 'https://www.pinterest.com/pin/455074737363981097/',
    Category: 'Painting',
    Status: 'available',
  },
  // Sculptures
  {
    Name: 'Marble Statue',
    Description: 'A classic marble sculpture depicting a mythical figure.',
    Price: 799.99,
    Stock: 5,
    Image: 'https://www.pinterest.com/pin/126100858312411608/',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Bronze Bust',
    Description: 'A bronze bust sculpture of a famous historical figure.',
    Price: 599.99,
    Stock: 3,
    Image: 'https://www.pinterest.com/pin/24347654226426550/',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Abstract Sculpture',
    Description: 'An abstract sculpture with intricate shapes and textures.',
    Price: 499.99,
    Stock: 7,
    Image: 'https://www.pinterest.com/pin/9077636742879115/',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Wood Carving',
    Description: 'A wood carving depicting animals in their natural habitat.',
    Price: 399.99,
    Stock: 6,
    Image: 'https://www.pinterest.com/pin/1688918594783638/',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Metal Sculpture',
    Description: 'A modern metal sculpture exploring geometric forms.',
    Price: 649.99,
    Stock: 9,
    Image: 'https://www.pinterest.com/pin/91620173664595104/',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Glass Art',
    Description: 'A delicate glass sculpture with Horse shape.',
    Price: 299.99,
    Stock: 8,
    Image: 'https://www.pinterest.com/pin/14566398772194710/',
    Category: 'Sculptures',
    Status: 'available',
  },
  // Photography
  {
    Name: 'City Lights at Night',
    Description: 'A stunning photograph capturing city lights at night.',
    Price: 149.99,
    Stock: 15,
    Image: 'https://www.pinterest.com/pin/295548794316108539/',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Nature in Macro',
    Description: 'Close-up photograph of intricate details of Animals in  nature.',
    Price: 99.99,
    Stock: 20,
    Image: 'https://www.pinterest.com/pin/134404370122666100/',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Portrait Photography',
    Description: 'Portraits capturing the essence of human emotions.',
    Price: 179.99,
    Stock: 18,
    Image: 'https://www.pinterest.com/pin/558798266281791098/',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Wildlife Photography',
    Description: 'Photographs of wildlife in their natural habitats.',
    Price: 129.99,
    Stock: 25,
    Image: 'https://www.pinterest.com/pin/2462974790550535/',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Abstract Photography',
    Description: 'Abstract photographs exploring light, shadow, and texture.',
    Price: 159.99,
    Stock: 22,
    Image: 'https://www.pinterest.com/pin/1337074887896178/',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Travel Photography',
    Description: 'Photographs capturing the beauty of landscapes and cultures from around the world.',
    Price: 199.99,
    Stock: 17,
    Image: 'https://www.pinterest.com/pin/381257924722118169/',
    Category: "Photography",
    Status: 'available',
  },
  // MixedMedia
  {
    Name: 'Collage of Memories',
    Description: 'Mixed media artwork combining photos, fabrics, and paints.',
    Price: 399.99,
    Stock: 7,
    Image: 'https://www.pinterest.com/pin/145663369209999078/',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Digital Art Fusion',
    Description: 'Digital mixed media artwork blending traditional and digital elements.',
    Price: 299.99,
    Stock: 10,
    Image: 'https://www.pinterest.com/pin/386394843044759783/',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Textile Art',
    Description: 'Artwork combining textiles and embroidery to create unique patterns.',
    Price: 279.99,
    Stock: 6,
    Image: 'https://www.pinterest.com/pin/6122149486758773/',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Assemblage Art',
    Description: 'Three-dimensional artwork created from found objects and materials.',
    Price: 349.99,
    Stock: 8,
    Image: 'https://www.pinterest.com/pin/326159198029364028/',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Mixed Media Sculpture',
    Description: 'Sculpture combining various materials like wood, metal, and clay.',
    Price: 449.99,
    Stock: 5,
    Image: 'https://www.pinterest.com/pin/20618110782918134/',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Digital Collage',
    Description: 'Digital artwork created by collaging images and graphics.',
    Price: 199.99,
    Stock: 12,
    Image: 'https://www.pinterest.com/pin/5911043259271010/',
    Category: 'MixedMedia',
    Status: 'available',
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Insert new products
    console.log('Products seeded successfully');
    process.exit(); // Exit process after seeding
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1); // Exit with failure
  }
};

seedProducts();
