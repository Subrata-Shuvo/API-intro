function loadingPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => displayingPost(data))
}
loadingPost()
function displayingPost(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('posts')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div);

    }
}