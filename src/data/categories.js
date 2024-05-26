const categories = [
  { 
      id: 1, 
      name: 'Yemek Odası', 
      image: require('../../assets/images/kitchen.jpg'),
      images: [
          { src: require('../../assets/images/kitchen/image1.jpg'), name: 'Albero Yemek Odası Takımı' },
          { src: require('../../assets/images/kitchen/image2.jpg'), name: 'Vanessa Yemek Odası Takımı' },
          { src: require('../../assets/images/kitchen/image3.jpg'), name: 'Rustik Yemek Odası Takımı' },
          { src: require('../../assets/images/kitchen/image4.jpeg'), name: 'Viola Yemek Odası Takımı' },
      ]
  },
  { 
      id: 2, 
      name: 'Oturma Odası', 
      image: require('../../assets/images/living_room2.jpg'),
      images: [
          { src: require('../../assets/images/living_room/image10.jpeg'), name: 'Mery Oturma Odası Takımı' },
          { src: require('../../assets/images/living_room/image11.jpg'), name: 'Lenor Oturma Odası Takımı' },
          { src: require('../../assets/images/living_room/image12.jpg'), name: 'Betty Oturma Odası Takımı' },
          { src: require('../../assets/images/living_room/image14.jpg'), name: 'Mitra Oturma Odası Takımı' },
      ]
  },
  { 
      id: 3, 
      name: 'Yatak Odası', 
      image: require('../../assets/images/image31.jpg'),
      images: [
          { src: require('../../assets/images/bedroom/image32.jpg'), name: 'Aysa Yatak Odası Takımı' },
          { src: require('../../assets/images/bedroom/image33.jpg'), name: 'Belta Yatak Odası Takımı' },
          { src: require('../../assets/images/bedroom/image34.jpg'), name: 'Ceda Yatak Odası Takımı' },
          { src: require('../../assets/images/bedroom/image30.jpg'), name: 'Dera Yatak Odası Takımı' },
          { src: require('../../assets/images/bedroom/bedroom.jpg'), name: 'Eyla Yatak Odası Takımı' },
          { src: require('../../assets/images/bedroom/bedroom2.jpg'), name: 'Fama Yatak Odası Takımı' },
      ]
  },
  { 
      id: 4, 
      name: 'Çocuk Odası', 
      image: require('../../assets/images/image24.jpg'),
      images: [
          { src: require('../../assets/images/child_room/image20.jpg'), name: 'Macera Çocuk Odası Takımı' },
          { src: require('../../assets/images/child_room/image21.jpeg'), name: 'Prenses Çocuk Odası Takımı' },
          { src: require('../../assets/images/child_room/image22.jpg'), name: 'Korsan Çocuk Odası Takımı' },
          { src: require('../../assets/images/child_room/image23.jpeg'), name: 'Uzay Çocuk Odası Takımı' },
      ]
  },
];

export default categories;
