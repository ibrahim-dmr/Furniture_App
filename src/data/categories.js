// categories.js

const categories = [
    { 
      id: 1, 
      name: 'Yemek Odası', 
      image: require('../../assets/images/kitchen.jpg'),
      images: [
        require('../../assets/images/kitchen/iameg1.jpg'),
        require('../../assets/images/kitchen/image2.jpg'),
        require('../../assets/images/kitchen/image3.jpg'),
        require('../../assets/images/kitchen/image4.jpeg'),

        // Diğer mutfak resimleri...
      ]
    },
    { 
      id: 2, 
      name: 'Oturma Odası', 
      image: require('../../assets/images/living_room2.jpg'),
      images: [
        require('../../assets/images/living_room/image10.jpeg'),
        require('../../assets/images/living_room/image11.jpg'),
        require('../../assets/images/living_room/image12.jpg'),
        require('../../assets/images/living_room/image14.jpg'),

        // Diğer oturma odası resimleri...
      ]
    },
    // Diğer kategoriler...

    { 
        id: 3, 
        name: 'Yatak Odası', 
        image: require('../../assets/images/image31.jpg'),
        images: [
          require('../../assets/images/bedroom/image32.jpg'),
          require('../../assets/images/bedroom/image33.jpg'),
          require('../../assets/images/bedroom/image34.jpg'),
          require('../../assets/images/bedroom/image30.jpg'),
          require('../../assets/images/bedroom/bedroom.jpg'),
          require('../../assets/images/bedroom/bedroom2.jpg'),

          // Diğer oturma odası resimleri...
        ]
      },

      { 
        id: 4, 
        name: 'Çocuk Odası', 
        image: require('../../assets/images/image24.jpg'),
        images: [
          require('../../assets/images/child_room/image20.jpg'),
          require('../../assets/images/child_room/image21.jpeg'),
          require('../../assets/images/child_room/image22.jpg'),
          require('../../assets/images/child_room/image23.jpeg'),
  
          // Diğer oturma odası resimleri...
        ]
      },
  ];
  
  export default categories;
  