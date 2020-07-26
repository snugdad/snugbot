import SnugBot from './snugbot';
import env from 'dotenv';

env.config();
SnugBot.connectToDiscord(process.env.CLIENT_KEY);