/*DROPDOWN*/

// User dropdown

const userIcon = document.getElementById('user-info-container');
const userDropdown = document.getElementById('user-dropdown');

let displayUserDropdown = false

function userDropdownDisplay() {
  userDropdown.style.display = displayUserDropdown ? 'block' : 'none';
  userIcon.style.border = displayUserDropdown ? '3px solid #616161' : ''
  userIcon.style.backgroundColor = displayUserDropdown ? '#616161' : '';
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
  notificationBell.style.backgroundColor = displayNotificationDropdown ? '#616161' : '';
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