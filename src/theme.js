localStorage.setItem('data-theme', 'light'); 

const checkbox = document.getElementById('switch');
checkbox.addEventListener('change', onChangeThemeClick);

    function onChangeThemeClick() {
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
        console.log(theme);

        if (theme === 'dark') {
            console.log('onChangeThemeClick-dark-selected');
            changeThemeToLight();
        } else {
            console.log('onChangeThemeClick-light-selected');
            changeThemeToDark();
            
        }
    }
    function setDefaultTheme() {
        let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage

        if (!theme) {
            localStorage.setItem('data-theme', 'light');
            theme = 'light';
        }
        if (theme === 'dark') {
            console.log('setDefaultTheme-dark-selected');
            checkbox.checked = true;
            changeThemeToDark();
        } else {
            console.log('setDefaultTheme-light-selected');
            changeThemeToLight();
        }
        
    }

    const changeThemeToDark = () => {
        console.log('changeThemeToDark');
        document.body.setAttribute('data-theme', 'dark'); // set theme to dark
        document.querySelectorAll('.section').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('.movie-list').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('.movie-title').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('.pagination-arrow').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('#pagination-links a').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('.pagination-links a').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelectorAll('.pagination-container').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelector('.footer').setAttribute('data-theme', 'dark');
        document.querySelectorAll('.footertext').forEach(el => el.setAttribute('data-theme', 'dark'));
        document.querySelector('.modal-content-footer').setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark'); 
    }

    const changeThemeToLight = () => {
        console.log('changeThemeToLight');
        document.body.setAttribute('data-theme', 'light'); // set theme light
        document.querySelectorAll('.section').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.movie-list').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.movie-title').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.modal-header').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.pagination-arrow').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.pagination-links').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.pagination-container').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('#pagination-links a').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelectorAll('.pagination-links a').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelector('.footer').setAttribute('data-theme', 'light');
        document.querySelectorAll('.footertext').forEach(el => el.setAttribute('data-theme', 'light'));
        document.querySelector('.modal-content-footer').setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light'); 
    }
    
export { setDefaultTheme };