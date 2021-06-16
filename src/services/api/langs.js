const langs = [
  {
   "id": 1,
   "active": true,
   "name": "english",
   "iso_code": "en"
  },
  {
   "id": 2,
   "active": true,
   "name": "français",
   "iso_code": "fr"
  },
  {
   "id": 3,
   "active": false,
   "name": "español",
   "iso_code": "es"
  },
];

export default {
  getLangs (cb) {
      setTimeout( () => cb(langs), 100)
  }
}