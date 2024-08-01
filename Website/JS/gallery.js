// script.js
document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.getElementById('scrollContainer');
    const imageWrapper = document.querySelector('.image-wrapper');
    
    scrollContainer.addEventListener('mouseover', function() {
      imageWrapper.style.animationPlayState = 'paused';
    });
  
    scrollContainer.addEventListener('mouseout', function() {
      imageWrapper.style.animationPlayState = 'running';
    });
  });
  