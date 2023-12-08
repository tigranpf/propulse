const url = window.location.pathname;


const navLinks = [
  { name: 'Home', id: 'index.html#top' },
  { name: 'About Us', id: 'index.html#about' },
  { name: 'Services', id: 'index.html#services' },
  { name: 'Portfolio', id: 'index.html#portfolio' },
  { name: 'Author', id: 'author.html' }
];

const services = [
  {
    icon: 'assets/images/service-icon-01.png',
    title: 'Public Relations Strategy',
    description: 'Crafting impactful narratives and engaging strategies to elevate your brand\'s presence and resonance.',
  },
  {
    icon: 'assets/images/service-icon-02.png',
    title: 'Audience Engagement Metrics',
    description: 'Harnessing audience engagement metrics to understand audience behavior, optimizing strategies for maximum engagement.',
  },
  {
    icon: 'assets/images/service-icon-03.png',
    title: 'Campaign Reporting',
    description: 'Delivering comprehensive insights and analysis to measure the success and impact of your PR initiatives.',
  },
  {
    icon: 'assets/images/service-icon-04.png',
    title: 'SEO Enhancement Solutions',
    description: 'Providing tailored recommendations and strategies to boost your brand\'s visibility and relevance in the digital landscape.',
  }
];

const skillsData = [
  { skill: 'Branding Solutions', percentage: 84 },
  { skill: 'Campaign Analysis', percentage: 88 },
  { skill: 'PR Strategy', percentage: 94 },
  { skill: 'Event Organizing', percentage: 86 }
];

const formStructure = {
  id: 'contact-form',
  action: '',
  method: 'post',
  fields: [
    { type: 'input', inputType: 'text', name: 'name', id: 'name', placeholder: 'Name'},
    { type: 'input', inputType: 'text', name: 'surname', id: 'surname', placeholder: 'Surname'},
    { type: 'input', inputType: 'text', name: 'email', id: 'email', placeholder: 'Your Email'},
    { type: 'textarea', name: 'message', id: 'message', placeholder: 'Message'},
    { type: 'dropdown', name: 'dropdown', id: 'dropdown', options: ['How did you heard about us?', 'Social Media', 'Referral', 'Web Search', 'Event Attendance', 'Advertisement', 'Other']},
    { type: 'radio', name: 'radio', id: 'radio', options: ['Brand Promotion', 'Event Management', 'Media Relations', 'Marketing Strategy', 'Other']}
  ],
  submitButtonId: 'form-submit',
  submitButtonClass: 'main-button',
  submitButtonText: 'Send Message',
};

const imagesInfo = [
  { src: 'assets/images/events/event1.jpg', alt: 'Event 1' },
  { src: 'assets/images/events/event2.jpg', alt: 'Event 2' },
  { src: 'assets/images/events/event3.jpg', alt: 'Event 3' },
  { src: 'assets/images/events/event4.jpg', alt: 'Event 4' },
  { src: 'assets/images/events/event5.jpg', alt: 'Event 5' },
  { src: 'assets/images/events/event6.jpg', alt: 'Event 6' },
  { src: 'assets/images/events/event7.jpg', alt: 'Event 7' }
];


// Dynamic nav links
function createNavLinks() {
  const nav = document.querySelector('.nav');

  navLinks.forEach(link => {
    const listItem = document.createElement('li');
    const aTag = document.createElement('a');
    console.log(url);
    if(url === '/propulse/index.html' || url === '/propulse/'){
    if (!link.name == 'Author'){
    aTag.href = `#${link.id}`;
    }
    else{
      aTag.href = `${link.id}`
    }
  }
  if (url == '/propulse/author.html'){
    if (link.name == 'Author'){
      aTag.href = `#`;
      }
      else{
        aTag.href = `${link.id}`
      }
  }
    aTag.textContent = link.name;

    listItem.classList.add('scroll-to-section');
    if (link.name === 'Home') {
      aTag.classList.add('active');
    }

    listItem.appendChild(aTag);
    nav.appendChild(listItem);
  });
}

