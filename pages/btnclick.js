
if (typeof window === 'object') {
    // Check if document is finally loaded
       document.addEventListener("DOMContentLoaded", function () {
           //alert('Finished loading')
           const burger = document.querySelector('#burger');
            const menu = document.querySelector('#menu');

            burger.addEventListener('click', () => {
            if(menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden')
            }

            })
         });
      }
        

