// Create a function called isPhone that takes a string as it's first argument. If there are 10 digits in the string, console.log true, otherwise log out false.
// i need to get a string into a number
// parseInt()
// true if the given value is NaN; otherwise, false.
// isNan()
function isPhone(str) {

  let array = []
  for (var i = 0; i < str.length; i++) {
    let meow = isNaN(parseInt(str[i]))
    if (meow === false) {
      array.push(str[i])
    }
  }
  let phone = array.join('')

  if (phone.length === 10) {
    console.log('true');

  } else {
    console.log('false');
  }

}
// isPhone('abcdefrtin')
// isPhone('(720) 303-9701-43875983425324985723498')
