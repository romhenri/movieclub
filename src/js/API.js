const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')

// Get Initial Movies Database
getMovies(API_URL)
async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
}

//
function showMovies(movies) {
	console.log(main)
	main.innerHTML = ``

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie

		const movieEl = document.createElement('div')
		movieEl.innerHTML = title
		movieEl.classList.add('movie')

		console.log(movieEl)

		main.appendChild(movieEl)
		alert('Concluído')
	})
}
