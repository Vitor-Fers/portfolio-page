async function getApi() {
    const apiResponse = await fetch(`https://api.github.com/users/Vitor-Fers`)
    return await apiResponse.json()
}

async function getRepo() {
    const reposApi = await fetch(`https://api.github.com/users/vitor-fers/repos`)
    return await reposApi.json()
}

async function perfil() {
    let perfilName = document.getElementById("namePerfil")
    let perfilImage = document.getElementById("perfil-img")

    perfilName.innerText = 'Carregando...'

    const api = await getApi()

    if (api) {
        perfilImage.src = api.avatar_url
        perfilName.innerText = api.name
    }
}

async function projectsInfos() {
    let projects = document.getElementById("projetos")

    projects.innerHTML = 'Carregando...'

    const repos = await getRepo()


    if (repos) {
        projects.innerHTML = null
    }

    let index = 0
    for(let repo of repos) {

        let lang = repo.language
        let descript = repo.description

        if (!lang) lang = "linguagem Indisponível"
        if (!descript) descript = "Descrição Indisponível"

        if (index < 4) {

            projects.innerHTML += `<div class="cards_projects project">
            <span id="project" class="name_project"><a href="${repo.html_url}">${repo.name}</a></span>
            <span class="public">${repo.visibility}</span>
            <span id="description" class="description">${descript}</span>
            <span id="lang" class="language">${lang}</span>
        </div>`

        index++
        }
    }
}

perfil()
projectsInfos()