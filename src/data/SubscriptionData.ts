import { Subscription } from "../models/Subscription";

export class SubscriptionData {

    static TC10_getSubscriptionDetails(): Subscription {
        return {
            email: `stimna${Date.now()}@test.com`
        };
    }
}
