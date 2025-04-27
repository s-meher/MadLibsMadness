/* 
   Given the 'id' attribute of a form element, this function retrieves 
   the value entered by the user in that form element.
*/
function formValue(id) {
  // Get the form element by its ID
  let formElement = document.getElementById(id);

  // Check if the element exists; if not, return an error message
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  // Store the user input value
  let value = formElement.value;

  // If the user input is empty or only contains spaces, return the placeholder text
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  // Return the user input value
  return value;
}

/* 
   Given the 'id' of an HTML element and a 'className', 
   this function adds that class name to the HTML element.
*/
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* 
   This function is executed when the 'Generate' button is clicked.
   It collects user inputs and generates a funny Mad Libs story.
*/
function generate() {
  console.log("Button clicked.");

  // Collecting words from user inputs
  let relative = formValue("relative");
  let adjective1 = formValue("adjective1");
  let adjective2 = formValue("adjective2");
  let adjective3 = formValue("adjective3");
  let famousPerson = formValue("famousPerson");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("petName");

  // Creating the Mad Libs story using a template literal
  let story = `
    Dear ${relative},<br><br>
    I have been having a really ${adjective1} time at camp. 
    The counselor is ${adjective2} and the food is ${adjective3}. 
    I met ${famousPerson} and we quickly became ${noun}. 
    Talk soon!<br><br>
    Your ${dessert},<br>
    ${petName}
  `;

  // Displaying the generated Mad Libs story inside the 'output' div
  document.getElementById("output").innerHTML = story;

  // Adding a class to change the container's appearance after story generation
  addClassToElement("container", "generated");
}
