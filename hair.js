(function(){
emailjs.init("qpwqpkEUt59Guo4TF"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
emailjs.sendForm("service_ocvad8s", "template_7fah3m8", this)
       .then(function() 
{
document.getElementById("success-message").style.display = "block";
}, 
function(error){alert("Failed to send. Error: " + JSON.stringify(error));});
});




document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
dropdownLink.addEventListener('click', function(e) {e.preventDefault();
let dropdown = this.parentElement.querySelector('.dropdown-content');
document.querySelectorAll('.dropdown-content').forEach(menu => {
if (menu !== dropdown){menu.style.display = "none";}
});
dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
});
});
document.addEventListener('click', function(e) {
if (!e.target.closest('.dropdown')) 
{document.querySelectorAll('.dropdown-content').forEach(menu => {menu.style.display = "none"; });}
});
});




const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();
if(mm < 10) mm = '0' + mm;
if(dd < 10) dd = '0' + dd;
const formattedDate = yyyy + '-' + mm + '-' + dd;
document.getElementById('date').value = formattedDate;




document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector('.header');
const bookingSection = document.getElementById('booking');
window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY + header.offsetHeight;
const bookingTop = bookingSection.offsetTop;
const bookingBottom = bookingTop + bookingSection.offsetHeight;
if (scrollPosition >= bookingTop && scrollPosition <= bookingBottom)
{header.classList.add('scrolled');} 
else {header.classList.remove('scrolled');}
});
});