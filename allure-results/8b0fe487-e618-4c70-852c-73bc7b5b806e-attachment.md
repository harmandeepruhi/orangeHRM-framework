# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addEmployee.spec.js >> Add Empoyee
- Location: tests\addEmployee.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('First Name') to be visible

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | export class basePage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  | 
  5  |     }
  6  |     async goto(path){
  7  |         await this.page.goto(path)
  8  |     }
  9  |     async click(selector){
  10 |         await selector.waitFor({state:'visible'})
  11 |         await selector.click();
  12 |     }
  13 |     async fill(selector,text){
> 14 |         await selector.waitFor({state:'visible'})
     |                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  15 |         await selector.fill(text)
  16 |     }
  17 |     async getText(selector){
  18 |         await selector.waitFor({state:'visible'})
  19 |         return await selector.textContent()
  20 | 
  21 |     }
  22 |     async getInputValue(selector){
  23 |         await selector.waitFor({state:'visible'})
  24 |         return await selector.inputValue()
  25 |     }
  26 |     async isvisible(selector,timeout=5000){
  27 |         try{
  28 |             await selector.waitFor({state:'visible',timeout});
  29 |             return "true"
  30 |         }
  31 |         catch(e){
  32 |             return "false"
  33 |         }
  34 |     }
  35 | }
```