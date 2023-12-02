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
document.querySelectorAll('.accordion-header').forEach(function(header) {
  header.addEventListener('click', function() {
      var item = this.parentElement;
      item.classList.toggle('active');
  });
});