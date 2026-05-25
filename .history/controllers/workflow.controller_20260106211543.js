import { createRequire } from 'module';
const require = createRequire( import.meta.url );
const { serve } = require('@upstash/workflow/express');

export const sendReminders = serve(async () => {
    const { subscptionId } = Context.requestPayLoad;
    const subscription = await fetchSubscription(context, subscirptionId)
});

const fetchSubscription = async (context, subscirptionId) => {

}