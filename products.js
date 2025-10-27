// products.js - simplified editable version
// To add a new product, copy one of the examples below and change its details.
// Each product: { id, name, desc, price, qty, img, sold, category, note }

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Mr Moellers Pen',
    desc: 'Pen USED By Mr Moeller',
    price: 2.00,
    qty: 1,
    img: 'assets/moellerpen.png',
    sold: false,
    category: 'Item',
    note: 'LIKE NEW'
  },
  {
    id: 'p2',
    name: 'Autographed Picture Of Mr Melton',
    desc: 'AUTOGRAPHED College Picture Of Mr Melton',
    price: 5.00,
    qty: 8,
    img: 'assets/meltonsigned.png',
    sold: false,
    category: 'Autograph',
    note: ''
  },
  {
    id: 'p3',
    name: 'Lanyard',
    desc: 'School lanyard with charm and keyring.',
    price: 6.50,
    qty: 12,
    img: 'assets/logo.png',
    sold: false,
    category: 'Accessories',
    note: ''
  },
  {
    id: 'p4',
    name: 'Tote Bag',
    desc: 'Canvas tote — limited edition signed print.',
    price: 18.00,
    qty: 3,
    img: 'assets/logo.png',
    sold: true,
    category: 'Bags',
    note: 'Limited edition'
  }
];
