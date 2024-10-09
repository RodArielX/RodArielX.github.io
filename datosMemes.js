const obtenerMemes = async ()=>{
    
    const memeContainers = document.getElementById('list-memes')
    const memeTemplate = document.getElementById('meme')

    const request = await fetch('https://api.imgflip.com/get_memes')
    
    const respuesta = await request.json()

    respuesta.data.memes.slice(0,8).forEach(meme => {
        const newMemecard = memeTemplate.cloneNode(true)
        const img = newMemecard.querySelector('img')
        img.src=meme.url
        memeContainers.appendChild(newMemecard)
    });
    memeTemplate.remove()
}

obtenerMemes()