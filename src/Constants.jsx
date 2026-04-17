// src/Constants.js

// ✅ Import product images
import iphone12 from "./assets/iphone12x.jpg";
import iphone13 from "./assets/iphone13x.jpg";
import iphone14 from "./assets/iphone14.jpg";
import iphone15promax from "./assets/iphone15x.jpg";
import iphone16 from "./assets/iphone16x.jpg";
import iphone17 from "./assets/iphone17.jpg";
import galaxyS24 from "./assets/s24x.jpg";
import galaxyS23 from "./assets/s23x.jpg";
import galaxyS22 from "./assets/s22x.jpg";
import galaxyS21 from "./assets/s21x.jpg";
import ipad from "./assets/ipad.jpg";
import zfold5 from "./assets/galaxyfold.jpg";
import MacBook from "./assets/macbook.jpg";
import As1 from "./assets/Asus1.jpg";
import lenovo from "./assets/lenovo.jpg";
import HP1 from "./assets/HP1.jpg";
import vector1 from "./assets/vector1.jpg";
import vector2 from "./assets/vector2.jpg"; 
import As2 from "./assets/Asus2.jpg";
import ps5 from "./assets/ps5.jpg";
import ps4 from "./assets/ps4.jpg";
import note10 from "./assets/note10.jpg";
import note20 from "./assets/note20.jpg";
import G7 from "./assets/G7.jpg";
import G6 from "./assets/G6.jpg";
import x360 from "./assets/x360.jpg";
import core7 from "./assets/core7.jpg";
import AIR from "./assets/AIR.jpg";
import LOCKED from "./assets/LOCKED.jpg";
import pix1 from "./assets/pixel1.jpg";
import pix2 from "./assets/pixel2.jpg";
import mac1 from "./assets/mac1.jpg";
import mac2 from "./assets/mac2.jpg";
import dell from "./assets/dell1.jpeg";
import zbook from "./assets/Zbook.jpeg";
import G77 from "./assets/G7.jpeg";
import G8 from "./assets/G8.jpeg";
import M1 from "./assets/M1.jpeg";
import M22 from "./assets/M22.jpeg";
import M11 from "./assets/M11.jpeg";
import M12 from "./assets/M12.jpeg";
import M13 from "./assets/M13.jpeg";
import M14 from "./assets/M14.jpeg";
import M15 from "./assets/M15.jpeg";
import M16 from "./assets/M16.jpeg";
import M17 from "./assets/M17.jpeg";
import M18 from "./assets/M18.jpeg";
import M19 from "./assets/M19.jpeg";
import M20 from "./assets/M20.jpeg";
import Ali1 from "./assets/Ali1.jpeg";
import M21 from "./assets/M21.jpeg";
import Q3 from "./assets/Q3.jpeg";
import Q1 from "./assets/Q1.jpeg";
import Q2 from "./assets/Q2.jpeg";
import Q4 from "./assets/Q4.jpeg";
import Q5 from "./assets/Q5.jpeg";
import Q6 from "./assets/Q6.jpeg";
import Q7 from "./assets/Q7.jpeg";


// ✅ Categories with subcategories
export const CATEGORIES = [
  { name: "Phones", subcategories: ["iPhone", "Samsung", "Google Pixel"] },
  { name: "Tablets", subcategories: ["iPad", "Galaxy Fold"] },
  { name: "Accessories", subcategories: ["AirPods", "Apple Watch", "Other"] },
  { name: "Laptops", subcategories: ["MacBook", "HP", "Others"] },
  { name: "Games", subcategories: ["PlayStation", "Xbox", "Nintendo"] },
];


