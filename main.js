/*DROPDOWN*/

// User dropdown

const userIcon = document.getElementById('user-info-container');
const userDropdown = document.getElementById('user-dropdown');
const allUserDropdownItem = userDropdown.querySelectorAll('[role = "menuitem"]');

let displayUserDropdown = false;


function closeUserDropdown() {
  userIcon.ariaExpanded = 'false';
  userIcon.focus();
  document.body.style.overflow = 'auto';

}

// the function below handles escape key press

function handleUserDropdownEscapekeyPress(event) {
  if(event.key === 'Escape') {
    userDropdownDisplay();
  }
}


function handleUserDropdownArrowKeypress(event, userDropdownIndex) {
  const isLastUserDropdownItem = userDropdownIndex === allUserDropdownItem.length - 1;
  const isFirstUserDropdownItem = userDropdownIndex === 0;

  const nextUserDropdownItem = allUserDropdownItem.item(userDropdownIndex + 1);
  const previousUserDropdownItem = allUserDropdownItem.item(userDropdownIndex - 1);

  if(event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if(isLastUserDropdownItem) {
      allUserDropdownItem.item(0).focus();
      return;
    }
    nextUserDropdownItem.focus()
  }

  if(event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if(isFirstUserDropdownItem) {
      allUserDropdownItem.item(allUserDropdownItem.length - 1).focus();
      return;
    }
    previousUserDropdownItem.focus();
  }

}

function openUserDropdown() {

  userIcon.ariaExpanded = 'true';
  allUserDropdownItem.item(0).focus();
  document.body.style.overflow = 'hidden';

  userDropdown.addEventListener('keyup', handleUserDropdownEscapekeyPress);

  allUserDropdownItem.forEach(function(item, itemIndex) {
    item.addEventListener('keyup', function(event) {
      handleUserDropdownArrowKeypress(event, itemIndex);
    });
  })
}

