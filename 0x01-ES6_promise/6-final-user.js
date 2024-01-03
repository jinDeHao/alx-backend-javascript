import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((args) => [{
      status: args[0].status,
      value: args[0].status === 'fulfilled' ? args[0].value : args[0].reason,
    },
    {
      status: args[1].status,
      value: args[1].status === 'fulfilled' ? args[1].value : args[1].reason,
    },
    ]);
}
