import data from '../../data/users.json';

async function loader() {
  const currentUser = data.find((user) => user.id === 1);
  const users = currentUser.friends.map((friend) =>
    data.find((user) => user.id === friend.id)
  );

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8',
    },
  });
}

export default loader;
