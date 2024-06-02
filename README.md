перед запуском npm i
для ініціалізації бд потрібно додати змінну DATABASE_URL в .env і запустити команду prisma db push
в .env додати змінну JWT_SECRET
для запуску сервера npm run start:dev

База Даних - 2 таблиці, users та events
авторизація за допомогою jwt access та refresh токенів
