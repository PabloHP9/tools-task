class SharedData {
    constructor() {
        this.generatedEmail = null;
    }

    setGeneratedEmail(email) {
        this.generatedEmail = email;
    }
    getGeneratedEmail() {
        return this.generatedEmail;
    }
}
export default new SharedData();