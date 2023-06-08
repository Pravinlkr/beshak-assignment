// get element
const closedWidget = document.getElementById('closed-widget');
const openWidgetWrapper = document.getElementById('open-widget-wrapper');
const openWidget = document.getElementById('open-widget');
const closedButton = document.getElementById('close-button');

// show closedWidget by default
closedWidget.classList.add('show');
openWidgetWrapper.classList.add('hide');
openWidget.classList.add('close-widget-animation');

// open widget
closedWidget.addEventListener('click', () => {
  closedWidget.classList.add('hide');
  closedWidget.classList.remove('show');
  openWidgetWrapper.classList.add('show');
  openWidget.className = 'open-widget open-widget-animation';
  openWidgetWrapper.classList.remove('hide');
})

// close widget
closedButton.addEventListener('click', () => {
  openWidget.className = 'open-widget close-widget-animation';
  setTimeout(()=> {
    closedWidget.classList.remove('hide');
    closedWidget.classList.add('show');
    openWidgetWrapper.classList.remove('show');
    openWidgetWrapper.classList.add('hide');
  },1000);
})
