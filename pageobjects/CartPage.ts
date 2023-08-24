import {Page, Locator, expect} from '@playwright/test';
export class CartPage

{
    private readonly page: Page;
    private readonly cartProducts: Locator;
    private readonly productsText: Locator;
    private readonly cart: Locator;
    private readonly orders: Locator;
    private readonly checkout: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart =  page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");
    }

    async VerifyProductIsDisplayed(productName)
    {
        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    async Checkout()
    {
        await this.checkout.click();
    }

    getProductLocator(productName)
    {
        return this.page.locator("h3:has-text('" + productName + "')");
    }

}