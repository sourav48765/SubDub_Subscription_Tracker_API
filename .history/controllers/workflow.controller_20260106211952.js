import { createRequire } from 'module';
import Subscription from '../models/subscription.models';
const require = createRequire( import.meta.url );
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async () => {
    const { subscriptionId } = Context.requestPayLoad;
    const subscription = await fetchSubscription(context, subscriptionId)

    if(!subscription || subsc) {
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
};