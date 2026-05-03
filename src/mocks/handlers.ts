import { delay, http, HttpResponse } from 'msw';
import { mockApi } from './mockData';

export const handlers = [
  
  // ОТЛАДКА: перехватываем ВСЕ запросы и логируем
  http.all("*", async ({ request }) => {
    console.log("🔴 Перехвачен запрос:", request.method, request.url);
    // Не возвращаем ответ — пропускаем дальше к другим обработчикам
  }),

  //  Ваш основной обработчик логина
  http.post("https://test.0cd.dtpool.ru/api/auth/authentication/login", async () => {
    console.log("🟢 Обработан логин через MSW");
    
    const cfg = mockApi["https://test.0cd.dtpool.ru/api/auth/authentication/login"].POST;
    
    await delay(500); // имитация задержки сети
    
    return HttpResponse.json(cfg.body, { status: cfg.status });
  }),

   http.post("https://test.0cd.dtpool.ru/api/auth/authentication/signup", async () => {
    console.log("🟢 Обработан логин через MSW");
    await delay(2000)
    const cfg = mockApi["https://test.0cd.dtpool.ru/api/auth/authentication/signup"].POST;
    
    await delay(500); // имитация задержки сети
    
    return HttpResponse.json(cfg.body, { status: cfg.status });
  }),

  //  ОТЛАДКА: перехватчик для 404 (если ничего не сработало)
  http.post("*", async ({ request }) => {
    console.log("🟡 Не замокан POST запрос:", request.url);
    return HttpResponse.json({ 
      error: "Not mocked",
      url: request.url,
      method: request.method 
    }, { status: 404 });
  }),



];