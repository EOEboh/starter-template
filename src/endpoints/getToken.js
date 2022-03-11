const endPoint = 'your token_endpoint';
const room_id = 'your room id';

export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: 'put your user id here', 
      role: role,
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
  
}