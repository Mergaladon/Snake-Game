console.log("JS is connected to book-search!");

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultsList = document.querySelector("#results-list");

searchButton.addEventListener("click", () => {
  const term = searchInput.value;
  console.log("Button clicked! Search term is:", term);
  searchBooks(term);
});

async function searchBooks(searchTerm) {
  console.log("Searching for:", searchTerm);

  const url =
    "https://openlibrary.org/search.json?q=" + encodeURIComponent(searchTerm);

  const response = await fetch(url);
  const data = await response.json();

  console.log("Whole response:", data);
  console.log("Books array:", data.docs);

  // clear old results
  resultsList.innerHTML = "";

  // if no results, show a simple message
  if (!data.docs || data.docs.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found.";
    resultsList.appendChild(li);
    return;
  }

  // render each book title
  for (const book of data.docs) {
    const li = document.createElement("li");
    li.textContent = book.title;
    resultsList.appendChild(li);
  }
}