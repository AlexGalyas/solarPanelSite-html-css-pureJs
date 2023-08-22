const accordion = (triggers) => {
    const btns = document.querySelectorAll(triggers);

    let activeBlock = null;

    function closeAllBlocks() {
        btns.forEach(heading => {
            const contentBlock = heading.nextElementSibling;
            contentBlock.classList.add('animated');
            if (contentBlock.style.display === 'block') {
                contentBlock.style.display = 'none';
                contentBlock.classList.remove('fadeIn');
            }   
        });
    }

    if (btns.length > 0) {
        const firstBlock = btns[0].nextElementSibling;
        firstBlock.style.display = 'block';
        activeBlock = firstBlock;
    }


    btns.forEach(heading => {
        heading.addEventListener('click', () => {
            const contentBlock = heading.nextElementSibling;
            contentBlock.classList.add('animated');
            if (contentBlock && contentBlock !== activeBlock) {
                closeAllBlocks(); 
                contentBlock.style.display = 'block';
                contentBlock.classList.add('fadeIn');
                activeBlock = contentBlock;
            } else {
                contentBlock.style.display = 'none';
                contentBlock.classList.remove('fadeIn');

                activeBlock = null;
            }
        });
    });
    
};

export default accordion;