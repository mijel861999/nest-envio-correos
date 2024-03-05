import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCorreoDto } from './dto/create-correo.dto';
import { UpdateCorreoDto } from './dto/update-correo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Correo } from './entities/correo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CorreosService {
  constructor(
    @InjectRepository(Correo)
    private readonly correoRepository: Repository<Correo>
  ) {}
  create(createCorreoDto: CreateCorreoDto) {
    const nuevoCorreo = this.correoRepository.create(createCorreoDto)
    return this.correoRepository.save(nuevoCorreo);
  }

  findAll() {
    const correos = this.correoRepository.findAndCount()
    return correos;
  }

  findOne(id: number) {
    const correo = this.correoRepository.findOne({ where: { id } });
    return correo;
  }

  async update(id: number, updateCorreoDto: UpdateCorreoDto) {
    const correo = this.correoRepository.findOne({ where: { id }})

    if (!correo) {
      throw new NotFoundException(`Correo con ID ${id} no encontrado`)
    }

    this.correoRepository.update({ id }, { ...updateCorreoDto })
    return correo;
  }

  remove(id: number) {
    return `This action removes a #${id} correo`;
  }

  async updateActivateColumn(id: number) {
    const correo = this.correoRepository.findOne({ where: { id } })

    if (!correo) {
      throw new NotFoundException(`Correo con ID ${id} no encontrado`)
    }

    // await this.correoRepository.update({ id }, { active: !correo.active })
    return correo;
  }
}
