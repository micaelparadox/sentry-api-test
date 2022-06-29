import { NestFactory } from '@nestjs/core';
// import { SentryService } from '@ntegral/nestjs-sentry';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useLogger(SentryService.SentryServiceInstance());
  await app.listen(3000);
}
bootstrap();
