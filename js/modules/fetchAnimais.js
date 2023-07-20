export default async function fetchAnimais(url) {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
