export function renderHeader() {
  const header = document.querySelector('header');

  header.innerHTML = `
    <nav class="nav-left">
      <svg class="js-icon--menu" id="ham-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      <a href="/src/pages/recipes.html">Recipes</a>
      <a href="/src/pages/posts.html">Tipps</a>
      <a href="/src/pages/about.html">About</a>
    </nav>
    <h1>Tasty.</h1>
    <nav class="nav-right">
      <a href="/src/pages/favorites.html">Favorites</a>
      <a href="#login">Login</a>
      <svg class="js-icon-account" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
    </nav>
  `
};