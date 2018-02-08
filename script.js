document.addEventListener("DOMContentLoaded", function() {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const pagetitleHeight = document.querySelector('nav').clientHeight;
    const greetingHeight = viewportHeight - pagetitleHeight;
    const greetingDiv = document.querySelector('.hero');
    greetingDiv.style.height = greetingHeight + 'px';
    const jobDiv = document.querySelector('.job');
    jobDiv.style.height = (greetingHeight / 2) + 'px';
    const contactDiv = document.querySelector('.contact');
    contactDiv.style.height = (greetingHeight / 2) + 'px';
});