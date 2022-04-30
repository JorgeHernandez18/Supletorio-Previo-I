const fecha = document.getElementById('fecha')
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
fecha.innerHTML = day + " de " + month + " de " + year;

const aplicacion = document.querySelector('.principal')

const url = "https://carlosreneas.github.io/endpoints/noticia_6.json"

fetch(url)
    .then(res => res.json())
    .then(data => {
        const h = document.createElement("h2")
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.src = data.img;
        img.setAttribute("style", "width:100%; height:100%;")
        div.setAttribute("style", "width: 80%; height: 60vh; border: 1px solid #000;")
        h.setAttribute("style", "color: blue; font-weight: bold")
        h.innerHTML = data.titulo + "-" + data.categoria + "-" + data.fecha
        aplicacion.appendChild(h);
        div.appendChild(img);
        aplicacion.appendChild(div);

        const p = document.createElement('p')
        p.setAttribute("style", "border: 1px dotted #000")
        p.innerHTML = data.descripcion + ".  " + data.detalle
        aplicacion.appendChild(p)
    })
    .catch(err => console.log(err))



const url_deportes = "https://carlosreneas.github.io/endpoints/categoria_deporte.json"

const aside = document.querySelector('.sport')

fetch(url_deportes)
    .then(res => res.json())
    .then(data => {
        data.forEach((sport, i) => {
            if (i <= 2) {
                const p = document.createElement('p')
                const line = document.createElement('hr')
                line.setAttribute("style", "background-color: blue; height: 0.1vh")
                p.innerHTML = sport.titulo
                aside.appendChild(p)
                aside.appendChild(line)
            }
        })
    })

const url_tec = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json"

const tecno = document.querySelector('.tec')

fetch(url_tec)
    .then(res => res.json())
    .then(data => {
        data.forEach((tec, i) => {
            if (i <= 2) {
                const p = document.createElement('p')
                const line = document.createElement('hr')
                p.innerHTML = tec.titulo
                line.setAttribute("style", "background-color: blue; height: 0.1vh;")
                tecno.appendChild(p)
                tecno.appendChild(line)
            }
        })
    })