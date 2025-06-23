// lage en funksjon som sjekker om siden er scollet og tilpasse logo størrelse

function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;
   

    // legge til /fjerne scrolled funktion basert på posisjon. 
    if (scrollPosition>20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');      
    }
    // kalkulere ny font-size basert på posisjon
    let newSize = 3 - (scrollPosition * 0.03); // minker med 0.03 rem for hver piksel som er rullet ned.

    // clamping font-size mellom 1.5 rem og 3 rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);
    logo.style.fontSize = newSize + 'rem';
}

//eventlistner for sjekke om blir scrollet
window.addEventListener('scroll', checkScroll);
