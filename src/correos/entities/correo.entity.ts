import { Grupo } from "src/grupos/entities/grupo.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Correo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    active: boolean;

    @ManyToMany(() => Grupo, grupo => grupo.correos)
    grupos: Grupo[];
}
