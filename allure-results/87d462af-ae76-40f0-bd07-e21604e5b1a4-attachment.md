# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginmodule.spec.js >> data driven approach >> Invalid Password
- Location: tests\loginmodule.spec.js:8:9

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | import { test } from '../fixtures/pageFixtures'
  2  | import { readJsonFile } from '../utils/dataReader'
  3  | 
  4  | const loginJson = readJsonFile('../data/login.json')
  5  | test.describe('data driven approach',()=>{
  6  | 
  7  |     for (const data of loginJson) {
  8  |     test(data.scenario, async ({ loginPage }) => {
  9  |         await loginPage.navigate('https://opensource-demo.orangehrmlive.com')
  10 |         await loginPage.login(data.username, data.password)// key 
  11 | 
  12 |         if(data.expected === "dashboard"){
  13 |             await expect (loginPage.checkLogo())
  14 |         }else{
> 15 |             await expect (loginPage.getErrorMessage())
     |             ^ ReferenceError: expect is not defined
  16 |         }
  17 |     })
  18 | }
  19 | 
  20 | });
  21 | 
  22 | 
```