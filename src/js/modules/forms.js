import { postData } from "../services/post";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Loading...',
        success: 'Thank You!',
        failure: 'Something went wrong :(',

    };

    const path = {
        designer: 'assets/server.php',
    };

    
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

    

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);



            postData(formData)
                .then(res => {
                    console.log(res);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    },5000);
                });
        });
    });
};  

export default forms;