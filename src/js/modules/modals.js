const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector,closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) =>{
                if(e.target){
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;

                document.querySelector('.header').style.display ='none';
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            document.querySelector('.header').style.display ='block';


        });

        modal.addEventListener('click',(e) =>{
            if(e.target === modal && closeClickOverlay){
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
                document.querySelector('.header').style.display ='block';

            }
        });
    }

    function showModalByTime(selector,time){
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }
            
    function calcScroll(){
        let div = document.createElement('div')

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    }

    bindModal('.solutions__item-button','.popup','.popup .popup_close');



    // showModalByTime('.popup', 60000)

};

export default modals;