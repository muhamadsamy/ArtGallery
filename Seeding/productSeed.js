


import mongoose from 'mongoose';
import Product from '../Server/models/product.js';
import connectDB from "../Server/Models/db.js";

connectDB(); // Ensure database connection is established

const products = [
  // Painting
  {
    Name: 'Sunset in the Mountains',
    Description: 'A beautiful landscape painting capturing a serene sunset.',
    Price: 299.99,
    Stock: 10,
    Image: 'https://i.pinimg.com/564x/6c/99/d4/6c99d4f49d82199b02bc3e6350dac902.jpg',
    Category:'Painting',
    Status: 'available',
  },
  {
    Name: 'Abstract Colors',
    Description: 'An abstract painting with vibrant colors and dynamic shapes.',
    Price: 199.99,
    Stock: 8,
    Image: 'https://i.pinimg.com/564x/c9/4a/2c/c94a2cd8840594fcd815bc35eed79688.jpg',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Floral Artwork',
    Description: 'A floral painting with intricate details and lively colors.',
    Price: 249.99,
    Stock: 5,
    Image: 'https://i.pinimg.com/564x/ac/ea/e1/aceae19d814a9b529dbe19d912ea39df.jpg',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Cityscape',
    Description: 'A cityscape painting capturing the essence of urban life.',
    Price: 179.99,
    Stock: 12,
    Image: 'https://i.pinimg.com/564x/46/bb/0f/46bb0f006fa810a457fc39e7d1e44217.jpg',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Still Life',
    Description: 'A still life painting featuring everyday objects.',
    Price: 159.99,
    Stock: 6,
    Image: 'https://i.pinimg.com/564x/87/d8/4f/87d84f6a5956fa0f7a50e85cb03bc8f6.jpg',
    Category: 'Painting',
    Status: 'available',
  },
  {
    Name: 'Abstract Expressionism',
    Description: 'An expressive abstract painting exploring emotions through colors and shapes.',
    Price: 349.99,
    Stock: 4,
    Image: 'https://i.pinimg.com/564x/72/f2/af/72f2afbdf57d38ba17ba07b91ff6cf14.jpg',
    Category: 'Painting',
    Status: 'available',
  },
  // Sculptures
  {
    Name: 'Marble Statue',
    Description: 'A classic marble sculpture depicting a mythical figure.',
    Price: 799.99,
    Stock: 5,
    Image: 'https://i.pinimg.com/564x/6e/79/f0/6e79f06f274f5b28db146668b82406f8.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Bronze Bust',
    Description: 'A bronze bust sculpture of a famous historical figure.',
    Price: 599.99,
    Stock: 3,
    Image: 'https://i.pinimg.com/564x/cf/90/83/cf9083300ffe89198cfc8eec8c7a9f29.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Abstract Sculpture',
    Description: 'An abstract sculpture with intricate shapes and textures.',
    Price: 499.99,
    Stock: 7,
    Image: 'https://i.pinimg.com/564x/b2/31/c5/b231c5e9268b643d1904efbdcf55fd0a.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Wood Carving',
    Description: 'A wood carving depicting animals in their natural habitat.',
    Price: 399.99,
    Stock: 6,
    Image: 'https://i.pinimg.com/564x/46/51/a2/4651a25aee7ff45f428ef1050ff29f9e.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Metal Sculpture',
    Description: 'A modern metal sculpture exploring geometric forms.',
    Price: 649.99,
    Stock: 9,
    Image: 'https://i.pinimg.com/564x/69/57/df/6957df33d1ae679de2385dcbae3fb6a8.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  {
    Name: 'Glass Art',
    Description: 'A delicate glass sculpture with Horse shape.',
    Price: 299.99,
    Stock: 8,
    Image: 'https://i.pinimg.com/564x/f2/c5/0b/f2c50b5665d50d7d446888f3a37ff248.jpg',
    Category: 'Sculptures',
    Status: 'available',
  },
  // Photography
  {
    Name: 'City Lights at Night',
    Description: 'A stunning photograph capturing city lights at night.',
    Price: 149.99,
    Stock: 15,
    Image: 'https://i.pinimg.com/564x/dc/2f/42/dc2f428e4118df7cb6555d654b293fa1.jpg',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Nature in Macro',
    Description: 'Close-up photograph of intricate details of Animals in  nature.',
    Price: 99.99,
    Stock: 20,
    Image: 'https://i.pinimg.com/564x/16/2b/8d/162b8d073e507e16bab83c52cd0544bd.jpg',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Portrait Photography',
    Description: 'Portraits capturing the essence of human emotions.',
    Price: 179.99,
    Stock: 18,
    Image: 'https://i.pinimg.com/564x/8d/ec/de/8decde5a2513f2a3d63fa5f5d7412fd2.jpg',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Wildlife Photography',
    Description: 'Photographs of wildlife in their natural habitats.',
    Price: 129.99,
    Stock: 25,
    Image: 'https://i.pinimg.com/564x/af/44/dc/af44dcf6e95c8793802ca642b5b806e6.jpg',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Abstract Photography',
    Description: 'Abstract photographs exploring light, shadow, and texture.',
    Price: 159.99,
    Stock: 22,
    Image: 'https://i.pinimg.com/564x/fc/4d/48/fc4d487c20d77a60d94c9f515d566638.jpg',
    Category: "Photography",
    Status: 'available',
  },
  {
    Name: 'Travel Photography',
    Description: 'Photographs capturing the beauty of landscapes and cultures from around the world.',
    Price: 199.99,
    Stock: 17,
    Image: 'https://i.pinimg.com/564x/db/a3/41/dba34173323ce95b3eb92b570c3391d9.jpg',
    Category: "Photography",
    Status: 'available',
  },
  // MixedMedia
  {
    Name: 'Collage of Memories',
    Description: 'Mixed media artwork combining photos, fabrics, and paints.',
    Price: 399.99,
    Stock: 7,
    Image: 'https://i.pinimg.com/564x/a3/41/d0/a341d012a70884b09a5fa987944377d7.jpg',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Digital Art Fusion',
    Description: 'Digital mixed media artwork blending traditional and digital elements.',
    Price: 299.99,
    Stock: 10,
    Image: 'https://i.pinimg.com/564x/23/ac/c7/23acc79bb6c5032039f4cc83d6b8c1e2.jpg',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Textile Art',
    Description: 'Artwork combining textiles and embroidery to create unique patterns.',
    Price: 279.99,
    Stock: 6,
    Image: 'https://i.pinimg.com/564x/68/bd/9c/68bd9c7d6ae160b4d2e62e50592e964c.jpg',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Assemblage Art',
    Description: 'Three-dimensional artwork created from found objects and materials.',
    Price: 349.99,
    Stock: 8,
    Image: 'https://i.pinimg.com/564x/10/5c/92/105c925c3168e7609626398845e6e9d8.jpg',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Mixed Media Sculpture',
    Description: 'Sculpture combining various materials like wood, plastic, and clay.',
    Price: 449.99,
    Stock: 5,
    Image: 'https://i.pinimg.com/564x/64/6e/b2/646eb29a9372e8cdb79b492bb7b8593b.jpg',
    Category: 'MixedMedia',
    Status: 'available',
  },
  {
    Name: 'Digital Collage',
    Description: 'Digital artwork created by collaging images and graphics.',
    Price: 199.99,
    Stock: 12,
    Image: 'https://i.pinimg.com/564x/d2/45/19/d245194413745e2e6cc1537c08f09049.jpg',
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

