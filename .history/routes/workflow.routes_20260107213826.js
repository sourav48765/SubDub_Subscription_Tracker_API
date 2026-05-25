import { Router} from 'express';
import { sendReminders } from '../controllers/workflow.controller.js';

const workflowRouter = Router();

workflowRouter.post( '/subscription/remi', sendReminders);

export default workflowRouter;