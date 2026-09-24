# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginmodule.spec.js >> data driven approach >> Invalid Password
- Location: tests\loginmodule.spec.js:8:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | export class basePage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  | 
  5  |     }
  6  |     async goto(path){
> 7  |         await this.page.goto(path, { waitUntil: 'domcontentloaded', timeout: 60000 })
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
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