export async function getApi(api) {
  const response = await fetch(api);

  var data = await response.json();

  return data;
}
