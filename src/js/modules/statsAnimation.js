const statsAnimation = (element, block) => {
    window.addEventListener('scroll', () => {
        const elementToAddClass = document.querySelector(element), 
          targetBlock = document.querySelector(block),
          targetPosition = targetBlock.offsetTop + 400; 
    
        let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        
        if (currentPosition >= targetPosition) {
            elementToAddClass.classList.add('animated', 'fadeInUp');
            elementToAddClass.style.opacity = '1';
        } 
    });
};

export default statsAnimation;