import SnugBot from './snugbot';
import env from 'dotenv';

// main driver
(function main() {
  env.config();
  SnugBot.connectToDiscord(process.env.CLIENT_KEY);
})();
