export class basePage{
    constructor(page){
        this.page=page;

    }
    async goto(path){
        await this.page.goto(path, { waitUntil: 'domcontentloaded', timeout: 60000 })
    }
    async click(selector){
        await selector.waitFor({state:'visible'})
        await selector.click();
    }
    async fill(selector,text){
        await selector.waitFor({state:'visible'})
        await selector.fill(text)
    }
    async getText(selector){
        await selector.waitFor({state:'visible'})
        return await selector.textContent()

    }
    async getInputValue(selector){
        await selector.waitFor({state:'visible'})
        return await selector.inputValue()
    }
    async isvisible(selector,timeout=5000){
        try{
            await selector.waitFor({state:'visible',timeout});
            return "true"
        }
        catch(e){
            return "false"
        }
    }
}