document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#add-step-animation');
    elements.forEach(function(element) {
      Splitting({ target: element, by: 'chars' });
    });
  });

