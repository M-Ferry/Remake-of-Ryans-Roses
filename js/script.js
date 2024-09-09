var footer = document.querySelector("footer");
/*console.log(footer.outerHTML);*/

footer.style.backgroundColor = "#d7ddf3";

var tagline = document.querySelector("h2");
tagline.style.textTransform = "capitalize";

// Change line height & font size of the address element
var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
// console.log(address.innerHTML);

// Emphaize the words "every day" in the contact section header
var everyDay = document.querySelector("h3");
everyDay.innerHTML = "We're here for you <em>every day</em> of the week.";
everyDay.style.textAlign = "center";
// console.log(everyDay.innerHTML);

var body = document.querySelector("body");
body.style.backgroundColor = "lightblue";

// console.log(main.innerHTML);

///change icon color///
var instagram = document.querySelector(".fa-instagram");
instagram.style.color = "#d45bb9";

var facebook = document.querySelector(".fa-facebook");
facebook.style.color = "#6a99b5";

var twitter = document.querySelector(".fa-twitter");
twitter.style.color = "#5ab867";

var mobile = document.querySelector(".fa-mobile-alt");
mobile.style.color = "#d48f04";

////***opening hours add border to hours*** */////

var openingHours = document.querySelector(".contact p");
openingHours.style.border = "4px solid #d45bb9";
openingHours.style.padding = "1em";
