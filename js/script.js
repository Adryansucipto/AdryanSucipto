document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('#about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // optional: animate only once
        }
      });
    }, {
      threshold: 0.3 // triggers when 30% of the element is visible
    });

    observer.observe(aboutSection);
});