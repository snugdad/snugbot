import Command from '../command';

const argsInfo = new Command(
  'args-info',
  'Information about the arguments provided.',
  (message, args = []) => {
    for(let i = 0; i < args.length; i++) {
      message.channel.send(`Arg ${i + 1}: ${args[i]}\t\t`);
    }
  });
export default argsInfo;