function userDropdownDisplay() {
  const isexpanded = userIcon.ariaExpanded;

  userDropdown.classList.toggle('user_dropdown_active');
  userIcon.style.border = displayUserDropdown ? '2px solid #656266' : ''
  userIcon.style.backgroundColor = displayUserDropdown ? '#656266' : '';

  if(isexpanded === 'true') {
    closeUserDropdown();
  }else {
    openUserDropdown();
  }

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
const allNotificationDropdownItem = notificationDropdown.querySelectorAll('[role = "menuitem"]');

let displayNotificationDropdown = false;

function closeNotificationDropdown() {
  notificationBell.ariaExpanded = 'false';
  notificationBell.focus();
  document.body.style.overflow = 'auto';

}

function handleNotificationDropdownEscapeKeyPress(event) {
  if(event.key === 'Escape') {
    notificationDropdownDisplay();
  }
}

function handleNotificationDropdownArrowKeyPress(event, notificationDropdownIndex) {
  const isLastNotificationDropdownItem = notificationDropdownIndex === allNotificationDropdownItem.length - 1;
  const isFirstNotificationDropdownItem = notificationDropdownIndex === 0;

  const nextNotificationDropdownItem = allNotificationDropdownItem.item(notificationDropdownIndex + 1);
  const previousNotificationDropdownItem = allNotificationDropdownItem.item(notificationDropdownIndex - 1);

  if(event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if(isLastNotificationDropdownItem) {
      allNotificationDropdownItem.item(0).focus();
      return;
    }
    nextNotificationDropdownItem.focus()
  }

  if(event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if(isFirstNotificationDropdownItem) {
      allNotificationDropdownItem.item(allNotificationDropdownItem.length - 1).focus();
      return;
    }
    previousNotificationDropdownItem.focus();
  }
}

function openNotificationDropdown() {

  notificationBell.ariaExpanded = 'true';
  allNotificationDropdownItem.item(0).focus();
  document.body.style.overflow = 'hidden';

  notificationDropdown.addEventListener('keyup', handleNotificationDropdownEscapeKeyPress);

  allNotificationDropdownItem.forEach(function(item, itemIndex) {
    item.addEventListener('keyup', function(event) {
      handleNotificationDropdownArrowKeyPress(event, itemIndex);
    });
  })

}

function notificationDropdownDisplay() {
  const isexpanded = notificationBell.ariaExpanded;
  
  notificationDropdown.classList.toggle('notification_dropdown_active');
  notificationBell.style.backgroundColor = displayNotificationDropdown ? '#656266' : '';
  
  if(isexpanded === 'true') {
    closeNotificationDropdown();
  }else {
    openNotificationDropdown();
  }
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

const styleGuideButton = document.getElementById('style-guide-collapse-icon');
const openContent = document.getElementById('collapse-icon-open');
const closeContent = document.getElementById('collapse-icon-close');
const styleGuideContent = document.getElementById('style-guide-accordion');
const allStyleGuideContentItem = styleGuideContent.querySelectorAll('[role = "menuitem"]');

let styleGuideExpanded = true;


function handleStyleGuideContentArrowKeypress(event, styleGuideContentIndex) {
  const isLastStyleGuideContentItem = styleGuideContentIndex === allStyleGuideContentItem.length - 1;
  const isFirstStyleGuideContentItem = styleGuideContentIndex === 0;

  const nextStyleGuideContentItem = allStyleGuideContentItem.item(styleGuideContentIndex + 1);
  const previousStyleGuideContentItem = allStyleGuideContentItem.item(styleGuideContentIndex - 1);

  if(event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if(isLastStyleGuideContentItem) {
      allStyleGuideContentItem.item(0).focus();
      return;
    }
    nextStyleGuideContentItem.focus()
  }

  if(event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if(isFirstStyleGuideContentItem) {
      allStyleGuideContentItem.item(allStyleGuideContentItem.length - 1).focus();
      return;
    }
    previousStyleGuideContentItem.focus();
  }
}

function expandStyleGuide() {
  styleGuideContent.style.display = 'block';
  openContent.style.display = 'none';
  closeContent.style.display = 'block';
  styleGuideExpanded = true;

  styleGuideButton.ariaLabel = 'collapse style guide'
  styleGuideButton.ariaExpanded = 'true'
  
  allStyleGuideContentItem.item(0).focus()

}

function collapseStyleGuide() {
  styleGuideContent.style.display = 'none';
  openContent.style.display = 'block';
  closeContent.style.display = 'none'
  styleGuideExpanded = false;

  styleGuideButton.ariaLabel = 'expand style guide'
  styleGuideButton.ariaExpanded = 'false'
}

function handleStyleGuideExpandAndCollapse() {
  if(styleGuideExpanded === true) {
    collapseStyleGuide();
    console.log('content collapsed')
  }else {
    expandStyleGuide()
    console.log('content expanded')
  }
}

styleGuideButton.addEventListener('click', handleStyleGuideExpandAndCollapse)

if(styleGuideExpanded === true) {
  allStyleGuideContentItem.forEach(function(item, itemIndex) {
    item.addEventListener('keyup', function(event) {
      handleStyleGuideContentArrowKeypress(event, itemIndex);
    });
  })
}

/*PROGRESS BAR*/

const accordionItem = document.querySelectorAll('.accordion_item')
const progressBar = document.getElementById('progress-bar');
const itemsCompleted = document.getElementById('items-completed');
let completedArr = [];


function handleTaskCompletion() {
  accordionItem.forEach(function(elem) {
    if(elem.classList.contains('checkbox_done') && !completedArr.includes(elem)) {
      completedArr.push(elem);
    }
  } );

  let filteredArr = completedArr.filter(elem => elem.classList.contains('checkbox_done'));
  
  itemsCompleted.innerText = filteredArr.length;

  progressBar.style.width = `${filteredArr.length * 20}%`;

}

/*ACCORDION*/

// JavaScript to toggle the active class
const accordionHeader = document.querySelectorAll('.accordion_header');

function collapseAccordion(elem) {
  elem.parentElement.classList.remove('active');
  elem.setAttribute('aria-expanded', 'false');
}

function handleAccordionArrowKeyPress(event, allAccordionContentElement, accordionContentElementIndex) {
  const isLastAccordionContentElement = accordionContentElementIndex === allAccordionContentElement.length - 1;
  const isFirstAccordionContentElement = accordionContentElementIndex === 0;

  const nextAccordionContentElement = allAccordionContentElement.item(accordionContentElementIndex + 1);
  const previousAccordionContentElement = allAccordionContentElement.item(accordionContentElementIndex - 1);

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if (isLastAccordionContentElement) {
      allAccordionContentElement.item(0).focus();
      return;
    }
    nextAccordionContentElement.focus();
  }

  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if (isFirstAccordionContentElement) {
      allAccordionContentElement.item(allAccordionContentElement.length - 1).focus();
      return;
    }
    previousAccordionContentElement.focus();
  }
}

