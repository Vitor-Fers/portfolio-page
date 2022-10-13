async function getApi(){
    const apiResponse = await fetch(`https://api.github.com/users/Vitor-Fers`)
    return await apiResponse.json()
}


async function getRepo(){
    const reposApi = await fetch(`https://api.github.com/users/Vitor-Fers/repos`)
    return reposApi.json()
}
    

async function perfil(){
    let perfilName = document.getElementById("namePerfil")
    let perfilImage = document.getElementById("perfil-img")
    const api = await getApi()

    perfilImage.src = api.avatar_url
    perfilName.innerText = api.name
}
perfil()

async function projectsRender(){
    const repo = await getRepo()

    console.log(repo)
}
projectsRender()


