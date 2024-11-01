'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




btnScrollTo.addEventListener('click', function(e) {

  // to get the size and position of the section relative to the viewport.
  const sectionCoords = section1.getBoundingClientRect();

  // console.log('section rect', sectionCoords);

  // console.log('btn rect', e.target.getBoundingClientRect());

  // console.log('current scroll position', window.scrollX, scrollY);

  // console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);


  // Now to implement the scrolling

  // use only when we want to set the x and y coords
  // window.scrollTo(sectionCoords.left, sectionCoords.top + window.scrollY);


  // use when we want to add some form of animation or smooth scroll.
  window.scrollTo({
    top: sectionCoords.top + window.scrollY,
    left: sectionCoords.left,
    behavior: 'smooth',
  })


  // the more modern way of implementing smooth scroll. 
  section1.scrollIntoView({behavior: 'smooth'});


});



// IMPLEMENTING smooth scrolling PAGE NAVIGATION USING EVENT DELEGATION


/*
// not advisable because think of it when we need more than 1000 child element to listen for an event. It is best to use event delegation through it parent element.
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');

    const section = document.querySelector(id).getBoundingClientRect();

    window.scrollTo({
      top: section.top + window.scrollY,
      left: section.left,
      behavior: 'smooth',
    })
  })
});
*/

document.querySelector('.nav__links').addEventListener('click', e => {

  // if the tag name of the first element clicked on is 'a'
  if (e.target.tagName === 'A') {

    // firstly, prevent default
    e.preventDefault();

    // get the href of the element
    const id = e.target.getAttribute('href');

    // now get the bounding properties
    const section = document.querySelector(id).getBoundingClientRect();


    // scroll to this position on the window.
    window.scrollTo({
      top: section.top + window.scrollY,
      left: section.left,
      behavior: 'smooth',
    })
  }
  
});



const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


// tabbed component.
tabContainer.addEventListener('click', e => {

  let clicked = e.target.closest('.operations__tab');

  if (clicked) {
    // assess the tab No of our target element.
    const tabNo = clicked.getAttribute('data-tab');

    // remove active class for all tab element 
    [...e.currentTarget.children].forEach(el => el.classList.remove('operations__tab--active'));

    // add it to our target(clicked) element
    clicked.classList.add('operations__tab--active');


    // remove the active class from all content section
    [...tabsContent].forEach(el => el.classList.remove('operations__content--active'));
  

    // Now add the active class to our corresponding content.
    document.querySelector(`.operations__content--${tabNo}`).classList.add('operations__content--active');
  }

});




