// Contoh data anime
const animeData = [
  { title: 'Naruto', genre: 'Action, Adventure' },
  { title: 'One Piece', genre: 'Action, Adventure' },
  { title: 'Bleach', genre: 'Action, Supernatural' },
  { title: 'Attack on Titan', genre: 'Action, Horror' },
  { title: 'Fullmetal Alchemist: Brotherhood', genre: 'Adventure, Fantasy' },
];

// Tampilkan anime list
const animeList = document.getElementById('anime-list');
animeData.forEach((anime) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${anime.title} (${anime.genre})`;
  animeList.appendChild(listItem);
});