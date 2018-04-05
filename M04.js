//  We've created an App object (a set of key value pairs) to hold the applcation code.
//  The App object shows how to create a JavaScript object and includes
//  examples of standard programming constructs in JavaScript. 
//  The goal is provide many useful examples in a single code file. 
//
//  When you modify the application, use different ids for your HTML elements.
//  Do not use length and width unless these directly apply to your application. 

var App = {
  launch: launch,
  getFirstName: getFirstName,
  getLastName: getLastName,
  getWidth: getWidth,
  getLength: getLength,
  calculateArea: calculateArea,
  calculateEstimatedCount: calculateEstimatedCount,
  showExample: showExample,
  addImage: addImage,
  displayExploreButtons: displayExploreButtons,
  exploreHtml: exploreHtml,
  exploreCode: exploreCode
}


function launch() {
  const first = getFirstName()
  const last = getLastName()
  const width = getWidth()
  const length = getLength()
  const area = calculateArea(width, length)
  const count = calculateEstimatedCount(area)

  // update page contents 
  $(".displayText").css('display', 'inline-block')  //overwrites display: hidden to make it visible 
  document.getElementById("first").innerHTML = first
  document.getElementById("last").innerHTML = last
  document.getElementById("width").innerHTML = width
  document.getElementById("length").innerHTML = length
  document.getElementById("area").innerHTML = area
  document.getElementById("count").innerHTML = count
  document.getElementById("displayPlace").innerHTML = ""

  alert("You have about " + area + " square miles.")
  alert("You could have about " + count + " sheep.")
  $("#count").css("color", "blue")
  $("#count").css("background-color", "yellow")

  showExample(count)
  displayExploreButtons()
}

function getFirstName() {
  const answer = prompt("What is your first name", "Notorious")
  return answer
}

function getLastName() {
  const answer = prompt("What is your last name", "Nora")
  return answer
}

function getWidth() {
  const DEFAULT_WIDTH = 5;
  const MAX_WIDTH = 100;
  const MIN_WIDTH = 1;
  const answer = prompt("What is the width of your farm in miles", DEFAULT_WIDTH)
  let width = parseFloat(answer)
  if (Number.isNaN(width)) {
      alert('The given argument is not a number. Using ' + DEFAULT_WIDTH + '.')
      width = DEFAULT_WIDTH
  }
  else if (width > MAX_WIDTH) {
      alert('The given argument is greater than ' + MAX_WIDTH + '. Using ' + MAX_WIDTH + '.')
      width = MAX_WIDTH
  }
  else if (width < MIN_WIDTH) {
      alert('The given argument is less than ' + MIN_WIDTH + '. Using ' + MIN_WIDTH + '.')
      width = MIN_WIDTH
  }
  return width
}

function getLength() {
  const DEFAULT_LENGTH = 5;
  const MAX_LENGTH = 100;
  const MIN_LENGTH = 1;
  const answer = prompt("What is the length of your farm in miles", DEFAULT_LENGTH)
  let length = parseFloat(answer)
  if (Number.isNaN(length)) {
      alert('The given argument is not a number. Using ' + DEFAULT_LENGTH + '.')
      length = DEFAULT_LENGTH
  }
  else if (length > MAX_LENGTH) {
      alert('The given argument is greater than ' + MAX_LENGTH + '. Using ' + MAX_LENGTH + '.')
      length = MAX_LENGTH
  }
  else if (length < MIN_LENGTH) {
      alert('The given argument is less than ' + MIN_LENGTH + '. Using ' + MIN_LENGTH + '.')
      length = MIN_LENGTH
  }
  return length
}

function calculateArea(givenLength, givenWidth) {
  const MIN_VALUE = 1
  if (typeof givenLength !== 'number' || typeof givenWidth !== 'number') {
      throw Error('The given argument is not a number')
  }
  if (givenLength < MIN_VALUE) {
      givenLength = MIN_VALUE
  }
  if (givenWidth < MIN_VALUE) {
      givenWidth = MIN_VALUE
  }
  // calculate the answer and store in a local variable so we can watch the value
  let area = givenLength * givenWidth

  // return the result of our calculation to the calling function
  return area
}

function calculateEstimatedCount(inputArea) {
  if (typeof inputArea !== 'number') {
      alert('The given argument is not a number')
  }
  let ct = 0
  if (inputArea > 1) {
      ct = inputArea // estimate 1 per square mile
  }
  return ct
}

function showExample(inputCount) {
  for (var i = 0; i < inputCount; i++) {
      addImage(i)
  }
}

function addImage(icount) {
  var imageElement = document.createElement("img")
  imageElement.id = "image" + icount
  imageElement.class = "picture"
  imageElement.style.maxWidth = "90px"
  var displayElement = document.getElementById("displayPlace")
  displayElement.appendChild(imageElement)
  document.getElementById("image" + icount).src = "59-images-of-baby-lamb-clipart-you-can-use-these-free-cliparts-for-sEfudv-clipart.jpg"
}

function displayExploreButtons() {
  $(".displayExploreButtons").css('display', 'block')  //overwrites display: hidden to make it visible 
}
function exploreHtml() {
  alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
      "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
}

function exploreCode() {
  alert("Would you like explore the running code? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the top-level Sources tab.\n\n" +
      "In the window on the left, click on the .js file.\n\n" +
      "In the window in the center, click on the line number of the getFirstName() call to set a breakpoint.\n\n" +
      "Click on it again to remove the breakpoint, and one more time to turn it back on.\n\n" +
      "Up on the web page, click the main button to launch the \n\n" +
      "Execution of the code will stop on your breakpoint.\n\n" +
      "Hit F11 to step into the getFirstName() function.\n" +
      "Hit F10 to step over the next function call.\n\n" +
      "As you hit F11 and step through your code, the values of local variables appear beside your code - very helpful in debugging.\n\n" +
      "Caution: Hitting F11 in VS Code will make your top-level menu disapper. Hit F11 again to bring it back.\n"
  )
}
