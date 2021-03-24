$(function() {
    $(document).on('click', '.sun', function(e) {
        $('.sun').hide();
        $('.moon').show();
    })

    $(document).on('click', '.moon', function(e) {
        $('.sun').show();
        $('.moon').hide();
    })

    let themeSwitch = document.querySelector('#toggleTheme');
    themeSwitch.addEventListener('change', (e) => {
        themeSwitch.checked ? setLightTheme() : setDarkTheme();
    });
    
    const setDarkTheme = function() {
        let headerIMG = document.querySelector('header');
        headerIMG.style.background = 'url(/images/bg-desktop-dark.jpg) no-repeat center';
        headerIMG.style.backgroundSize = '100%';

        let main = document.querySelector('main');
        main.style.backgroundColor = 'hsl(235, 21%, 11%)';

        let todoInput = document.querySelector('.todo-list__input');
        todoInput.style.backgroundColor = 'hsl(235, 21%, 11%)'; 

        let todoListContainer = document.querySelector('.todo-list__container');
        todoListContainer.style.backgroundColor = 'hsl(235, 21%, 11%)';
        todoListContainer.style.borderBottom = '1px solid hsl(234, 39%, 85%)';

        let todolistFooter = document.querySelector('.todo-list__footer');
        todolistFooter.style.backgroundColor = 'hsl(235, 21%, 11%)';
    };
    
    const setLightTheme = function() {
        let headerIMG = document.querySelector('header');
        headerIMG.style.background = 'url(/images/bg-desktop-light.jpg) no-repeat center';
        headerIMG.style.backgroundSize = '100%';

        let main = document.querySelector('main');
        main.style.backgroundColor = 'hsl(236, 33%, 92%)';
        
        let todoInput = document.querySelector('.todo-list__input');
        todoInput.style.backgroundColor = 'hsl(236, 33%, 92%)'; 

        let todoListContainer = document.querySelector('.todo-list__container');
        todoListContainer.style.backgroundColor = 'hsl(236, 33%, 92%)';
        todoListContainer.style.borderBottom = '1px solid hsl(236, 9%, 61%)';

        let todolistFooter = document.querySelector('.todo-list__footer');
        todolistFooter.style.backgroundColor = 'hsl(236, 33%, 92%)';
    };
});


