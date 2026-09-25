import { basePage } from './base_Page';

export class AddEmployee extends basePage{
    constructor(page){
        super(page)
        this.pim_button=page.getByRole('link',{name:'PIM'})
        this.addMember_button=page.getByRole('link',{name:'Add Employee'})
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.submitButton = page.getByRole('button', { name: 'Save' });
        this.employeeIdInput = page.getByLabel('Employee Id');
    }
    async navigateToAddEmployee(url){
        await this.goto(url)

    }
    async addTheEmployee(firstname,lastname){
        await this.fill(this.firstNameInput, firstname);
        await this.fill(this.lastNameInput, lastname);
        await this.click(this.submitButton);
        await this.page.waitForURL(/\/pim\/viewPersonalDetails\/empNumber\/\d+/, {
            waitUntil: 'domcontentloaded',
            timeout: 30000,
        });

    }
    async isEmployeeAdded(){
        return /\/pim\/viewPersonalDetails\/empNumber\/\d+/.test(this.page.url());

    }
    async getGeneratedEmployeeId(){
        const employeeDetailsUrl = new URL(this.page.url());
        const employeeNumber = employeeDetailsUrl.pathname.match(/\/empNumber\/(\d+)/);

        if (!employeeNumber) {
            throw new Error(`Employee number was not found in URL: ${this.page.url()}`);
        }

        return employeeNumber[1];

    }
}