function expandAccordion(elem) {
  elem.parentElement.classList.add('active');
  elem.setAttribute('aria-expanded', 'true');

  const accordionContent = elem.parentElement.querySelector('.accordion_content');
  const accordionMainContent = accordionContent.querySelector('.accordion_main_content');
  const accordionMainContentElements = accordionMainContent.querySelectorAll('.accordion_content_element');
  const actionBtn = accordionMainContentElements.item(1);


  accordionMainContentElements.item(0).focus();

  accordionMainContentElements.forEach(item => item.addEventListener('keyup', () => {
    elem.focus();
  }));

  accordionMainContentElements.forEach(function (item, accordionContentElementIndex) {
    item.addEventListener('keyup', function (event) {
      handleAccordionArrowKeyPress(event, accordionMainContentElements, accordionContentElementIndex);
    });
  });
}

function handleExpandAndCollapseAccordion(clickedElem) {
  // close all other accordion
  accordionHeader.forEach(function (elem) {
    if (elem !== clickedElem) {
      elem.parentElement.classList.remove('active');
      elem.setAttribute('aria-expanded', 'false');
    }
  });

  if (clickedElem.parentElement.classList.contains('active')) {
    collapseAccordion(clickedElem);
  } else {
    expandAccordion(clickedElem);
  }
}

accordionHeader.forEach(function(header) {
  header.addEventListener('click', function () {
    handleExpandAndCollapseAccordion(header);
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

  const statusElement = parentElement.querySelector('.accordion_item_status');

  // Find the SVG elements within the parent element
  const notCompletedSvg = parentElement.querySelector('.accordion_not_completed_svg');
  const loadingSvg = parentElement.querySelector('.accordion_loading_svg');
  const completedSvg = parentElement.querySelector('.accordion_completed_svg');

  // Add and remove the 'hidden' class as needed
  notCompletedSvg.classList.add(HIDDEN_CLASS);
  loadingSvg.classList.remove(HIDDEN_CLASS);

  statusElement.ariaLabel = 'loading please wait';

  setTimeout(() => {
    loadingSvg.classList.add(HIDDEN_CLASS);
    completedSvg.classList.remove(HIDDEN_CLASS);

    event.target.ariaLabel = event.target.ariaLabel.replace("as not done", "as done");
    
    statusElement.ariaLabel = 'successfully marked as done';
  }, 3000);

  parentElement.classList.add(MARKED_AS_DONE_CLASS);

}

function handleMarkAsNotDone(event) {
  // Get the parent element of the button clicked
  const parentElement = event.target.closest('.accordion_item');

  // Get status listener of the button clicked
  const statusElement = parentElement.querySelector('.accordion_item_status');

  // Find the SVG elements within the parent element
  const notCompletedSvg = parentElement.querySelector('.accordion_not_completed_svg');
  const loadingSvg = parentElement.querySelector('.accordion_loading_svg');
  const completedSvg = parentElement.querySelector('.accordion_completed_svg');

  completedSvg.classList.add(HIDDEN_CLASS);
  loadingSvg.classList.remove(HIDDEN_CLASS);

  statusElement.ariaLabel = 'loading please wait'

  setTimeout(() => {
    loadingSvg.classList.add(HIDDEN_CLASS);
    notCompletedSvg.classList.remove(HIDDEN_CLASS);
    
    event.target.ariaLabel = event.target.ariaLabel.replace("as done", "as not done");
    
    statusElement.ariaLabel = 'successfully marked as not done';
  }, 3000);

  parentElement.classList.remove(MARKED_AS_DONE_CLASS);

}

function handleMarkDoneOrNotDone(event) {
  const parentElement = event.target.closest('.accordion_item');

  const markedAsDone = parentElement.classList.contains(MARKED_AS_DONE_CLASS);

  if(markedAsDone) {
    handleMarkAsNotDone(event);

    setTimeout(() => {
      handleTaskCompletion();

    }, 4000);
  }else {
    handleMarkAsDone(event);

    setTimeout(() => {
      handleTaskCompletion();
      
    }, 4000);
  }
}

document.querySelectorAll('.action_btn').forEach(function(button) {
  button.addEventListener('click', handleMarkDoneOrNotDone);
});
