const API_ENDPOINT = 'https://coretoolshomologaapi.redeinova.com.br/api/auth';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: email,
        senha: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Incorrect email or password. Please try again.');
    }
  } catch (error) {
    throw new Error('Something went wrong. Please try again.');
  }
};