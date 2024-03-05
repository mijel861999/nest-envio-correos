import { Correo } from 'src/correos/entities/correo.entity';
import { Grupo } from 'src/grupos/entities/grupo.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CorreosGrupo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Correo, usuario => usuario.grupos)
  usuario: Correo;

  @ManyToOne(() => Grupo, grupo => grupo.correos)
  grupo: Grupo;
}