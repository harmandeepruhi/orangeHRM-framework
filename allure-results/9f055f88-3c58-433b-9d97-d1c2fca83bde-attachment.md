# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> dashboard
- Location: tests\dashboard.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded while setting up "loggedIn".
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Not Found" [level=1] [ref=e2]
  - paragraph [ref=e3]: The requested URL was not found on this server.
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