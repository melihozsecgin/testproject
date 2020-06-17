/*
----------------------

  Page Title Manager
  (17.06.2020 10:15)

----------------------
*/

// Set the default title
function resetTitle() {
  document.title = 'Home Page';
}

// Set the title
function setTitle(title) {
  document.title = title;
}

function deleteTitle() {
  document.title = "";
}

$(document).ready(function() {
  $('.setTitle').click(function() {
    var setTitle = prompt('Set the title');
    if(setTitle == "") {
      alert('Please enter a title!');
    }
    else {
      console.log(setTitle);
    }
  })
});

function gitHubLogo() {
  alert('https://github.com/');
}
