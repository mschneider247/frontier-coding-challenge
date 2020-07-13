export const getAccounts = async() => {
  const url = `https://frontiercodingtests.azurewebsites.net/api/accounts/getall`;
  const response = await fetch(url)
  if (!response.ok) {
    throw Error('Error retrieving account data!')
  }
  const data = await response.json();
  return data;
}