const footerAnimation = (leftElement,rightElement,block) => {
    window.addEventListener('scroll', () => {
        const leftTarget = document.querySelector(leftElement), 
              rightTarget = document.querySelector(rightElement), 
              targetBlock = document.querySelector(block),
              targetPosition = targetBlock.offsetTop; 
    
        let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentPosition >= targetPosition) {
            leftTarget.classList.add('animated', 'fadeInLeft');
            leftTarget.style.opacity = '1';
            rightTarget.classList.add('animated', 'fadeInRight');
            rightTarget.style.opacity = '1';
        } 
    });
};

export default footerAnimation;