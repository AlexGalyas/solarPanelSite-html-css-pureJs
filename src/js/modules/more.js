const more = (trigger, content) =>{
    const btn = document.querySelector(trigger),
          moreContent = document.querySelector(content);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        moreContent.style.display = 'block';
        moreContent.classList.add('animated', 'fadeIn');

    });
};

export default more;