   /*------------------
        Preloader
    --------------------*/
const loader = document.getElementsByClassName("loader");
    
window.addEventListener('load', function () {
    setTimeout(() => {
        loader.className += " hidden";
    }, 1000)
});


   let themeCircles = document.getElementsByClassName('circles')

   let theme = localStorage.getItem('theme')

   if (theme == null) {
       setTheme('light')
   } else {
       setTheme(theme)
   }
   // const darkTheme = document.getElementById('dark-theme')

   console.log(themeCircles)

   for (let i = 0; themeCircles.length > i; i++) {
       themeCircles[i].addEventListener('click', function () {
           let mode = this.dataset.attribute
           console.log(`option clicked: ${mode}`)
           setTheme(mode)
       })
   }

   function setTheme(mode) {
       if (mode == 'light') {
           document.getElementById('theme-style').href = `static/css/light.css`
       } else if (mode == 'blue') {
           document.getElementById('theme-style').href = 'static/css/blue.css'
       } else if (mode == "purple") {
           document.getElementById('theme-style').href = 'static/css/purple.css'
       } else if (mode == 'dark') {
           document.getElementById('theme-style').href = 'static/css/styles.css'
       } else {
           document.getElementById('theme-style').href = 'static/css/styles.css'
       }

       localStorage.setItem('theme', mode)
   }