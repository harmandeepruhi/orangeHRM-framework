# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> data driven approach >> Invalid Password
- Location: tests\dashboard.spec.js:8:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('alert', { name: 'Invalid credentials' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: Invalid credentials
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "Username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "Password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot your password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
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
  14 |         await selector.waitFor({state:'visible'})
  15 |         await selector.fill(text)
  16 |     }
  17 |     async getText(selector){
> 18 |         await selector.waitFor({state:'visible'})
     |                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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