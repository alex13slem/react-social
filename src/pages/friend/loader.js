import client from '../../api/client';

async function loader({ params }) {
  const user = await client.get(`/users/${params.id}`);
  const hobbies = await client.get('/hobbies');

  const userHobbies = user.hobbies.map((slug) =>
    hobbies.find((hobby) => hobby.slug === slug)
  );

  return new Response(JSON.stringify({ user, hobbies: userHobbies }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8',
    },
  });
}

export default loader;
