const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const channelSwitchSound = new Audio('assets/channel-switch.mp3');

const slideWidth = slides[0].getBoundingClientRect().width;

const tvWidth = document.querySelector('.tv').width;


// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index * 4}px`;
};

slides.forEach(setSlidePosition);


// FUNCTIONS
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    function channelSwitchImg(index) {
        if (index === 0) {
            document.querySelector('.channel-switch').src="assets/channel-switch1.png";
        } else if (index === 1) {
            document.querySelector('.channel-switch').src="assets/channel-switch2.png";
        } else if (index === 2) {
            document.querySelector('.channel-switch').src="assets/channel-switch3.png";
        } else if (index === 3) {
            document.querySelector('.channel-switch').src="assets/channel-switch4.png";
        } else if (index === 4) {
            document.querySelector('.channel-switch').src="assets/channel-switch5.png";
        } else {
            document.querySelector('.channel-switch').src="assets/channel-switch6.png";
        }
    }    


// When I click left, moves slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
    channelSwitchImg(prevIndex);
    channelSwitchSound.play();
})

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    channelSwitchImg(nextIndex);
    channelSwitchSound.play();
    

})

// When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // Find what indicator is clicked on
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    channelSwitchImg(targetIndex);
    channelSwitchSound.play();

})