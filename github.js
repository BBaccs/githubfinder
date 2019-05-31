class Github {
    constructor() {
        this.client_id = 'a2a26e6bf6a4def1c283';
        this.client_secret = '10753649385baf038044ea3b4c23352a1d61fd30';
        this.repos_count = 8;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json(); 
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}