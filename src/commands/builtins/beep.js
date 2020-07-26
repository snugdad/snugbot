import Command from '../command';

const beep = new Command(
  'beep',
  'Beep!',
  (message, args = []) => {
    message.channel.send('Beep!');
  });

export default beep;
