(function(){
    const play = document.querySelectorAll('.audio__btn')
    const sound = document.querySelectorAll('.audio__sound')
    const volume = document.querySelectorAll('.audio__volume')
    const timeCheck = (e) =>{
        const sound = e.target
        if(sound.currentTime>58){
            sound.currentTime=1
        }
    }

    const playToggle = (e) =>{
        const sound = e.target.nextElementSibling
        let flag =e.target.dataset.play
        e.target.classList.toggle("audio__btn--play")
        if(flag==="false"){
            sound.play()
            e.target.dataset.play= "true"
        }else{
            sound.pause()
            e.target.dataset.play= "false"
        }
    }
    
const changeVolume = (e) =>{
    let current = e.target
    current.previousElementSibling.volume=current.value/100
}

    play.forEach(button=>{
        button.addEventListener('click',playToggle)
    })
    sound.forEach(noise=>{
        noise.addEventListener('timeupdate',timeCheck)
        noise.volume=0.5
    })
    volume.forEach(range=>{
        range.addEventListener("change",changeVolume)
    })
})()