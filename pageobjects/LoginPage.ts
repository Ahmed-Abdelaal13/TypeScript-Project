import {Page, Locator, expect} from '@playwright/test';
export class LoginPage 

{
    private readonly page;
    private readonly signInbutton;
    private readonly userName;
    private readonly passWord;


    constructor (page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username,password)
    {
        await this.userName.type(username);
        await this.passWord.type(password);
        await this.signInbutton.click();
    }
}