// LEARNING EXAMPLES
/*
const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = `We use cookies for improved functionality and analytics. <button class='btn btn--close-cookies'>Accept Cookies</button>`;

// header.prepend(message);


// the boolean make sure it clone the children of the element too.
// header.append(message.cloneNode(true));


header.append(message);

// We can also use the before() and after() method

// header.before(message);
// header.after(message);


// Delecting elements

document.querySelector('.btn--close-cookies').addEventListener('click', () => {
  message.remove(); 

  // This was the previous way of removing or deleting element from the DOM. 
  // message.parentElement.removeChild(message);
});





// to set css styles in js. They are usually set as inline styles.

message.style.backgroundColor = '#37383d';
message.style.width = '120%';


// Getting styles with js

// returns an empty string. 
console.log(message.style.height);


// It is important to note that we can only get the inline style of an element using javascript. We cannot get a style set on a class or a selector we example.

console.log(message.style.backgroundColor);


// We can get the styles of an element regardless of where it styles was set using;

// console.log(getComputedStyle(message));

// we can go further and get a specific style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);


// We cannot change a property using this method.
// getComputedStyle(message).backgroundColor = 'white';


// What we can do is use it as an expression


message.style.height = Number.parseInt(getComputedStyle(message).height) + 20 + 'px';

console.log(Number.parseInt(getComputedStyle(message).height, 15));




// Changing CSS Custom properties / Vaiables with js using the setProperty() method

document.documentElement.style.setProperty('--color-primary', 'purple');



// Manipulating Attributes with javascript.

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// it is important to note that we cannot query an attribute which is not a standard attribute of that element. for example images have standard attributes alt and src.


// so if we add a custom attribute and try to get it with js, it will return 'undefined'.

console.log(logo.designer);


// But we can use another way to get or set custom attributes this way. It can also work with standard attributes


// to get attributes
console.log(logo.getAttribute('designer'));

// to set attributes
logo.setAttribute('alt', 'minimalist logo');
console.log(logo.alt);


// the getAttribute() method is more useful because it returns the relative path of the link. The same is also true for the href attribute on link

console.log(logo.src);
console.log(logo.getAttribute('src'));




// DATA-prefix attribute

// once we set our data-prefixed attribute, we can access it from the dataset object;
console.log(logo.dataset.versionNumber);

// data- prefix attribute are very useful especially when we work with UI and need to store data in the UI(html)








const h1 = document.querySelector('h1');

const alertH1 = function() {
  alert('Great!, You are reading the heading');


  // we can remove the event listener if we only need it to be fired once.

  // h1.removeEventListener('mouseenter', alertH1);
}

h1.addEventListener('mouseenter', alertH1);


// or we can remove it after some time has passed. let's remove it after 3 seconds now.

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// note the 1000ms == 1 second.






// EVENT PROPAGATION



// Write a function to generate a random color in the form rgb(212, 12, 109);

// generate random number
const randomNumber = function(max=255) {
  return Math.floor(Math.random() * max) + 1;
}


console.log(randomNumber(250));

// generate random number 

const randomColor = function() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

console.log(randomColor());



document.querySelector('.nav__link').addEventListener('click', function(e) {

  this.style.backgroundColor = randomColor();
  console.log(`LINK: ${e.target}, ${e.currentTarget}`);


  // here the current target is equal to the this keyword. because the current target is the element
  console.log(e.currentTarget === this);

}, {capture: true});

document.querySelector('.nav__links').addEventListener('click', function(e) {

  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER: ${e.target}, ${e.currentTarget}`);

  // to stop event propagation. Not a good idea to stop the propagation of events.
  // e.stopPropagation()

});

document.querySelector('.nav').addEventListener('click', function(e) {

  this.style.backgroundColor = randomColor();
  console.log(`NAV: ${e.target}, ${e.currentTarget}`);
});




// DOM TRAVERSING


const h1 = document.querySelector('h1');

// going downward - to get the child elements

// to get specific element
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.children); // returns a live html collections

console.log(h1.childNodes); // returns all the nodes including text nodes.


// cannot set the property of the first child because it is a node. So best to use element.firstElementChild in this case.
// h1.firstChild.style.color = 'white';

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';




// Going upward - Parents

// both returns the parent elements.
console.log(h1.parentNode)
console.log(h1.parentElement);



// to get the closest parent which have a specific class name - it may not be a direct parent. and the class doesnt have to be complete. It is useful for event delegation.

h1.closest('.header').style.background = 'var(--gradient-secondary)';


// we can also use it to assess a closest element using the tagName.

console.log(h1.closest('h1')); // which is itself.

// The closest method finds parents - no matter how far away they are in the dom tree.





// GOING SIDEWAYS - SIBLINGS


// for elements
console.log(h1.nextElementSibling);
console.log(h1.previousElementSibling);


// for nodes
console.log(h1.nextSibling);
console.log(h1.previousSibling);


// to get all the siblings
console.log(h1.parentElement.children);


// quickly convert nodeList or HTMLCollection to js array using the REST PARAMETER
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.color = 'white';
});
*/