// ✅ Product list with iPhone 12 → iPhone 17 series
export const PRODUCTS = [
  {
    id: "30",
    name: "iPhone 12 Series",
    price: 430000 - 700000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone12,
    description: "Classic design with A14 Bionic chip and dual-camera system.",
    condition: "used",
    variants: [
      { id: "12a", name: "iPhone 12 64GB", price: 430000 },
      { id: "12b", name: "iPhone 12 Pro 128GB", price: 580000 },
      { id: "12c", name: "iPhone 12 Pro Max 256GB", price: 700000 },
    ],
  },
  {
    id: "31",
    name: "iPhone 13 Series",
    price: 730000 - 930000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone13,
    description: "Improved cameras, A15 Bionic chip, and cinematic mode.",
    condition: "new",
    variants: [
      { id: "13a", name: "iPhone 13 128GB", price: 730000 },
      { id: "13b", name: "iPhone 13 Pro 256GB", price: 880000 },
      { id: "13c", name: "iPhone 13 Pro Max 512GB", price: 930000 },
    ],
  },
  {
    id: "32",
    name: "iPhone 14 Series",
    price: 930000 - 1180000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone14,
    description: "Crash detection, satellite SOS, and advanced camera system.",
    condition: "new",
    variants: [
      { id: "14a", name: "iPhone 14 128GB", price: 930000 },
      { id: "14b", name: "iPhone 14 Pro 256GB", price: 1000000 },
      { id: "14c", name: "iPhone 14 Pro Max 512GB", price: 1180000 },
    ],
  },
  {
    id: "33",
    name: "iPhone 15 Pro Max",
    price: 1230000 - 1480000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone15promax,
    description: "Titanium design, A17 Pro chip, and the most advanced camera system.",
    condition: "new",
    variants: [
      { id: "15a", name: "iPhone 15 Pro Max 128GB", price: 1230000 },
      { id: "15b", name: "iPhone 15 Pro Max 256GB", price: 1430000 },
      { id: "15c", name: "iPhone 15 Pro Max 512GB", price: 1480000 },
    ],
  },
  {
    id: "34",
    name: "iPhone 16 Series",
    price: 1550000 - 2130000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone16,
    description: "Next-gen performance with A18 chip and improved battery life.",
    condition: "new",
    variants: [
      { id: "16a", name: "iPhone 16 128GB", price: 1550000 },
      { id: "16b", name: "iPhone 16 Pro 256GB", price: 1630000 },
      { id: "16c", name: "iPhone 16 Pro Max 512GB", price: 2130000 },
    ],
  },
  {
    id: "35",
    name: "iPhone 17 Series",
    price: 1430000 - 3480000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: iphone17,
    description: "Cutting-edge design with AI-powered camera and ultra-fast charging.",
    condition: "new",
    variants: [
      { id: "17a", name: "iPhone 17 128GB", price: 1430000 },
      { id: "17b", name: "iPhone 17 Pro 256GB", price: 2230000 },
      { id: "17c", name: "iPhone 17 Pro  512GB", price: 2430000 },
      { id: "17d", name: "iPhone 17 Pro 1TB", price: 2580000 },
      { id: "17e", name: "iPhone 17 Pro Max 256GB", price: 2280000 },
      { id: "17f", name: "iPhone 17 Pro Max 512GB", price: 2630000 },
      { id: "17g", name: "iPhone 17 Pro Max 1TB", price: 2980000 },
      { id: "17h", name: "iPhone 17 Pro Max 2TB", price: 3480000 },
    ],
  },

  {
    id: "36",
    name: "iPhone 17 Series Esim Unlocked",
    price: 1380000 - 3430000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: LOCKED,
    description: "Cutting-edge design with AI-powered camera and ultra-fast charging.",
    condition: "new",
    variants: [
      { id: "17a", name: "iPhone 17  256GB", price: 1380000 },
      { id: "17b", name: "iPhone 17 Pro 256GB", price: 2180000 },
      { id: "17c", name: "iPhone 17 Pro 512GB", price: 2380000 },
      { id: "17d", name: "iPhone 17 Pro 1TB", price: 2530000 },
      { id: "17e", name: "iPhone 17 Pro Max 256GB", price: 2230000 },
      { id: "17f", name: "iPhone 17 Pro Max 512GB", price: 2580000 },
      { id: "17g", name: "iPhone 17 Pro Max 1TB", price: 2930000 },
       { id: "17h", name: "iPhone 17 Pro Max 2TB", price: 3430000 },


       
    ],
  },
  {
    id: "37",
    name: "iPhone 17 Air Locked",
    price: 1630000 - 3350000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "iPhone",     // must match CATEGORIES[0].subcategories
    image: AIR,
    description: "Cutting-edge design with AI-powered camera and ultra-fast charging.",
    condition: "new",
    variants: [
      { id: "17b", name: "iPhone 17 Air 256GB", price: 1480000},
      { id: "17c", name: "iPhone 17 Air 512GB", price: 1680000 },,
       
    ],
  },



  // ✅ Other products remain unchanged
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 730000 - 1080000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: galaxyS24,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S24a", name: "Samsung Galaxy S24 ", price: 730000 },
      { id: "S24b", name: "Samsung Galaxy S24 Plus", price: 780000 },
      { id: "S24c", name: "Samsung Galaxy S24 Ultra", price: 1080000 },
    ],
  },

 {
    id: "3",
    name: "Samsung Galaxy S23 ",
    price: 530000 - 580000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: galaxyS23,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S23a", name: "Samsung Galaxy S23 ", price: 530000 },
      { id: "S23b", name: "Samsung Galaxy S23 Plus", price: 580000 },
    ],
  },

   {
    id: "4",
    name: "Samsung Galaxy S22",
    price: 400000 - 430000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: galaxyS22,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S24a", name: "Samsung Galaxy S22 ", price: 400000 },
      { id: "S24b", name: "Samsung Galaxy S22 ", price: 430000 },
    ],
  },

   {
    id: "5",
    name: "Samsung Galaxy S21 Plus",
    price: 330000 - 350000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: galaxyS21,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S24a", name: "Samsung Galaxy S21 ", price: 330000 },
      { id: "S24b", name: "Samsung Galaxy S21 Plus", price: 350000 },
    ],
  },

  
   {
    id: "6",
    name: "Samsung Galaxy Note 10 ",
    price: 330000 - 400000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: note10,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S24a", name: "Samsung Galaxy Note 10 ", price: 330000 },
      { id: "S24b", name: "Samsung Galaxy Note 10 Plus", price: 400000 },
    ],
  },

  {
    id: "7",
    name: "Samsung Galaxy Note 20 ",
    price: 400000 - 500000,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Samsung",     // must match CATEGORIES[0].subcategories
    image: note20,
    description: "Ultimate Android power with Galaxy AI and built-in S Pen.",
    condition: "new",
    variants: [
      { id: "S24a", name: "Samsung Galaxy Note 20 ", price: 400000 },
      { id: "S24b", name: "Samsung Galaxy Note 20 Ultra", price: 500000 },
    ],
  },

  {
    id: "8",
    name: "iPad (New and Used)",
    category: "tablet",       // must match CATEGORIES
    subcategory: "iPad",     // must match CATEGORIES[0].subcategories
    image: ipad,
    description: "Excellent condition, 256GB, Space Black. Battery health 100%.",
    condition: "new",
     variants: [
      { id: "8a", name: "iPad 126GB ", price: 1230000 },
      { id: "8b", name: "iPad 256GB ", price: 1280000 },
      { id: "8c", name: "iPad 512GB ", price: 1830000 },
    ],
  },
  {
    id: "9",
    name: "Samsung Galaxy Z Fold 5",
    price: 1799,
    category: "tablet",        // must match CATEGORIES
    subcategory: "Galaxy Fold",     // must match CATEGORIES[0].subcategories
    image: zfold5,
    description: "The ultimate productivity tool with a massive folding screen.",
    condition: "new",
     variants: [
      { id: "9a", name: "Samsung Galaxy Z Fold 5 256GB", price: 1200000 },
      { id: "9b", name: "Samsung Galaxy Z Fold 5 512GB", price: 1250000 },
    ],
  },

   {
    id: "10",
    name: "Google Pixel 10 Pro XL",
    price: 1799,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Google Pixel",     // must match CATEGORIES[0].subcategories
    image: pix1,
    description: "Excellent condition, 256GB, Space Black. Battery health 100%.",
    condition: "new",
     variants: [
      { id: "10a", name: "Google Pixel 10 Pro XL 256GB", price: 1130000 },
     
    ],
  },

  {
    id: "11",
    name: "Google Pixel 10 Pro XL",
    price: 1799,
    category: "Phones",        // must match CATEGORIES
    subcategory: "Google Pixel",     // must match CATEGORIES[0].subcategories
    image: pix2,
    description: "Excellent condition, 256GB, Space Black. Battery health 100%.",
    condition: "new",
     variants: [
      { id: "11a", name: "Google Pixel 10 Pro  256GB|12gb RAM", price: 1280000 },
      { id: "11b", name: "Google Pixel 10 Pro XL 256GB|16gb RAM", price: 1380000 },
     
    ],
  },
 
