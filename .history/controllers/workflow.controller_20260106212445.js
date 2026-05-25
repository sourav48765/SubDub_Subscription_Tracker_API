import dayjs from 'dayjs';

import { createRequire } from 'module';
const require = createRequire( import.meta.url );
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.models';
import { log } from 'console';

export const sendReminders = serve(async () => {
    const { subscriptionId } = Context.requestPayLoad;
    const subscription = await fetchSubscription(context, subscriptionId)

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(Subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())) { 
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow`);
        
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
};