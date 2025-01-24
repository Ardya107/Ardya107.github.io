// ============================Toggle Icon Navbar===============================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// ===========================Scroll Section Active=============================

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
    // =====================sticky Navbar============================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // ============================remove toggle icon and navbar when click navbar link (scroll)===============================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ======================= Scroll Reveal =================================================================
ScrollReveal({
    // reset: true,
    distance:'10px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portofolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-thumbnails', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content, .portfolio-container', { origin:'right' });


// ========================Typed Js==============================================================================================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Web Developer', 'Illustrator', 'Graphic Designer', 'Animator'],
    typeSpeed: 100,
    backDelay: 500,
    loop: true,
});
// ======================= Scroll Reveal =================================================================
// Pemanggilan Element HTML 
const pName = document.querySelectorAll(".pName");
const pAge = document.querySelectorAll(".pAge");
const pBirthday = document.querySelectorAll(".pBirthday");

// Data Ardya Dwicahya
const myName = "Ardya Dwicahya";
const myBirthday = "10-Januari-2007";
let myAge;

// Fungsi untuk menghitung umur
function calculateAge(birthday) {
  const [day, month, year] = birthday.split("-");
  const birthDate = new Date(`${month} ${day}, ${year}`);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    age--;
  }

  return age;
}

// Hitung umur dinamis
myAge = calculateAge(myBirthday);

// Fungsi untuk memperbarui konten elemen dengan class tertentu
function updateContent() {
  pName.forEach((element) => {
    element.textContent = myName;
  });
  pAge.forEach((element) => {
    element.textContent = myAge;
  });
  pBirthday.forEach((element) => {
    element.textContent = myBirthday;
  });
}

// Menambahkan event Listener global untuk elemen baru
document.body.addEventListener("DOMNodeInserted", (event) => {
  if (event.target.classList?.contains("pName")) {
    event.target.textContent = myName;
  }
  if (event.target.classList?.contains("pAge")) {
    event.target.textContent = myAge;
  }
  if (event.target.classList?.contains("pBirthday")) {
    event.target.textContent = myBirthday;
  }
});

// Atur konten awal saat halaman dimuat
updateContent();
