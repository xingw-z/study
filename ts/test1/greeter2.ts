interface Person {
    firstName: string;
    lastName: string;
}

function greeters(person: Person) {
    return 'hello, ' + person.firstName + ' ' + person.lastName
}

let user = { firstName: 'jane', lastName: 'user' }

document.body.innerHTML = greeters(user)