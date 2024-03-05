import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorreosGrupo } from 'src/correos_grupos/entities/correos_grupo.entity';
import { Correo } from 'src/correos/entities/correo.entity';
import { Grupo } from './entities/grupo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Grupo]),
  ],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}
