import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorreosGruposService } from './correos_grupos.service';
import { CreateCorreosGrupoDto } from './dto/create-correos_grupo.dto';
import { UpdateCorreosGrupoDto } from './dto/update-correos_grupo.dto';

@Controller('correos-grupos')
export class CorreosGruposController {
  constructor(private readonly correosGruposService: CorreosGruposService) {}

  @Post()
  create(@Body() createCorreosGrupoDto: CreateCorreosGrupoDto) {
    return this.correosGruposService.create(createCorreosGrupoDto);
  }

  @Get()
  findAll() {
    return this.correosGruposService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.correosGruposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorreosGrupoDto: UpdateCorreosGrupoDto) {
    return this.correosGruposService.update(+id, updateCorreosGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correosGruposService.remove(+id);
  }
}
