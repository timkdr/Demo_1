let emoji = ["💫" ,"🎨" ,"💻" ,"📸" ,"🌐"];
let len = emoji.length;
let toggle = document.querySelector(".fas");
    toggle.addEventListener("click", ()=>{
        toggle.innerHTML = emoji[Math.floor(Math.random*len)];
    });
