const tabtitle = document.querySelector('.tab-title')
const tablinks = document.getElementsByClassName("tab-link")
const tabcontents  = document.getElementsByClassName("tab-content")
const navlinks = document.getElementsByClassName("navlinks")
const nav = document.querySelector(".nav")

tabtitle.addEventListener('click',function(e){
    for(tablink of tablinks){
        tablink.classList.remove("active")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-link")
    }
    e.target.classList += " active"
    if(e.target.classList.contains("skill")){
        document.getElementById("skill").classList.add("active-link")
    }
    else if(e.target.classList.contains("exp")){
        document.getElementById("exp").classList.add("active-link")
    }
    else if(e.target.classList.contains("edu")){
        document.getElementById("edu").classList.add("active-link")
    }
})

const hidden = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})



hidden.forEach(el =>{
    observer.observe(el)
})

nav.addEventListener("click", function(e){
    for(navlink of navlinks){
        navlink.classList.remove("active")
    }
    e.target.classList.add("active")
})

const mobilenavtoggler = document.querySelector(".mobilenavtoggler")
const closemobilenav = document.querySelector(".closemobilenav")
mobilenavtoggler.addEventListener('click', function(){
    nav.classList.add("active")
} )
closemobilenav.addEventListener('click', function(){
    nav.classList.remove("active")
} )
