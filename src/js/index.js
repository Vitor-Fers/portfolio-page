async function getApi(){
    const apiResponse = await fetch(`https://api.github.com/users/Vitor-Fers`)
    return await apiResponse.json()
}

async function perfil(){
    let perfilName = document.getElementById("namePerfil")
    let perfilImage = document.getElementById("perfil-img")
    const api = await getApi()

    perfilImage.src = api.avatar_url
    perfilName.innerText = api.name
    console.log(api.name)
}
perfil()
