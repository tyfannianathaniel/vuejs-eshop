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
  createUser(user) {

    let _user = {
      "id_customer": users.length + 1,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "email": user.email,
      "passwd": user.password,
      "birthday": user.birthday
    }

    let body = null
    let init = null
    let res = new Response(body, init)

    if(user.password !== user.passwordConfirm) {
      init = { "status": 400}
      return res
    }

    users.push(_user)

    body = _user
    init = { "status": 200}

    return res

  },
}