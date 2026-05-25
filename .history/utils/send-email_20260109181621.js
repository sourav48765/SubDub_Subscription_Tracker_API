export const sendReminderEmail = async ({ to, type, subscription }) => {
    if(!to || !type) throw new Error('Missing required parameters');
}