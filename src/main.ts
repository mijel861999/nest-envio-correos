import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: [
  //     "http://localhost:5173/",
  //   ],
  // });

  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend en Svelte
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
