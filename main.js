/*DROPDOWN*/

// User dropdown

const userIcon = document.getElementById('user-info-container');
const userDropdown = document.getElementById('user-dropdown');

let displayUserDropdown = false;

function userDropdownDisplay() {
  userDropdown.style.display = displayUserDropdown ? 'block' : 'none';
  userIcon.style.border = displayUserDropdown ? '2px solid #656266' : ''
  userIcon.style.backgroundColor = displayUserDropdown ? '#656266' : '';
}

userIcon.addEventListener('click', () => {
  if(displayNotificationDropdown) {
    displayNotificationDropdown = !displayNotificationDropdown
    notificationDropdownDisplay();
    displayUserDropdown = !displayUserDropdown;
    userDropdownDisplay();
  }else {
    displayUserDropdown = !displayUserDropdown;
    userDropdownDisplay();
  }
})


// Notification dropdown

const notificationBell = document.getElementById('notification-bell-container');
const notificationDropdown = document.getElementById('notification-dropdown');

let displayNotificationDropdown = false;

function notificationDropdownDisplay() {
  notificationDropdown.style.display = displayNotificationDropdown ? 'block' : 'none';
  notificationBell.style.backgroundColor = displayNotificationDropdown ? '#656266' : '';
}

notificationBell.addEventListener('click', () => {
  if (displayUserDropdown) {
    displayUserDropdown = !displayUserDropdown;
    userDropdownDisplay()
    displayNotificationDropdown = !displayNotificationDropdown;
    notificationDropdownDisplay()
  }else {
    displayNotificationDropdown = !displayNotificationDropdown;
    notificationDropdownDisplay()
  }
})

/* OPEN/COLLAPSE STYLE GUIDE CONTENT */

const openContent = document.getElementById('collapse-icon-open');
const closeContent = document.getElementById('collapse-icon-close');
const styleGuideContent = document.getElementById('style-guide-content-container');

openContent.addEventListener('click', () => {
  styleGuideContent.style.display = 'block';
  openContent.style.display = 'none';
  closeContent.style.display = 'block'
})

closeContent.addEventListener('click', () => {
  styleGuideContent.style.display = 'none';
  openContent.style.display = 'block';
  closeContent.style.display = 'none'
})

/*ACCORDION*/

// JavaScript to toggle the active class
const accordionHeader = document.querySelectorAll('.accordion_header');

accordionHeader.forEach(function(header) {
  header.addEventListener('click', function() {
    accordionHeader.forEach(elem => elem.parentElement.classList.remove('active'));
    var item = this.parentElement;
    item.classList.toggle('active');
  });
});

// change the accordion svg icons
const HIDDEN_CLASS = 'hidden';
const MARKED_AS_DONE_CLASS = 'checkbox_done';

// Selecting NodeLists
const accordionNotCompletedSvg = document.querySelectorAll('.accordion_not_completed_svg');
const accordionLoadingSvg = document.querySelectorAll('.accordion_loading_svg');
const accordionCompletedSvg = document.querySelectorAll('.accordion_completed_svg');

function handleMarkAsDone(event) {
  // Get the parent element of the button clicked
  const parentElement = event.target.closest('.accordion_item');

  // Find the SVG elements within the parent element
  const notCompletedSvg = parentElement.querySelector('.accordion_not_completed_svg');
  const loadingSvg = parentElement.querySelector('.accordion_loading_svg');
  const completedSvg = parentElement.querySelector('.accordion_completed_svg');

  // Add and remove the 'hidden' class as needed
  notCompletedSvg.classList.add(HIDDEN_CLASS);
  loadingSvg.classList.remove(HIDDEN_CLASS);

  setTimeout(() => {
    loadingSvg.classList.add(HIDDEN_CLASS);
    completedSvg.classList.remove(HIDDEN_CLASS);
  }, 3000);

  parentElement.classList.add(MARKED_AS_DONE_CLASS)
}

function handleMarkAsNotDone(event) {
  // Get the parent element of the button clicked
  const parentElement = event.target.closest('.accordion_item');

  // Find the SVG elements within the parent element
  const notCompletedSvg = parentElement.querySelector('.accordion_not_completed_svg');
  const loadingSvg = parentElement.querySelector('.accordion_loading_svg');
  const completedSvg = parentElement.querySelector('.accordion_completed_svg');

  completedSvg.classList.add(HIDDEN_CLASS);
  loadingSvg.classList.remove(HIDDEN_CLASS);

  setTimeout(() => {
    loadingSvg.classList.add(HIDDEN_CLASS);
    notCompletedSvg.classList.remove(HIDDEN_CLASS);
  }, 3000);

  parentElement.classList.remove(MARKED_AS_DONE_CLASS)
}

function handleMarkDoneOrNotDone(event) {
  const parentElement = event.target.closest('.accordion_item');

  const markedAsDone = parentElement.classList.contains(MARKED_AS_DONE_CLASS);

  if(markedAsDone) {
    handleMarkAsNotDone(event);
  }else {
    handleMarkAsDone(event)
  }
}

document.querySelectorAll('.action_btn').forEach(function(button) {
  button.addEventListener('click', handleMarkDoneOrNotDone);
});
