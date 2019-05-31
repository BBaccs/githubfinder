// Instantiate github
const github = new Github;

// Init UI
const ui = new UI;

// Search input:
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {

    // Grab input value
    const userText = e.target.value;

    if (userText !== '') {
       // Make http call 
       github.getUser(userText)
       .then(data => {
           if (data.profile.message === 'Not Found') {
               // Show alert

           } else {
            ui.showProfile(data.profile);   
           }
       })
    } else {
        // Clear profile
    }
});