{
    id: "12",
    name: "MacBook Air M2",
    price: 1799,
    category: "Laptops",        // must match CATEGORIES
    subcategory: "MacBook",     // must match CATEGORIES[0].subcategories
    image: mac1,
    description: "Excellent condition, 512GB, Space Black. Battery health 100%.",
    condition: "new",
     variants: [
      { id: "12a", name: "MacBook Air M4 256GB", price: 1280000 },
      { id: "12b", name: "MacBook Air M4 512GB", price: 1330000 },
     
    ],
  },

  {
    id: "13",
    name: "MacBook Pro M1",
    price: 1799,
    category: "Laptops",        // must match CATEGORIES
    subcategory: "MacBook",     // must match CATEGORIES[0].subcategories
    image: mac2,
    description: "Excellent condition, 512GB, Space Black. Battery health 100%.",
    condition: "new",
     variants: [
      { id: "12a", name: "MacBook Pro M1 512GB | 16GB RAM", price: 1330000 },
      { id: "12b", name: "MacBook Pro M1 512GB | 32GB RAM", price: 1430000 },
      { id: "12c", name: "MacBook Pro M1 Max 512GB | 32GB RAM", price: 1630000 },
      { id: "12d", name: "MacBook Pro M1 Max 1TB | 32GB RAM", price: 1680000 },
      { id: "12e", name: "MacBook Pro M1 Max 1TB | 32GB RAM", price: 1730000 },
    ],
  },

  {
    id: "15",
    name: "MacBook",
    price: 1199,
    category: "Laptops",
    subcategory: "MacBook", 
    image: MacBook,
    description: "Up to 1.4x faster than M1 model / Up to 6x faster than Intel-based model / Up to 20hrs battery life.",
    condition: "new",
    variants: [
      { id: "15a", name: "MacBook Air M2 256GB", price: 1280000 },
      { id: "15b", name: "MacBook Pro M2 512GB", price: 1630000},
      { id: "15c", name: "MacBook Pro M2 1TB", price: 2280000 },
    ],
  },

  {
    id: "16",
    name: "Asus ZenBook pro Duo 14",
    price: 2100000,
    category: "Laptops",
    subcategory: "Others", 
    image:As1 ,
    description: "Gaming PC, 32GB RAM, 1TB SSD, Face recognition.",
    condition: "new",
     variants: [
      { id: "16a", name: "Asus ZenBook pro Duo 14", price: 2100000 },
  
    ],
  },

  {
    id: "17",
    name: "Alienware 16 Gaming Laptop",
    price: 1880000,
    category: "Laptops",
    subcategory: "Others", 
    image:Ali1 ,
    description: "Gaming PC, 16GB RAM, 1TB SSD, Thunderbolt.",
    condition: "new",
     variants: [
      { id: "17a", name: "Alienware 16 Gaming Laptop", price: 1880000 },
    ],
  },

   {
    id: "18",
    name: "Lenovo Legion 7i Gaming Laptop",
    price: 1930000,
    category: "Laptops",
    subcategory: "Others", 
    image:lenovo ,
    description: "Gaming PC, 16GB RAM, 1TB SSD, Thunderbolt.",
    condition: "new",
     variants: [
      { id: "18a", name: "Lenovo Legion 7i Gaming Laptop", price: 1930000 },
  
    ],
  },

   {
    id: "19",
    name: "HP Victus 15 Gaming Laptop",
    price: 1630000,
    category: "Laptops",
    subcategory: "HP", 
    image:HP1 ,
    description: "Gaming PC, 16GB RAM, 512GB SSD, Thunderbolt.",
    condition: "new",
     variants: [
      { id: "19a", name: "HP Victus 15 Gaming Laptop", price: 1630000 },
    ],
  },

   {
    id: "20",
    name: "HP EliteBook 1024 G7 Laptop",
    price: 730000,
    category: "Laptops",
    subcategory: "HP", 
    image:G7 ,
    description: "Gaming PC, 16GB RAM, 512GB SSD, Fingerprint scanner.",
    condition: "new",
     variants: [
      { id: "20a", name: "HP EliteBook 1024 G7 Laptop", price: 730000 },
  
    ],
  },

  {
    id: "21",
    name: "HP EliteBook 804 G6 Laptop",
    price: 730000,
    category: "Laptops",
    subcategory: "HP", 
    image:G6 ,
    description: "Gaming PC, 16GB RAM, 512GB SSD, Fingerprint scanner.",
    condition: "new",
     variants: [
      { id: "19a", name: "HP EliteBook 804 G6 8/256GB", price: 380000 },
      { id: "19b", name: "HP EliteBook 804 G6 16/256GB", price: 480000 },
    ],
  },

  
   {
    id: "22",
    name: "HP EliteBook x360 1040 G7 Laptop",
    price: 830000,
    category: "Laptops",
    subcategory: "HP", 
    image:x360 ,
    description: "Gaming PC, 32GB RAM, 512GB SSD, Fingerprint scanner, face recognition.",
    condition: "new",
     variants: [
      { id: "22a", name: "HP EliteBook x360 1040 G7 Laptop", price: 830000 },
    ],
  },  
  
  {
    id: "23",
    name: "HP EliteBook 830 G6",
    price: 500000,
    category: "Laptops",
    subcategory: "HP", 
    image:core7 ,
    description: "Gaming PC, 32GB RAM, 512GB SSD, Fingerprint scanner, face recognition.",
    condition: "new",
     variants: [
      { id: "23a", name: "HP EliteBook 830 G6", price: 500000 },
    ],
  },

   {
    id: "24",
    name: "Msi Vector 16 Gaming Laptop",
    price: 3830000,
    category: "Laptops",
    subcategory: "Others", 
    image:vector1 ,
    description: "Gaming PC, 64GB RAM, 1TB SSD, Thunderbolt, Face recognition.",
    condition: "new",
     variants: [
      { id: "24a", name: "Msi Vector 16 Gaming Laptop", price: 3830000 },
    ],
  },

     {
    id: "25",
    name: "Msi katana 15 Gaming Laptop",
    price: 2350000,
    category: "Laptops",
    subcategory: "Others", 
    image:vector2 ,
    description: "Gaming PC, 16GB RAM, 1TB SSD, Thunderbolt.",
    condition: "new",
     variants: [
      { id: "25a", name: "Msi katana 15 Gaming Laptop", price: 2350000 },
    ],
  },

    {
    id: "26",
    name: "Asus ROG Zephyrus G16 Gaming Laptop",
    price: 1980000,
    category: "Laptops",
    subcategory: "Others", 
    image:As2 ,
    description: "Gaming PC, 16GB RAM, 1TB SSD, Thunderbolt, Face recognition.",
    condition: "new",
     variants: [
      { id: "26a", name: "Asus ROG Zephyrus G16 Gaming Laptop", price: 1980000 },
    ],
  },

   {
    id: "27",
    name: "Playstation 5 Console",
    price: 930000,
    category: "Games",
    subcategory: "PlayStation", 
    image:ps5 ,
    description: "PS5 Slim Edition, FC 26 Package, Online access.",
    condition: "new",
     variants: [
      { id: "27a", name: "Playstation 5 Console", price: 930000 },
    ],
  },
  
  {
    id: "28",
    name: "Playstation 4 Console",
    price: 350000,
    category: "Games",
    subcategory: "PlayStation", 
    image:ps4 ,
    description: "PS4 Slim Edition, FC 26 Package, Online access.",
    condition: "new",
     variants: [
      { id: "28a", name: "Playstation 4 Console", price: 350000 },
    ],
  },

  {
    id: "29",
    name: "Dell Pro 13 Plus Laptop",
    price: 930000,
    category: "Laptops",
    subcategory: "Others", 
    image:dell ,
    description: "16gbRAM | 256gbSSD | Touchscreen | Intel(R) Core(TM) Ultra 5 235U, 12 Cores, 14 Logical Processor | Keyboard Light | Finger Print Scanner | Facial Recognition ",
    condition: "new",
     variants: [
      { id: "29a", name: "Dell Pro 13 Plus Laptop", price: 930000 },
  
    ],
  },

  {
    id: "38",
    name: "2021 HP Zbook Firefly",
    price: 630000,
    category: "Laptops",
    subcategory: "HP", 
    image:zbook ,
    description: "Intel Core i7 11th Gen l 256GB SSD l 16GB  Ram l Keyboard Light l Fingerprint l FACED ID  ",
    condition: "new",
     variants: [
      { id: "38a", name: "2021 HP Zbook Firefly", price: 630000 },
  
    ],
  },

   {
    id: "39",
    name: "2021 HP Zbook Firefly",
    price: 630000,
    category: "Laptops",
    subcategory: "HP", 
    image:zbook ,
    description: "Intel Core i7 11th Gen l 256GB SSD l 16GB  Ram l Keyboard Light l Fingerprint l FACED ID  ",
    condition: "new",
     variants: [
      { id: "39a", name: "256GB SSD l 16GB  Ram ", price: 580000 },
      { id: "39b", name: "256GB SSD l 16GB  Ram", price: 630000 },
      { id: "39c", name: "512GB SSD l 16GB  Ram", price: 650000 },
  
    ],
  },

   {
    id: "40",
    name: "2020 HP 830 G7",
    price: 530000,
    category: "Laptops",
    subcategory: "HP", 
    image:G77 ,
    description: "8gbRam | 256gbSSD|  Intel Core i5-10310U Processor up to 4.4 GHz with Intel Turbo Boost technology | nonTouchscreen |  Keyboard Light | HDMI |  TYPEC | SimCard SLOT",
    condition: "new",
     variants: [
      { id: "40a", name: "HP 830 G7 | 16gbRam | 256gbSSD", price: 530000 },
      { id: "40b", name: "8gbRam | 256gbSSD", price: 480000 },
  
    ],
  },

  {
    id: "41",
    name: "2021 HP 840 G8",
    price: 630000,
    category: "Laptops",
    subcategory: "HP", 
    image:G8 ,
    description: "16gbRam | 256gbSSD|  Intel Core i5-10310U Processor up to 4.4 GHz with Intel Turbo Boost technology | nonTouchscreen |  Keyboard Light | HDMI |  TYPEC | SimCard SLOT",
    condition: "new",
     variants: [
      { id: "41a", name: "HP 840 G8 | 16gbRam | 256gbSSD", price: 630000 },
  
    ],
  },

   {
    id: "42",
    name: "2020 MacBook Air M1",
    price: 730000,
    category: "Laptops",
    subcategory: "MacBook", 
    image:M1 ,
        description: " M1Chip | 8GB RAM, 256SSD (13-inch,  TouchiD  | keyboard Light with Charger",
        condition: "new",
     variants: [
      { id: "42a", name: "2020 MacBook Air M1 | 16gbRam | 256gbSSD", price: 730000 },
  
      ],
    },

    
   {
    id: "43",
    name: "2023 MacBook Pro 14 inch",
    price: 1630000,
    category: "Laptops",
    subcategory: "MacBook", 
    image:M22 ,
        description: "M2 Pro, 16GB RAM, 512GB SSD, cc- 152,  TouchiD  | keyboard Light with Charger",
        condition: "new",
     variants: [
      { id: "43a", name: "2023 MacBook Pro 14 inch | 16gbRam | 512gbSSD", price: 1630000 },
      ],
    },

    {
    id: "44",
    name: "DELL XPS 7390 13",
    price: 580000,
    category: "Laptops",
    subcategory: "Others", 
    image:M11 ,
        description: "2020 DELL XPS 7390 13 TOUCHSCREEN Intel Core i5 10thGen l 256GB SSD l 8GB  Ram l  Keyboard Light l Fingerprint",
        condition: "new",
     variants: [
      { id: "44a", name: "2020 DELL XPS 7390 13 TOUCHSCREEN 8gbRam | 256gbSSD", price: 580000 },
      { id: "44b", name: "2020 DELL XPS 7390 13 TOUCHSCREEN 16gbRam | 256gbSSD", price: 680000 },
      ],
    },

    {
    id: "45",
    name: "HP Elitebook 1030 G4",
    price: 580000,
    category: "Laptops",
    subcategory: "HP", 
    image:M13 ,
        description: " Display Intel core i7 8th Generation Processor16GB RAM 256GB NVMe SSD Backlit Keyboard Windows Hello Face ID Unlock Fingerprint scanner",
        condition: "new",
     variants: [
      { id: "45a", name: "HP Elitebook 1030 G4 | 16gbRam | 256gbSSD", price: 580000 },
      ],
    },

    {
    id: "46",
    name: "Macbook Air 2022",
    price: 980000,
    category: "Laptops",
    subcategory: "MacBook", 
    image:M12 ,
        description: " 8gbRam | 256gb SSD | M2Chip | 13inch | TouchiD  | keyboard Light with Charger",
        condition: "new",
     variants: [
      { id: "46a", name: "Macbook Air 2022 | 8gbRam | 256gbSSD", price: 980000 },
      ],
    },

    {
    id: "47",
    name: "HP Elitebook 1040 G6",
    price: 600000,
    category: "Laptops",
    subcategory: "HP", 
    image:M14 ,
        description: " 2-in-114 FHD+ x360 convertible  Touchscreen Display Intel core i7 8th Generation Processor 16GB RAM 512GB NVMe SSD Backlit Keyboard Windows Hello Face ID Unlock Fingerprint scanner",
        condition: "new",
     variants: [
      { id: "47a", name: "HP Elitebook 1040 G6 | 16gbRam | 512gbSSD", price: 600000 },
      ],
    },

     {
    id: "48",
    name: "HP Elite Dragonfly G1",
    price: 730000,
    category: "Laptops",
    subcategory: "HP", 
    image:M15 ,
        description: " 2-in-114 FHD+ x360 convertible  Touchscreen Display Intel core i7 8th Generation Processor 16GB RAM 512GB NVMe SSD Backlit Keyboard Windows Hello Face ID Unlock Fingerprint scanner",
        condition: "new",
     variants: [
      { id: "48a", name: "HP Elite Dragonfly G1 | 16gbRam | 512gbSSD", price: 730000 },
      ],
    },

      {
    id: "49",
    name: "HP Elitebook 1030 G3",
    price: 530000,
    category: "Laptops",
    subcategory: "HP", 
    image:M16 ,
        description: " 2-in-114 FHD+ x360 convertible  Touchscreen Display Intel core i7 8th Generation Processor 8GB RAM 256GB NVMe SSD Backlit Keyboard Windows Hello Face ID Unlock Fingerprint scanner",
        condition: "new",
     variants: [
      { id: "49a", name: "HP Elitebook 1030 G3 | 8gbRam | 256gbSSD", price: 530000 },
      ],
    },

     {
    id: "50",
    name: "HP Zbook 15u G6",
    price: 630000,
    category: "Laptops",
    subcategory: "HP", 
    image:M17 ,
        description: " 2-in-114 FHD+ x360 convertible  Touchscreen Display Intel core i7 8th Generation Processor 16GB RAM 512GB NVMe SSD Backlit Keyboard Windows Hello Face ID Unlock Fingerprint scanner",
        condition: "new",
     variants: [
      { id: "50a", name: "HP Zbook 15u G6 | 16gbRam | 512gbSSD", price: 630000 },
      ],
    },

       {
    id: "51",
    name: "HP Omen 16 Gaming Laptop",
    price: 1880000,
    category: "Laptops",
    subcategory: "HP", 
    image:M18 ,
        description: " 16 FHD+ lPS 144Hz Display Intel Core i7 14th Generation Processor Nvidia Geforce RTX 4060 GPU (8GB Dedicated Graphics) 32GB Ram 1TB SSD RGB Backlit Keyboard Thunderbolt ports",
        condition: "new",
     variants: [
      { id: "51a", name: "HP Omen 16 Gaming Laptop | 32gbRam | 1TBSSD", price: 1880000 },
      ],
    },
  
      {
    id: "52",
    name: "Dell latitude 7400 2-in-1",
    price: 580000,
    category: "Laptops",
    subcategory: "Others", 
    image:M19 ,
        description: " 16 FHD+ lPS 144Hz Display Intel Core i7 14th Generation Processor Nvidia Geforce RTX 4060 GPU (8GB Dedicated Graphics) 32GB Ram 1TB SSD RGB Backlit Keyboard Thunderbolt ports",
        condition: "new",
     variants: [
      { id: "52a", name: "Dell latitude 7400 2-in-1 | 16gbRam | 512gbSSD", price: 580000 },
      ],
    },
        {
    id: "53",
    name: "Lenovo Ideapad 720s-14ikb",
    price: 530000,
    category: "Laptops",
    subcategory: "Others", 
    image:M20 ,
        description: " 14 FHD Display Intel Core i7 8th Generation Processor Nvidia Geforce MX150 GPU (2GB Dedicated Graphics) 16GB Ram 512GB NVMe SSD Backlit Keyboard Laptop and Charger only",
        condition: "new",
     variants: [
      { id: "53a", name: "Lenovo Ideapad 720s-14ikb | 16gbRam | 512gbSSD", price: 530000 },
      ],
    },

     {
    id: "54",
    name: "Lenovo Legion 5 15IRX10",
    price: 2680000,
    category: "Laptops",
    subcategory: "Others", 
    image:M21 ,
        description: " 15 WQXGA OLED 165Hz Display Intel Core i9 14th Generation Processor Nvidia Geforce RTX 5070 GPU (8GB Dedicated Graphics) 16GB Ram 1TB SSD RGB Backlit Keyboard Thunderbolt ports",
        condition: "new",
     variants: [
      { id: "54a", name: "Lenovo Legion 5 15IRX10 | 16gbRam | 1TBSSD", price: 2680000 },
      ],
    },
    {
    id: "55",
    name: "Brand New Apple Watch",
    price: 680000,
    category: "Accessories",
    subcategory: "Apple Watch", 
    image:Q3 ,
        description: " Series 11 ✓ 42mm ✓ GPS ONLY ✓ SILVER ✓ ",
        condition: "new",
     variants: [
      { id: "55a", name: "Brand New Apple Watch ", price: 680000 },
      ],
    },
   

     {
    id: "56",
    name: "Brand New Apple Watch Ultra 3",
    price: 1180000,
    category: "Accessories",
    subcategory: "Apple Watch", 
    image:Q6 ,
        description: " 49MM || Cellular + GPS  ",
        condition: "new",
     variants: [
      { id: "56a", name: "Brand New Apple Watch Ultra 3 ", price: 1180000 },
      ],
    },

      {
    id: "57",
    name: "Airpod Max 2",
    price: 450000,
    category: "Accessories",
    subcategory: "Airpods", 
    image:Q5 ,
        description: " Airpod Max 2 Type C Port Starlight   ",
        condition: "new",
     variants: [
      { id: "57a", name: "Airpod Max 2 ", price: 450000 },
      ],
    },

      {
    id: "58",
    name: "JBL BoomBox 4",
    price: 800000,
    category: "Accessories",
    subcategory: "Others", 
    image:Q4 ,
        description: " JBL BoomBox 4 || Bluetooth V5.4 || Upto 34Hours Playtime || IP68 Waterproof & Dustproof || Powerbank || Two-Setting Bass Boost Led Light   ",
        condition: "new",
     variants: [
      { id: "58a", name: "JBL BoomBox 4 ", price: 800000 },
      ],
    },

     {
    id: "59",
    name: " Apple Airpod Series",
    price: 550000,
    category: "Accessories",
    subcategory: "Airpods", 
    image:Q2 ,
        description: " All Apple Airpod Series   ",
        condition: "new",
     variants: [
      { id: "59a", name: "Airpod 4 ANC ", price: 320000 },
      { id: "59b", name: "Brand New Airpod Pro 2 USB C ", price: 430000 },
      { id: "59c", name: "Brand New Airpod Pro 3 USB C ", price: 550000 },
      ],
    },

    {
    id: "60",
    name: " All Brand New JBL Speakers Available",
    price: 800000,
    category: "Accessories",
    subcategory: "Others", 
    image:Q1 ,
        description: " All Brand New JBL Speakers Available  ",
        condition: "new",
     variants: [
      { id: "60a", name: "New JBL Speakers ", price: 800000 },
      
      ],
    },

    {
    id: "61",
    name: " APPLE WATCH",
    price: 800000,
    category: "Accessories",
    subcategory: "Apple Watch", 
    image:Q7 ,
        description: " IWATCH NEW PRICE UPDATE ",
        condition: "new",
     variants: [
      { id: "61a", name: "Series 5 LTE 44mm ", price: 260000 },
      { id: "60a", name: "SE 2 GPS 44mm ", price: 300000 },
      { id: "60a", name: "Series 6 LTE 44mm ", price: 280000 },
      { id: "60a", name: "Series 7 LTE 44MM  ", price: 350000 },
      { id: "60a", name: "Series 8 LTE 45mm ", price: 410000 },
      { id: "60a", name: "Series 9 LTE 45mm ", price: 470000 },
      
      ],
    },
];

// ✅ Crypto rates
export const CRYPTO_RATES = [
  { symbol: "BTC", name: "Bitcoin", price: 65432.1, change24h: 2.5, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3456.78, change24h: -1.2, icon: "Ξ" },
  { symbol: "USDT", name: "Tether", price: 1.0, change24h: 0.01, icon: "₮" },
  { symbol: "SOL", name: "Solana", price: 145.2, change24h: 5.8, icon: "S" },]