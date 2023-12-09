import express from 'express';
import { createConversation, updateConversations, getConversations, getConversation } from '../controller/conversationController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/', verifyToken, createConversation);
router.get('/', verifyToken, getConversations);
router.get('/single/:id', verifyToken, getConversation);
router.put('/:id', verifyToken, updateConversations);







export default router;