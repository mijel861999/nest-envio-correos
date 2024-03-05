import { Module } from '@nestjs/common';
import { CorreosGruposService } from './correos_grupos.service';
import { CorreosGruposController } from './correos_grupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorreosGrupo } from './entities/correos_grupo.entity';
import { Correo } from 'src/correos/entities/correo.entity';
import { Grupo } from 'src/grupos/entities/grupo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CorreosGrupo]),
  ],
  controllers: [CorreosGruposController],
  providers: [CorreosGruposService],
})
export class CorreosGruposModule {}
