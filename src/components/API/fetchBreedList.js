const fetchPet = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!res.ok) throw new Error(`fetch is not ok`);
  return await res.json(); // Add parentheses here
};

export default fetchPet;