/*
// tabbed component.
tabContainer.addEventListener('click', e => {
  if (e.target.classList.contains('operations__tab')) {

    // assess the tab No of our target element.
    const tabNo = e.target.getAttribute('data-tab');

    // search for the tab element that contains the active class
    [...e.currentTarget.children].forEach(el => {

      // remove it if it finds it
      if (el.classList.contains('operations__tab--active')) el.classList.remove('operations__tab--active');

      // add it to our target element
      e.target.classList.add('operations__tab--active');


      
    });



    // get back to the parent element and query all it children
    [...e.currentTarget.parentElement.children].forEach(el => {

      // only assess the one that contains this particular class
      if (el.classList.contains('operations__content')) {

        // if it contains this active class - then remove it
        if (el.classList.contains('operations__content--active')) el.classList.remove('operations__content--active');

        // if it does not contains the active class - addd it to the element that contains our target tab No.
        if (el.classList.contains(`operations__content--${tabNo}`)) el.classList.add('operations__content--active');
      } 
    });


  }
})
*/



// Passing Arguments to the Event function


// MENU FADE ANIMATIONs
// the opposite of mouseenter event is mouseleave & the opposite of mouseover is mouseout.
// mouseenter does not listen to bubbling or capturing.


function fadeLinks(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

  
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}


/*
// directly calling our function in the event listener will not work. Because the event listener expect a function that returns a value. 
nav.addEventListener('mouseover', fadeLinks(e, 0.5));



// So what we can do is by calling our function using the event anonymous function.
nav.addEventListener('mouseover', e => {
  fadeLinks(e, 0.5);
})


nav.addEventListener('mouseout', e => {
  fadeLinks(e, 1);
});
*/



// But we can make it even better. by using the bind method. The bind method creates a copy of the function it is called on. It will set the 'this' keyword passed in the function to whatever value we bind.


// Bind will return a new function where 'this' keyword is set to the argument we passed. We use the bind method to pass argument to a event listener function.

nav.addEventListener('mouseover', fadeLinks.bind(0.5))


nav.addEventListener('mouseout', fadeLinks.bind(1));

// it is impossible to pass an argument into an event handler function apart from the event object.

// If we want to pass additional argument into an handler function. we need to use the 'this' keyword.

// if we have multiple values, we can pass them all using the bind method. like an array or an object etc




// Sticky Navigation.
/*

const sectionCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', e => {

  
  // console.log(window.scrollY);

  

  // console.log(sectionCoords.top);

  if (window.scrollY > sectionCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

})
*/

// tho while we can do it like that, it is not efficient. it is bad for performance. So we should not consider using the scroll event for detecting or placing element simply because the scroll event fires all the time which can be bad for performance. We should instead use the intersection observer API








// THE INTERSECTION OBSERVER API
// it help us observe the way an element intersects another element or the viewport.

/*
const obsObj = {
  root: null,
  threshold: [0, 0.2],
  rootMargin: 90px,
}

const obsCallback = function(entries, obsObj) {

  entries.forEach(entry => console.log(entry));
}


const observer = new IntersectionObserver(obsCallback, obsObj)

observer.observe(section1);
*/






// Implementing sticky navigation with the intersection observer

const stickyNav = function(entries) {

  // both means the same thing, but the second one uses destructuring. to get the first object
  // const [entry] = entries[0];
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}


const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.offsetHeight}px`,
});
headerObserver.observe(header);



// Reveal sections on scroll with the intersection observer.

const revealSection = function(entries, observer) {

  const [entry] = entries;
  console.log(entry);


  if (!entry.isIntersecting)  return;
    
  // remove the hidden class.
  entry.target.classList.remove('section--hidden'); 


  // so to remove observer when they are done been observed. This is necessary so as not to affect website performance.
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});


allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});




// Lazy loading images.
// Really great for performance and website load optimization.


// we select all the images that have the attribute 'data-src'.
const imgTarget = document.querySelectorAll('img[data-src]');

console.log(imgTarget);