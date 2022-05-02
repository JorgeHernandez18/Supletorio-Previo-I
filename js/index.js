const fecha = document.getElementById('fecha')
date = new Date();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
fecha.innerHTML = day + " de " + month +" de " + year; 

const aplicacion = document.querySelector('.principal')

const url = "https://carlosreneas.github.io/endpoints/noticias.json"

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach((usuario, i) => {
            if (i === 0) {
                const img = document.createElement('img')
                const espacio_img = document.querySelector('.imagen')
                img.src = usuario.img
                img.setAttribute("style", "width:100%; height:100%;")
                espacio_img.appendChild(img)
            }

            if (i != 3) {
                const h = document.createElement('h2')
                const p = document.createElement('p')
                const a = document.createElement('a')
                a.href = 'html/noticia1.html'
                if(i === 2){
                    a.href = 'html/noticia6.html'
                }else{
                    a.href = "#"
                }
                
                
                a.innerText = 'Ver más'
                a.setAttribute("style", "color: #000;")
                p.setAttribute("style", "border: 1px dotted #000")
                h.setAttribute("style", "color: blue; font-weight: bold")
                h.innerHTML = usuario.titulo + "-" + usuario.categoria + "-" + usuario.fecha
                p.innerHTML = usuario.descripcion + ".  "
                aplicacion.appendChild(h)
                p.appendChild(a)
                aplicacion.appendChild(p)

            }
        });
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
