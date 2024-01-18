// navbar style
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// toggle FAQ on home screen
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        }
        else {
            icon.className = 'uil uil-plus'
        }
    })
})

// toggle navbar 
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// Array of course objects
const courses = [
    {
        image: './images/course1.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course2.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course3.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course4.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course5.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course6.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course7.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course8.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course9.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course10.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course11.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course12.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course13.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course14.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course15.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course16.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course17.jpg',
        title: 'Responsive Social Media Website UI Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },
    {
        image: './images/course18.jpg',
        title: 'Responsive Smart Home Website Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda eaque molestiae saepe, consectetur qui facere.'
    },

    // Add more courses here...
];

// Function to create course HTML
function createCourseHTML(course) {
    return `
        <article class="course">
            <div class="course__image">
                <img src="${course.image}">  
            </div>
            <div class="course__info">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <a href="courses.html" class="btn btn-primary">Learn More</a>
            </div>
        </article>
    `;
}

// Function to render all courses
function renderCourses() {
    const coursesContainer = document.querySelector('.courses__container');
    coursesContainer.innerHTML = courses.map(createCourseHTML).join('');
}

// Call renderCourses on page load or when appropriate
document.addEventListener('DOMContentLoaded', renderCourses);
