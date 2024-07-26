export const searchProducts = async (searchParams: URLSearchParams) => {
  const query = searchParams.toString();
  const response = await fetch(`http:/localhost:3001/products/search?${query}`);
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return response.json();
};
