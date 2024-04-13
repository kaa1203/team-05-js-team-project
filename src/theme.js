const checkbox = document.getElementById('switch');

    checkbox.addEventListener('change', onChangeThemeClick);

    function onChangeThemeClick() {
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
        if (theme === 'dark') {
            changeThemeToLight();
        } else {
            changeThemeToDark();
        }
    }

    function setDefaultTheme() {
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage

        if (!theme) {
            localStorage.setItem('data-theme', 'light');
            theme = 'light';
        }
        else
        {
            if (theme === 'dark') {
                checkbox.checked = true;
                changeThemeToDark();
            } else {
                changeThemeToLight();
            }
        }
    }
    const changeThemeToDark = () => {
        document.body.setAttribute('data-theme', 'dark'); // set theme to dark
        document.querySelector('.footer').setAttribute('data-theme', 'dark');
        document
            .querySelectorAll('.footertext')
            .forEach(el => el.setAttribute('data-theme', 'dark'));
    }
    document.querySelector('.modal-content-footer').setAttribute('data-theme', 'dark');
    document.querySelectorAll('.modal-container').forEach(el => el.setAttribute('data-theme', 'dark'));
    document.querySelectorAll('.modal-header').forEach(el => el.setAttribute('data-theme', 'dark'));

    

    const changeThemeToLight = () => {
        document.body.setAttribute('data-theme', 'light'); // set theme light
        document.querySelector('.footer').setAttribute('data-theme', 'light');
        document
            .querySelectorAll('.footertext')
            .forEach(el => el.setAttribute('data-theme', 'light'));
    }
    document.querySelector('.modal-content-footer').setAttribute('data-theme', 'light');
    

    document.addEventListener('DOMContentLoaded', function() {

        const savedTheme = localStorage.getItem('data-theme');
    
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {

            const defaultTheme = 'light';
            applyTheme(defaultTheme);
        }
    
        const themeToggle = document.getElementById('switch');
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        });
    });
    
    function applyTheme(theme) {

        document.body.setAttribute('data-theme', theme);

        localStorage.setItem('data-theme', theme);
    
    const modalContentFooter = document.querySelector('.modal-content-footer');
    if (modalContentFooter) {
        modalContentFooter.setAttribute('data-theme', theme);
    }
}


function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);

    // Apply theme to modal container
    const modalContainers = document.querySelectorAll('.modal-container');
    modalContainers.forEach(container => {
        container.setAttribute('data-theme', theme);
    });

    // Apply theme to modal header
    const modalHeaders = document.querySelectorAll('.modal-header');
    modalHeaders.forEach(header => {
        header.setAttribute('data-theme', theme);
    });
}

