export async function load({ cookies }) {
  const visited = await cookies.get('visited');

  cookies.set('visited', 'true', { path: '/' });

  return {
    visited: visited === 'true'
  };
}
