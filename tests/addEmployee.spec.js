import { test } from '../fixtures/pageFixtures'

test('Add Empoyee',async({addEmployeePage,loggedIn})=>{
    await addEmployeePage.navigateToAddEmployee('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
    await addEmployeePage.addTheEmployee('Harman','yadav')
    await addEmployeePage.isEmployeeAdded()
    await addEmployeePage.getGeneratedEmployeeId()

})