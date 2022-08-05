var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") e.preventDefault();
  });
} 
