<html>
<head>
	<title>Netflix</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">TV Shows</a></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">My List</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<section class="hero">
			<h1>Welcome to Netflix</h1>
			<p>Stream unlimited movies and TV shows</p>
			<button id="sign-up-button">Sign Up</button>
		</section>
		<section class="tv-shows">
			<h2>TV Shows</h2>
			<ul id="tv-shows-list">
				<!-- TV shows ki list ayegi yahaan -->
			</ul>
		</section>
		<section class="movies">
			<h2>Movies</h2>
			<ul id="movies-list">
				<!-- Movies ki list ayegi yahaan -->
			</ul>
		</section>
	</main>
	<footer>
		<p>&copy; 2024 Netflix</p>
	</footer>
	<script src="script.js"></script>
</body>
</html>


JavaScript (script.js):

// Sign Up button ka event listener
document.getElementById('sign-up-button').addEventListener('click', function() {
	alert('Sign Up button clicked!');
});

// TV shows ki list ko populate karna
const tvShowsList = document.getElementById('tv-shows-list');
const tvShows = [
	{ title: 'TV Show 1', description: 'This is TV Show 1' },
	{ title: 'TV Show 2', description: 'This is TV Show 2' },
	{ title: 'TV Show 3', description: 'This is TV Show 3' },
];

tvShows.forEach((tvShow) => {
	const listItem = document.createElement('li');
	listItem.innerHTML = `
		<img src="tv-show-${tvShow.title}.jpg" alt="${tvShow.title}">
		<h3>${tvShow.title}</h3>
		<p>${tvShow.description}</p>
	`;
	tvShowsList.appendChild(listItem);
});

// Movies ki list ko populate karna
const moviesList = document.getElementById('movies-list');
const movies = [
	{ title: 'Movie 1', description: 'This is Movie 1' },
	{ title: 'Movie 2', description: 'This is Movie 2' },
	{ title: 'Movie 3', description: 'This is Movie 3' },
];

movies.forEach((movie) => {
	const listItem = document.createElement('li');
	listItem.innerHTML = `
		<img src="movie-${movie.title}.jpg" alt="${movie.title}">
		<h3>${movie.title}</h3>
		<p>${movie.description}</p>