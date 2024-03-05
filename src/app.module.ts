import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorreosModule } from './correos/correos.module';
import { GruposModule } from './grupos/grupos.module';
import { PruebaController } from './prueba/prueba.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Correo } from './correos/entities/correo.entity';
import { CorreosController } from './correos/correos.controller';
import { CorreosService } from './correos/correos.service';
import { CorreosGruposModule } from './correos_grupos/correos_grupos.module';
import { CorreosGruposController } from './correos_grupos/correos_grupos.controller';
import { CorreosGrupo } from './correos_grupos/entities/correos_grupo.entity';
import { Grupo } from './grupos/entities/grupo.entity';

@Module({
  imports: [CorreosModule, GruposModule, CorreosGruposModule , TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'toor',
    entities: [Correo, CorreosGrupo, Grupo],
    synchronize: true,
    database: "envio-correos"
  }), TypeOrmModule.forFeature([Correo, CorreosGrupo, Grupo])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
