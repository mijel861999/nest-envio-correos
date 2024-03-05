import { Injectable } from '@nestjs/common';
import { CreateCorreosGrupoDto } from './dto/create-correos_grupo.dto';
import { UpdateCorreosGrupoDto } from './dto/update-correos_grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CorreosGrupo } from './entities/correos_grupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CorreosGruposService {
  constructor(
    @InjectRepository(CorreosGrupo)
    private readonly correoGrupoRepository: Repository<CorreosGrupo>,
  ) {}

  create(createCorreosGrupoDto: CreateCorreosGrupoDto) {
    const nuevoCorreoGrupo = this.correoGrupoRepository.create(createCorreosGrupoDto);
    return this.correoGrupoRepository.save(nuevoCorreoGrupo);
  }

  async findAll() {
    const resultado = await this.correoGrupoRepository
    .createQueryBuilder('correoGrupo')
    .innerJoinAndSelect('correoGrupo.usuario', 'usuario')
    .innerJoinAndSelect('correoGrupo.grupo', 'grupo')
    .getMany();

    return resultado.map(({ usuario, grupo }) => ({
      correo: {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
        number: usuario.number,
        active: usuario.active
      },
      grupo: {
        id: grupo.id,
        name: grupo.name,
        description: grupo.description,
        active: grupo.active
      },
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} correosGrupo`;
  }

  update(id: number, updateCorreosGrupoDto: UpdateCorreosGrupoDto) {
    return `This action updates a #${id} correosGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} correosGrupo`;
  }
}
