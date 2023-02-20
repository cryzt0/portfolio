console.log('Its working')


/*con este obtenemos el tema guardado en el localStorage del navegador */
let theme = localStorage.getItem('theme')

if(theme== null){
    setTheme('light')
}else{
    setTheme(theme)
}

/*para hacer funcionar los temas */
 let themeDots = document.getElementsByClassName('theme-dot')
/*sacamos el color del dot al presionarlo */
 for (var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
                let mode = this.dataset.mode
                console.log('Option clicked:', mode)
                setTheme(mode)
        })
 }

/*con el color cambiamos al tema gracias a conectarnos al index con el theme-style*/
 function setTheme(mode){
     if(mode == 'light'){
         document.getElementById('theme-style').href = 'default.css'
     }

     if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    /*para aguardar el tema en el almacenamiento del navegador */
    localStorage.setItem('theme', mode)
 }

 /*'theme'=mode */