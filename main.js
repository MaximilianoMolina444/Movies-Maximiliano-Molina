let contenedor= document.getElementById('peliculasContainer')


function cuerpoCard(image, title, tagline, overview) {
    return `
    <div class="flex flex-col items-center justify-beetwen w-80 h-auto shadow-2xl border-solid border-2 border-white rounded-2xl text-center bg-violet-200 text-black sm: w-4/6 h-5/6">
    <img class="h-40 w-80 object-cover rounded-t-2xl sm: w-60 h-28" src="${image}" alt="imagen-fruta">
    <h4 class="font-bold">${title}</h4>
    <p class="p-3 text-xs md:text-base font-bolder sm: p-1">${tagline}</p>
    <p class="pb-3 text-xs md:text-base font-bolder sm: p-1">${overview}</p>
    </div>`
}

function imprimirCard(listaMovies) {
   let cards = ""
   for (const movie of listaMovies) {
    cards += cuerpoCard(movie.image, movie.title, movie.tagline, movie.overview)
   }
   return cards
}

contenedor.innerHTML=imprimirCard(movies)