async function getApi(){
    const apiResponse = await fetch(`https://api.github.com/users/Vitor-Fers`)
    return await apiResponse.json()
}


async function getRepo(){
    const reposApi = await fetch(`https://api.github.com/users/offmak/repos`)
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
    var projects = document.getElementById("projetos")
    const repos = await getRepo()
    console.log(repos)

    // let objetoRepos = Object.keys(repos).length
    // console.log(objetoRepos)

     repos.forEach((dado,index) => {
        
        let lang = (repos[index].language)
        let descript = (repos[index].description)

        if(lang === null) lang = "linguagem Indisponível"
        if(descript === null) descript = "Descrição Indisponível"

        if(index < 4){
    
            projects.innerHTML += `<div class="cards_projects project">
            <span id="project" class="name_project">${repos[index].name}</span>
            <span class="public">${repos[index].visibility}</span>
            <span id="description" class="description">${descript}</span>
            <span id="lang" class="language">${lang}</span>
        </div>`
        }
        }
    );
}

projectsInfos()