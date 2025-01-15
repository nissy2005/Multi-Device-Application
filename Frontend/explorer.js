// Example data (in a real-world scenario, you'd fetch this from an API)
const recipes = [
    {
      name: "English Muffins",
      description: "It is made of honey and wheat",
      image: "muffin.jpg",
      link: "#"
    },
    {
      name: "Triple Chocolate Cake",
      description: "It is a combination of chocolate buttercream and mock-devil’s food cake.",
      image: "cake.jpg",
      link: "#"
    },
    {
      name: "Chocolate Donuts",
      description: "Made with chocolate frost",
      image: "chocolate.jpg",
      link: "#"
    },
    {
        name: "Homemade Oreos",
        description: "Taste just like the classic packaged cookies, but with a homemade touch",
        image: "oreos.jpg",
        link: "#"
      }
  ];
  
  // Function to load recipes into the grid
  function loadRecipes() {
    const recipeGrid = document.getElementById('exploreResults');
    recipeGrid.innerHTML = ''; // Clear previous results
    
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <a href="${recipe.link}">View Recipe</a>
      `;
      
      recipeGrid.appendChild(recipeCard);
    });
  }
  
  // Call the function to load recipes on page load
  window.onload = loadRecipes;
  
  