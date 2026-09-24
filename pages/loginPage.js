import { basePage } from './base_Page';

export class LoginPage extends basePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginbutton = page.getByRole('button', { name: ' Login ' })
        this.errorMessage = page.getByRole('alert', { name: 'Invalid credentials' })
        this.checklogo = page.getByRole('img', { name: 'orangehrm-logo' });
    }

    async navigate(url) {
        await this.goto(url);
    }
    async login(username, password) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginbutton);
    }
    async getErrorMessage() {
        return await this.getText(this.errorMessage)
    }
    async checkLogo() {
        return await this.isvisible(this.checklogo)
    }
}