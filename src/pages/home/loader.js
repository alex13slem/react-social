import usersData from '../../data/users.json';
import hobbiesData from '../../data/hobbies.json';

async function loader() {
  const user = usersData.find((user) => user.id === 1);
  const hobbies = user.hobbies.map((slug) =>
    hobbiesData.find((hobby) => hobby.slug === slug)
  );

  return new Response(JSON.stringify({ user, hobbies }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8',
    },
  });
}

export default loader;
