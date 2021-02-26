import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clase } from "./Clase";

@Index("pk_alumno", ["idAlumno"], { unique: true })
@Entity("alumno", { schema: "public" })
export class Alumno {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_alumno" })
  idAlumno: string;

  @Column("text", { name: "nombre_alumno", nullable: true })
  nombreAlumno: string | null;

  @Column("integer", { name: "celular", nullable: true })
  celular: number | null;

  @Column("text", { name: "correo", nullable: true })
  correo: string | null;

  @Column("timestamp without time zone", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("boolean", { name: "estado", nullable: true })
  estado: boolean | null;

  @OneToMany(() => Clase, (clase) => clase.idAlumno2)
  clases: Clase[];
}
