
function loadingUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => displayingUsers(data))
}

function displayingUsers(data) {
    const ul = document.getElementById('userOs')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, username: ${user.username}`;
        ul.appendChild(li)
    }
}