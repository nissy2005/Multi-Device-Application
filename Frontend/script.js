// Sample recipe data (can be replaced by API calls)
const recipes = [
  {
    title: 'Recipe 1',
    description: 'A brief description of Recipe 1.',
    img: 'recipe1.jpg',
    link: '#',
    category: 'vegetarian'
  },
  {
    title: 'Recipe 2',
    description: 'A brief description of Recipe 2.',
    img: 'recipe2.jpg',
    link: '#',
    category: 'non-vegetarian'
  },
  {
    title: 'Recipe 3',
    description: 'A brief description of Recipe 3.',
    img: 'recipe3.jpg',
    link: '#',
    category: 'vegan'
  },
  {
    title: 'Recipe 4',
    description: 'A brief description of Recipe 4.',
    img: 'recipe4.jpg',
    link: '#',
    category: 'vegetarian'
  }
  // Add more recipes as needed
];

// Function to display recipe cards
function displayRecipes(filteredRecipes) {
  const exploreResults = document.getElementById('exploreResults');
  exploreResults.innerHTML = ''; // Clear previous results

  filteredRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <a href="${recipe.link}">View Recipe</a>
    `;

    exploreResults.appendChild(card);
  });
}

// Initial recipe load
displayRecipes(recipes);

// Search and filter functionality
document.getElementById('searchButton').addEventListener('click', () => {
  const query = document.getElementById('exploreSearchInput').value.toLowerCase();
  const category = document.getElementById('filterCategory').value;

  // Filter recipes based on query and category
  const filteredRecipes = recipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(query) && 
           (category === 'all' || category === recipe.category);
  });

  // Display filtered recipes
  displayRecipes(filteredRecipes);
});

// Load more functionality
document.getElementById('loadMoreButton').addEventListener('click', () => {
  // Here you can load more recipes via an API call or load additional items
  alert('Load more recipes...');
});