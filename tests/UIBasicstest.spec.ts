import { test, expect } from '@playwright/test';



test('Browser Context playwright test1', async ({page}) =>
{
       await page.goto("https://www.google.com");
       console.log(await page.title());
      await expect(page).toHaveTitle("Google");

});




test('Browser Context playwright test2', async ({browser}) =>
{
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});



test('Browser Context playwright test3', async ({browser}) =>
{
    const Context = await browser.newContext();
    const page = await Context.newPage();
    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());


    await userName.type("rahulshetty");
    await passWord.type("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});



test('UI Controls', async ({page}) =>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown =page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await expect(documentLink).toHaveAttribute("class","blinkingText");


//await page.pause();

});



test('Child Windows hadl', async ({browser}) =>
{
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([
        Context.waitForEvent('page'),
        documentLink.click(),
    ])

    const text = await newPage.locator(".red").textContent();
    console.log(text);

});


