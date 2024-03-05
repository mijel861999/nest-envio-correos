import { Correo } from "src/correos/entities/correo.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grupo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    active: boolean;

    @ManyToMany(() => Correo, correo => correo.grupos)
    correos: Correo[];
}
