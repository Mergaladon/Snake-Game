async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // 👈 no /1
  const data = await response.json(); // now 'data' is an array

  const ul = document.getElementById("post-list");

  for (const post of data) {          // 👈 loop over the array
    const li = document.createElement("li");
    li.textContent = post.title;      // 👈 use each post's title
    ul.appendChild(li);
  }
}

getPost();