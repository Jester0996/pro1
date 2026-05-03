import axios from "axios";

// Базовый URL без пробелов
const API_URL = "https://test.0cd.dtpool.ru/api";

// Правильная функция логина (POST, не GET!)
export const loginUser = async (login: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/authentication/login`,  // без пробелов!
      {
        login: login,      // данные в body
        password: password
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка входа:", error);
    throw error;
  }
};

// Mock данные — URL без пробелов!


export const mockApi = {
  'https://test.0cd.dtpool.ru/api/auth/authentication/login': {
    POST: { 
      status: 200, 
      body: { 
        id: 1, 
        login: 'Alex',
        token: 'jwt_token_12345'
      } 
    },
  },

  'https://test.0cd.dtpool.ru/api/auth/authentication/signup': {
    POST: { 
      status: 200, 
      body: { 
        id: 1, 
        login: 'Alex',
        token: 'jwt_token_12345'
      } 
    },
  },



};
