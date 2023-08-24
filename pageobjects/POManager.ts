import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { OrdersHistoryPage } from './OrdersHistoryPage';
import { OrdersReviewPage } from './OrdersReviewPage';
import { CartPage } from './CartPage';
export { POManager };

class POManager 
{
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly dashboardPage: DashboardPage;
    private readonly ordersHistoryPage: OrdersHistoryPage;
    private readonly ordersReviewPage: OrdersReviewPage;
    private readonly cartPage: CartPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage(): LoginPage {
        return this.loginPage;
    }

    getCartPage(): CartPage {
        return this.cartPage;
    }

    getDashboardPage(): DashboardPage {
        return this.dashboardPage;
    }

    getOrdersHistoryPage(): OrdersHistoryPage {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage(): OrdersReviewPage {
        return this.ordersReviewPage;
    }
}
