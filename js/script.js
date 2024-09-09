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
