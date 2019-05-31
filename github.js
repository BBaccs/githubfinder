class Github {
    constructor() {
        this.client_id = 'a2a26e6bf6a4def1c283';
        this.client_secret = '10753649385baf038044ea3b4c23352a1d61fd30';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
