import { PartialType } from '@nestjs/mapped-types';
import { CreateCorreosGrupoDto } from './create-correos_grupo.dto';

export class UpdateCorreosGrupoDto extends PartialType(CreateCorreosGrupoDto) {}
