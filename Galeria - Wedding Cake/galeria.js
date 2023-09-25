var prevControl = document.querySelector('.carousel-control-prev');
var nextControl = document.querySelector('.carousel-control-next');

// Adiciona um ouvinte de evento para navegar pelos slides
prevControl.addEventListener('click', function() {
    document.getElementById('meuSlide').carousel('prev');
});

nextControl.addEventListener('click', function() {
    document.getElementById('meuSlide').carousel('next');
});