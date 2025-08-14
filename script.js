const userContainer = document.getElementById('user-container');
const errorMessage = document.getElementById('error-message');
const reloadBtn = document.getElementById('reload-btn');

function fetchUserData() {
    userContainer.innerHTML = '';
    errorMessage.textContent = '';

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(users=> {
        users.forEach(user => {
            const card = document.createElement('div');

            card.classList.add('user-card');
            card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
           <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            userContainer.appendChild(card); 
        });
    })
    .catch(error => {
        errorMessage.textContent = "Failed to load data. Check your internet connection.";
        console.error('Error:', error);
    });
}

reloadBtn.addEventListener('click', fetchUserData);

fetchUserData();
