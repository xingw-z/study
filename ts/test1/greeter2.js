function greeters(person) {
    return 'hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'jane', lastName: 'user' };
document.body.innerHTML = greeters(user);
