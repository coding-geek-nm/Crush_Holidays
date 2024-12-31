import React from 'react';
import './PopularCards.css';
const PopularCards = () => {
  const popularPlaces = [
    {
        title: 'OOTY',
        description: "Ooty, also known as Udhagamandalam, is a charming hill station in Tamil Nadu, often referred to as the 'Queen of Hill Stations.' Nestled in the Nilgiri Hills, Ooty is renowned for its picturesque landscapes, lush tea gardens, and colonial-era architecture. The town offers a tranquil retreat with its serene lakes, vibrant botanical gardens, and the iconic Nilgiri Mountain Railway. Ooty’s pleasant climate, combined with its breathtaking views, makes it a favorite destination for nature lovers and honeymooners alike.",
        image: 'https://img.cdn.zostel.com/blog_photo/old/botanical_garden_6SOT8IV.jpg',
    },
    {
        title: 'CHIKMAGALUR',
        description: "Chikmagalur, located in Karnataka, is a serene hill station known for its coffee plantations and misty landscapes. It is a haven for coffee enthusiasts and nature lovers, with its aromatic estates and breathtaking views of the Western Ghats. Chikmagalur offers a perfect blend of adventure and relaxation, with trekking trails, waterfalls, and wildlife sanctuaries. Its tranquil ambiance and rich history make it an ideal destination for a peaceful getaway, Chikmagalur has something for everyone.",
        image: 'https://mediaim.expedia.com/destination/2/c2227fccaa5d9c368c44ef73d8a207cd.jpg',
    },
    {
      title: 'COORG',
      description: 'Coorg, also known as Kodagu, is a picturesque hill station located in Karnataka, renowned for its lush coffee plantations, sprawling hills, and tranquil ambiance. The mist-covered mountains, cascading waterfalls, and vibrant green landscapes make it a haven for nature enthusiasts and adventure seekers alike. Coorg is also home to ancient temples, vibrant wildlife, and rich cultural traditions, offering visitors a perfect blend of natural beauty and heritage. Whether it’s trekking, coffee tours',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDzn7JZ3PrLD50TRloq2jee6wFvyRvM6d0g&s'
  }
  ,
    {
        title: 'WAYANAD',
        description: "Wayanad, located in Kerala, is a captivating hill station known for its lush greenery, pristine waterfalls, and rich cultural heritage. The region is home to sprawling spice plantations, ancient caves, and scenic trekking trails that attract adventure seekers and nature enthusiasts. Wayanad’s wildlife sanctuaries, serene lakes, and vibrant traditions make it a unique blend of natural beauty and cultural charm. It’s an ideal destination for those looking to immerse themselves in Kerala’s tranquil and vibrant landscape.",
        image: 'https://i0.wp.com/www.orientalschool.com/wp-content/uploads/2023/04/a-view-of-tea-gardens-OG-1199x627-1.png?fit=1199%2C627&ssl=1',
    },
];


  return (
    <div className="popular">
      <div className="popular-heading">TOP DESTINATIONS </div>
      <div className="popular-cards-container">
        {popularPlaces.map((place, index) => (
          <div className="popular-card" key={index}>
            <div
              className="popular-card-image"
              style={{
                backgroundImage: `url(${place.image})`,
              }}
            >
              <div className="popular-card-title">{place.title}</div>
            </div>
            <div className="popular-card-content">
              <p className="popular-card-description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCards;

