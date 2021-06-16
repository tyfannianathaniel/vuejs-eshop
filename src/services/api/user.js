const users = [
  { "id_customer": 0, "firstname": "John", "lastname": "Doe", "email": "john.doe@benti.fr", "passwd": "NotSoSecretPwd"},
  { "id_customer": 1, "firstname": "Jane", "lastname": "Duh", "email": "jane.duh@benti.fr", "passwd": "NotSoSecretPwd"},
  { "id_customer": 2, "firstname": "Jack", "lastname": "Dah", "email": "jack.dah@benti.fr", "passwd": "NotSoSecretPwd"},
  { "id_customer": 3, "firstname": "Jill", "lastname": "Ber", "email": "jill.ber@benti.fr", "passwd": "NotSoSecretPwd"},
  { "id_customer": 4, "firstname": "Jean", "lastname": "Bon", "email": "jean.bon@benti.fr", "passwd": "NotSoSecretPwd"},
];

export default {
  getUsers (cb) {
      setTimeout( () => cb(users), 100)
  },
  getUserByID(id) {
    return users.find( ({ id_customer }) => id_customer === id )
  },
  getUserByEmail(_email) {
    return users.find( ({ email }) => email === _email )
  },
}