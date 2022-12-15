const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    // Menu show 
    
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    // menu hidden
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })

    }

    // remove menu mobile
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = ()=>{
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n=> n.addEventListener('click',linkAction))

    // change background header
    const scrollHeader = ()=>{
        const hedaer = document.getElementById('header')
        this.scrollY >= 50 ? hedaer.classList.add('bg-header')
                           :hedaer.classList.remove('bg-header')

    }
    window.addEventListener('scroll',scrollHeader)