const aplicacion = document.querySelector('.principal')

const url = "https://carlosreneas.github.io/endpoints/noticias.json"

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach((usuario, i) => {
            if (i != 3) {
                const h = document.createElement('h2')
                const p = document.createElement('p')
                const a = document.createElement('a')
                a.setAttribute('href', )
                h.innerHTML = usuario.titulo + "-" + usuario.categoria + "-" + usuario.fecha
                p.innerHTML = usuario.descripcion + a
                aplicacion.appendChild(h)
                aplicacion.appendChild(p)
            }
        });
    })
    .catch(err => console.log(err))



const url_deportes = "https://carlosreneas.github.io/endpoints/categoria_deporte.json"

const aside = document.querySelector('.lateral')

fetch(url_deportes)
    .then(res => res.json())
    .then(data => {
        data.forEach((sport, i) => {
            if (i != 3) {
                const p = document.createElement('p')
                p.innerHTML = sport.titulo
                aside.appendChild(p)
            }
        })
    })
