import { test, expect } from '../fixtures/pageFixtures'
import { readJsonFile } from '../utils/dataReader'

const loginJson = readJsonFile('../data/login.json')
test.describe('data driven approach',()=>{

    for (const data of loginJson) {
    test(data.scenario, async ({ loginPage }) => {
        
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com')
        await loginPage.login(data.username, data.password)// key 

        if(data.expected){
            expect(await loginPage.checkLogo()).toBeTruthy()
        }else{
            expect(await  loginPage.getErrorMessage()).toContain(data.expected)
        }
    })
}

});

