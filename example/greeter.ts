class User {
  firstName: string
  lastName: string
  fullName: string

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname
    this.lastName = lastname
    this.fullName = firstname + lastname
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'hello' + person.firstName + ' ' + person.lastName 
}

const user = new User('yym', '1')

console.log(greeter(user));
