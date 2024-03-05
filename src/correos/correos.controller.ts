import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { CorreosService } from './correos.service';
import { CreateCorreoDto } from './dto/create-correo.dto';
import { UpdateCorreoDto } from './dto/update-correo.dto';

@Controller('correos')
export class CorreosController {
  constructor(private readonly correosService: CorreosService) {}

  @Post()
  create(@Body() createCorreoDto: CreateCorreoDto) {
    return this.correosService.create(createCorreoDto);
  }

  @Get()
  findAll() {
    return this.correosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.correosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string,@Body() updateCorreoDto: UpdateCorreoDto, @Res() res: Response) {
    // try {
    //   await this.correosService.update(+id, updateCorreoDto);
      
    //   res.status(200).json({ message: 'Correo eliminado correctamente' });
    // } catch (error) {
    //   // Manejo de errores
    //   res.status(500).json({ error: 'Hubo un problema al eliminar el correo' });
    // }

    return this.correosService.update(+id, updateCorreoDto);
  }

  @Put(':id')
  async updateActivateColumn(@Param('id') id: string, @Res() res: Response) {
    return this.correosService.updateActivateColumn(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correosService.remove(+id);
  }
}
