async function getApi(){
    const apiResponse = await fetch(`https://api.github.com/users/Vitor-Fers`)
    return await apiResponse.json()
}


async function getRepo(){
    const reposApi = await fetch(`https://api.github.com/users/Vitor-Fers/repos`)
    return await reposApi.json()
}
    

async function perfil(){
    let perfilName = document.getElementById("namePerfil")
    let perfilImage = document.getElementById("perfil-img")
    const api = await getApi()

    perfilImage.src = api.avatar_url
    perfilName.innerText = api.name
}
perfil()

async function projectsInfos(){
    var projectName = document.getElementById("project1")
    var descriptionProject = document.getElementById("description")
    var language = document.getElementById("lang")

    const repos = await getRepo()
    console.log(repos)
    console.log()

    for(let dados of repos){
        var arrayObject= dados
    }
    
    projectName.innerText = arrayObject.name
    descriptionProject.innerText = arrayObject.description
    language.innerText = arrayObject.language

}

projectsInfos()