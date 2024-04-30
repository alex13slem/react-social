import client from '../../api/client';

async function loader() {
  const users = await client
    .get('/users')
    .then((users) => users.filter((user) => user.id != 1));

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8',
    },
  });
}

export default loader;
