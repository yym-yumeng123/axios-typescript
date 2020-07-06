interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'hello' + person.firstName + ' ' + person.lastName 
}

const user = {
  firstName: 'A',
  lastName: 'C'
}

console.log(greeter(user));
