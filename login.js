
const register_link = document.querySelector('.register-link'),
        loign_link = document.querySelector(".loign-link"),
        large_box = document.querySelector(".large_box")

register_link.addEventListener("click",()=>{
    large_box.classList.add("active")
})

loign_link.addEventListener("click",()=>{
    large_box.classList.remove("active")
})