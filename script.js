function activateService(contentId, buttonId) {
  // Get all elements with the class name 'service-content'
  var contentElements = document.getElementsByClassName("service-content");

  // Loop through all elements and remove the 'active' class
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].classList.contains("active")) {
      contentElements[i].classList.remove("active");
    }
  }

  // Add the 'active' class to the element with the specified id
  var elementToShow = document.getElementById(contentId);
  if (elementToShow) {
    elementToShow.classList.add("active");
  }

  var buttons = document.querySelectorAll(
    ".service-nav-container .item button"
  );
  // Loop through all buttons and remove the 'active' class if it exists
  buttons.forEach(function (button) {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });

  // Add the 'active' class to the clicked button
  var buttonToActivate = document.getElementById(buttonId);
  if (buttonToActivate) {
    buttonToActivate.classList.add("active");
  }
}
function activateAbout(contentId, buttonId) {
  // Get all elements with the class name 'service-content'
  var contentElements = document.getElementsByClassName("about-content");

  // Loop through all elements and remove the 'active' class
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].classList.contains("active")) {
      contentElements[i].classList.remove("active");
    }
  }

  // Add the 'active' class to the element with the specified id
  var elementToShow = document.getElementById(contentId);
  if (elementToShow) {
    elementToShow.classList.add("active");
  }

  var buttons = document.querySelectorAll(".about-nav-container .item");
  // Loop through all buttons and remove the 'active' class if it exists
  buttons.forEach(function (button) {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });

  // Add the 'active' class to the clicked button
  var buttonToActivate = document.getElementById(buttonId);
  if (buttonToActivate) {
    buttonToActivate.classList.add("active");
  }
}
function activateHistory(contentId) {
  // Get all elements with the class name 'service-content'
  var contentElements = document.getElementsByClassName(
    "history-content-container"
  );

  // Loop through all elements and remove the 'active' class
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].classList.contains("active")) {
      contentElements[i].classList.remove("active");
    }
  }

  // Add the 'active' class to the element with the specified id
  var elementToShow = document.getElementById(contentId);
  if (elementToShow) {
    elementToShow.classList.add("active");
  }
}
