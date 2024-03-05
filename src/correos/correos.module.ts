import { Module } from '@nestjs/common';
import { CorreosService } from './correos.service';
import { CorreosController } from './correos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Correo } from './entities/correo.entity';
import { CorreosGrupo } from 'src/correos_grupos/entities/correos_grupo.entity';
import { Grupo } from 'src/grupos/entities/grupo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Correo]),
  ],
  controllers: [CorreosController],
  providers: [CorreosService],
})
export class CorreosModule {}
