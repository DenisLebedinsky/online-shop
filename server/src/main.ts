import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // await app.listen(3000);
    await app.listen(process.env.PORT, process.env.HOST, () => {
      console.info(`Express server is running on http://${process.env.HOST}:${process.env.PORT}/`);

      if (process.env.NODE_ENV !== "production") {
        console.info(`GraphQL playground is at http://${process.env.HOST}:${process.env.PORT}/graphql`);
      }
    });
}

bootstrap();
