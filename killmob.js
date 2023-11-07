
  if (window.innerWidth <= 800) {
    document.addEventListener("DOMContentLoaded", function() {
      var targetElementId = localStorage.getItem("targetElementId");
      if (targetElementId) {
        var targetElement = document.getElementById(targetElementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          localStorage.removeItem("targetElementId");
        }
      }

      var internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          var targetId = this.getAttribute("href").substring(1);
          localStorage.setItem("targetElementId", targetId);
          window.location.href = this.href;
        });
      });
    });
  }

