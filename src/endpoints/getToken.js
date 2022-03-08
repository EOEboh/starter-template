const endPoint = 'https://prod-in.100ms.live/hmsapi/skype-clone.app.100ms.live/';
const room_id = 'put your room id here';

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