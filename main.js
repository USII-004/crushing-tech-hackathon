/*DROPDOWN*/

const userIcon = document.getElementById('user-info-container');
const userDropdown = document.getElementById('user-dropdown')

let displayUserDropdown = false

function userDropdownDisplay() {
  userDropdown.style.display = displayUserDropdown ? 'block' : 'none';
}

userIcon.addEventListener('click', () => {
  displayUserDropdown = !displayUserDropdown;
  userDropdownDisplay()
  console.log(displayUserDropdown)
  console.log(userDropdown.style.display)
})
