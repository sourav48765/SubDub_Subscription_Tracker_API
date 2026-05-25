import dayjs from 'dayjs';

import { createRequire } from 'module';
const require = createRequire( import.meta.url );
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.models';
import { MongoErrorLabel } from 'mongodb';
import { log } from 'console';

const REMINDERS = [7, 5 , 2, 1];


export const sendReminders = serve(async () => {
    const { subscriptionId } = Context.requestPayLoad;
    const subscription = await fetchSubscription(context, subscriptionId)

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(Subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())) { 
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    for(const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');   
        // renewal date = 22 feb, reminder date = 15 feb, 17, 20, 21

        if(reminderDate.isAfter(dayjs())) {
            //
        }
    }    
        
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
};

const sleepUntilReminder = async (context, MongoErrorLabel, date) => {
    console.log(`Sleepin`);
    
}