class UI {
    constructor() {
        this.profile = document.getElementById('profile');
   
    }

    //Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class"row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9 mb-4">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Following: ${user.following}</span>
                        <br /> <br />
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                    <h3 class="page-heading mb-3">Latest Repos:</h3>
                    <div id="repos"></div>
                </div>
            </div>
        `;
    }

    // Show repos
    //Initalize a variable, append to it the HTML you want, then select the dynamic element and add to it's innerHTML
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Public Repos: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Public Gists: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Public Followers: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        // Add class
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent so we can insert div into it
        const container = document.querySelector('.searchContainer');
        // Get the search box
        const search = document.querySelector('.search');
        //Insert alert
        container.insertBefore(div, search);
        setTimeout(() => {
            ui.clearAlert(); 
        }, 3000);

    }

     // Clear alert message
     clearAlert() {
       const currentAlert = document.querySelector('.alert-danger')
       if (currentAlert) {
           currentAlert.remove();
           
       }

    }

    // Clear profile in UI
    clearProfile() {
        this.profile.innerHTML = '';
    }
}