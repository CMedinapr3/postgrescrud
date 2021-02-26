import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clase } from "./Clase";

@Index("pk_materia", ["idMateria"], { unique: true })
@Entity("materia", { schema: "public" })
export class Materia {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_materia" })
  idMateria: number;

  @Column("text", { name: "nombre_materia", nullable: true })
  nombreMateria: string | null;

  @Column("timestamp without time zone", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("boolean", { name: "estado", nullable: true })
  estado: boolean | null;

  @OneToMany(() => Clase, (clase) => clase.idMateria2)
  clases: Clase[];
}
