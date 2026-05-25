import { Router} from 'express';
import { sendReminders } from '../controllers/workflow.controller.js';

const workflowRouter = Router();

workflowRouter.( '/', sendReminders);

export default workflowRouter;