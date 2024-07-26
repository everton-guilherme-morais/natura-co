export const searchProducts = async (searchParams: URLSearchParams) => {
  const query = searchParams.toString();
  console.log('name is', searchParams.get('name'))
  const response = await fetch(`http:/localhost:3001/products/search?${query}`);
  const parseData = await response.json()

  if (!response.ok) {
    throw new Error('Failed to search products');
  }

  return Response.json(parseData);
};
