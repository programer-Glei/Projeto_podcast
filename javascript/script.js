

function carregar(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET', 'http://localhost/Projeto_podcast/Json/server.json')

    xmlhttp.onreadystatechange = () =>{
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let episodios = xmlhttp.responseText

            let jsonEpisodios = JSON.parse(episodios)

            console.log(jsonEpisodios)

            for(let i in jsonEpisodios.episodes){
                let item = jsonEpisodios.episodes[i]
                console.log(item)
            }
        }
    }

    xmlhttp.send()
}

carregar()

