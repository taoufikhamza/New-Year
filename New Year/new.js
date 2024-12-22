// Générer des ballons
const balloonContainer = document.querySelector('.balloons');
for (let i = 0; i < 50; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDelay = `${Math.random() * 5}s`;
    balloon.style.animationDuration = `${8 + Math.random() * 5}s`;
    balloonContainer.appendChild(balloon);
}

// Générer des étoiles
const starContainer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starContainer.appendChild(star);
}