// Contact button in nav
function createContactButton() {
  const contactButton = document.createElement('div');
  contactButton.classList.add('main-red-button');
  console.log(url);
  
  const buttonLink = document.createElement('a');
  if(url == '/propulse/author.html'){
    buttonLink.href= 'index.html#contact'

  }
  else if(url == '/propulse/index.html' || url == '/propulse/'){
    buttonLink.href = '#contact';
  }
  buttonLink.textContent = 'Contact Now';

  contactButton.appendChild(buttonLink);

  const listItem = document.createElement('li');
  listItem.classList.add('scroll-to-section');
  listItem.appendChild(contactButton);

  const nav = document.querySelector('.nav');
  nav.appendChild(listItem);
}

// Contact button on top of the page
function createContactButtonTop() {
  const contactButton = document.createElement('div');
  contactButton.classList.add('main-red-button');

  const buttonLink = document.createElement('a');
  buttonLink.href = '#contact';
  buttonLink.textContent = 'Contact Now';
  buttonLink.classList.add('text-white', 'fs-5');

  contactButton.appendChild(buttonLink);

  const container = document.querySelector('#contact-us-top');
  container.appendChild(buttonLink);
}

// Show/Hide Scroll button
function toggleScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}

function generateServiceHTML(service) {
  return `
    <div class="col-lg-6">
      <div class="item wow fadeIn">
        <div class="icon">
          <img src="${service.icon}" alt="${service.title}">
        </div>
        <div class="text-center">
          <h4>${service.title}</h4>
          <p>${service.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Make blurry nav on scroll down
function onScroll() {
  var scroll = window.scrollY || document.documentElement.scrollTop;
  var header = document.querySelector('header');
  
  if (scroll > 0) {
    header.classList.add("background-header");
  } else {
    header.classList.remove("background-header");
  }
}

// Toggle nav for lower resolutions
function menuDropdownToggle() {
  const menuTrigger = document.querySelector(".menu-trigger");

  if (menuTrigger) {
    menuTrigger.addEventListener('click', function() {
      menuTrigger.classList.toggle('active');
      const nav = document.querySelector('.header-area .nav');
      nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    });
  }
}

function generateSkillHTML(skill) {
  return `
    <div class="col-lg-12">
      <div class="progress-skill-bar">
        <h4>${skill.skill}</h4>
        <span class="span-left-${skill.percentage}">${skill.percentage}%</span>
        <div class="filled-bar filled-bar-${skill.percentage}"></div>
        <div class="full-bar"></div>
      </div>
    </div>
  `;
}

function fillSkillBars() {
  const row = document.querySelector('#skills');

  skillsData.forEach(skill => {
    const skillHTML = generateSkillHTML(skill);
    row.innerHTML += skillHTML;
  });
}

// Generate Images for Slider
function createAndAppendImages(images) {
  const slider = document.querySelector('.slider');

  images.forEach((image) => {
    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = image.src;
    img.alt = image.alt;

    div.appendChild(img);
    slider.appendChild(div);
  });
}

// Generate dynamic form
function createForm(formStructure) {
  const form = document.createElement('form');
  form.id = formStructure.id || '';
  form.action = formStructure.action || '';
  form.method = formStructure.method || '';

  formStructure.fields.forEach(field => {
    const fieldset = document.createElement('fieldset');

    if (field.type === 'input' || field.type === 'textarea') {
      const input = document.createElement(field.type === 'input' ? 'input' : 'textarea');
      input.type = field.inputType || 'text';
      input.name = field.name || '';
      input.id = field.id || '';
      input.placeholder = field.placeholder || '';

      if (field.pattern) {
        input.pattern = field.pattern;
      }

      if (field.type === 'textarea') {
        input.classList.add('form-control');
      }

      fieldset.appendChild(input);
    } else if (field.type === 'dropdown') {
      const select = document.createElement('select');
      select.name = field.name || '';
      select.id = field.id || '';


      field.options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(/\s/g, '_');
        option.text = optionText;
        select.appendChild(option);
      });

      fieldset.appendChild(select);
    } else if (field.type === 'radio') {
      const spanRadio = document.createElement('span')
      spanRadio.classList.add('text-dark');
      spanRadio.innerHTML = 'Why are you contacting us?';
      fieldset.appendChild(spanRadio);

      field.options.forEach(optionText => {
        const radioDiv = document.createElement('div');
        radioDiv.className = 'radio-group';

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = field.name || '';
        radioInput.id = optionText.toLowerCase().replace(/\s/g, '_');
        radioInput.value = optionText.toLowerCase().replace(/\s/g, '_');


        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = radioInput.id;
        radioLabel.textContent = optionText;

        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);
        fieldset.appendChild(radioDiv);
        fieldset.classList.add('mt-3');
      });

    }

    form.appendChild(fieldset);
  });

  const buttonFieldset = document.createElement('fieldset');
  buttonFieldset.classList.add('d-flex', 'flex-column', 'justify-content-start');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = formStructure.submitButtonId || '';
  submitButton.className = formStructure.submitButtonClass || '';
  submitButton.textContent = formStructure.submitButtonText || 'Submit';
  buttonFieldset.appendChild(submitButton);

  form.appendChild(buttonFieldset);


  return form;
}

function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  const isValid = nameRegex.test(name);
  const errorElement = document.getElementById('name-error');

  if (!isValid) {
    errorElement.innerText = 'Please enter a valid name.';
    errorElement.classList.remove('d-none');
    errorElement.classList.add('d-block');
  } else {
    errorElement.innerText = '';
    errorElement.classList.remove('d-block');
    errorElement.classList.add('d-none');
  }

  return isValid;
}

function validateSurname(surname) {
  const surnameRegex = /^[a-zA-Z\s]+$/;
  const isValid = surnameRegex.test(surname);
  const errorElement = document.getElementById('surname-error');

  if (!isValid) {
    errorElement.innerText = 'Please enter a valid surname.';
    errorElement.classList.remove('d-none');
    errorElement.classList.add('d-block');
  } else {
    errorElement.innerText = '';
    errorElement.classList.remove('d-block');
    errorElement.classList.add('d-none');
  }

  return isValid;
}

function validateMessage(message) {
  const messageRegex = /^[A-Za-z0-9.]{10,201}$/;
  const isValid = messageRegex.test(message);
  const errorElement = document.getElementById('message-error');

  if (!isValid) {
    errorElement.innerText = 'Please enter a message with 10 to 200 characters.';
    errorElement.classList.remove('d-none');
    errorElement.classList.add('d-block');
  } else {
    errorElement.innerText = '';
    errorElement.classList.remove('d-block');
    errorElement.classList.add('d-none');
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValid = emailRegex.test(email);
  const errorElement = document.getElementById('email-error');

  if (!isValid) {
    errorElement.innerText = 'Please enter a valid email.';
    errorElement.classList.remove('d-none');
    errorElement.classList.add('d-block');
  } else {
    errorElement.innerText = '';
    errorElement.classList.remove('d-block');
    errorElement.classList.add('d-none');
  }

  return isValid;
}

// Create error message elements
function createErrorMessage(fieldId) {
  const errorElement = document.createElement('div');
  errorElement.id = `${fieldId}-error`;
  errorElement.classList.add('error-message', 'd-none', 'text-danger');
  return errorElement;
}

// Display/hide error messages
function showError(fieldId, message) {
  const errorElement = document.getElementById(`${fieldId}-error`);
  if (!errorElement) {
    return; 
  }

  if (message) {
    errorElement.innerText = message;
    errorElement.classList.remove('d-none');
    errorElement.classList.add('d-block');
  } else {
    errorElement.innerText = '';
    errorElement.classList.remove('d-block');
    errorElement.classList.add('d-none');
  }
}

// Validate form fields on submit
function validateForm() {
  const nameField = document.getElementById('name');
  const surnameField = document.getElementById('surname');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const dropdownField = document.getElementById('dropdown');
  const radioField = document.getElementsByName('radio');
  let isValid = true;

  
  // Validate name
  isValid = validateName(nameField.value) && isValid;

  // Validate surname
  isValid = validateSurname(surnameField.value) && isValid;

  // Validate message
  isValid = validateMessage(messageField.value) && isValid;

  // Validate email
  isValid = validateEmail(emailField.value) && isValid;

  


  // Validate dropdown 
  if (dropdownField.selectedIndex === 0) {
    showError('dropdown', 'Please select an option from the dropdown.');
    isValid = false;
  } else {
    showError('dropdown', ''); 
  }

  // Validate radio button 
  let radioChecked = false;
  for (let i = 0; i < radioField.length; i++) {
    if (radioField[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    showError('other', 'Please select an option from the radio buttons.');
    isValid = false;
  } else {
    showError('other', ''); 
  }

  // If the form is valid -> submit
  if (isValid) {

    // Empty form elements
    document.getElementById('contact-form').reset();

    var spanElement = document.createElement('span');
    spanElement.textContent = 'Your message is sent successfully!'; 
    spanElement.classList.add('text-success', 'ms-2');
  
    var fieldsetElement = document.querySelector('#contact-form');
  
    fieldsetElement.appendChild(spanElement);
  }

  return isValid;
}


// Read more / Show less
let click_number=0;
let readMoreBtn=$("#read-more-btn");
 $(readMoreBtn).on("click", (event)=>{
 event.preventDefault();
 if(click_number%2==0){
 $("#more-about-events").slideDown();
 $(readMoreBtn).html("Show less");
 }
 else{
 $("#more-about-events").slideUp();
 $(readMoreBtn).html("Read more");
 }
 click_number++;
 });



// JQuery slider plugin
$(document).ready(function(){
  $(".slider").bxSlider({
    auto: true,
    stopAutoOnClick: true,
    randomStart: true,
    responsive: true,
    autoHover: true,
    pause: 2500,
  });
});

document.addEventListener('DOMContentLoaded', function() {

  // Render nav
  createNavLinks();
  createContactButton();

  if (url == "/propulse/" || url.includes("/propulse/index.html")){
  // Contact button on top of the page
  createContactButtonTop();

  // Generate skillBars names and percentage
  fillSkillBars();

  // Generate Images for Slider
  createAndAppendImages(imagesInfo);

  // Generate dynamic form using formStructure
  const dynamicForm = createForm(formStructure);
  document.querySelector('#form-container').appendChild(dynamicForm);

  // Form Validation
  const formElements = ['name', 'surname', 'email', 'dropdown', 'other', 'message'];
  formElements.forEach((elementId) => {
    const field = document.getElementById(elementId);
    if (field) {
      const errorElement = createErrorMessage(elementId);
      field.parentNode.appendChild(errorElement);
    }
  });

  // Event blur for name, surname, message and email
  document.getElementById('name').addEventListener('blur', function () {
    validateName(this.value);
  });

  document.getElementById('surname').addEventListener('blur', function () {
    validateSurname(this.value);
  });

  document.getElementById('message').addEventListener('blur', function () {
    validateMessage(this.value);
  });

  document.getElementById('email').addEventListener('blur', function () {
    validateEmail(this.value);
  });


  // Submit and validate form event 
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    validateForm();
  });

  // Generate each service in services section
  const servicesContainer = document.querySelector('.services .row');
  services.forEach(service => {
    const serviceHTML = generateServiceHTML(service);
    servicesContainer.innerHTML += serviceHTML;
  });

  const links = document.querySelectorAll('.scroll-to-section a[href^="#"]');
  const navLinks = document.querySelectorAll('.nav a');

  links.forEach(link => link.addEventListener('click', scrollToSection));
  window.addEventListener("scroll", throttle(highlightNavLink, 100));
}

  // Smooth scroll clicked section
  function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    const targetOffset = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
  }


  // Highlight link that matches section on screen
  // FUNCTION FROM TEMPLATE
  function highlightNavLink() {
    const scrollPos = window.scrollY|| document.documentElement.scrollTop;
    const refElement = document.querySelector(link.getAttribute("href"));

    navLinks.forEach(link => {
      if (refElement) {
        const offsetTop = refElement.offsetTop;
        const offsetBottom = offsetTop + refElement.offsetHeight;
    
        if (offsetTop <= scrollPos && offsetBottom > scrollPos) {
          document.querySelectorAll('.nav ul li a').forEach(a => a.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }
});


// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('js-preloader');
  preloader.classList.add('loaded');
});

// Mobile nav toggle on click
function mobileNav() {
  const width = window.innerWidth;
  const submenus = document.querySelectorAll('.submenu');
  
  submenus.forEach(submenu => {
    submenu.addEventListener('click', function() {
      if (width < 767) {
        const ul = this.querySelector('ul');
        ul.classList.toggle('active', !ul.classList.contains('active'));
      }
    });
  });
}

// FUNCTION FROM TEMPLATE
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

mobileNav(); 
window.addEventListener('scroll', onScroll);
menuDropdownToggle();
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);
window.addEventListener("scroll", toggleScrollToTopButton);
