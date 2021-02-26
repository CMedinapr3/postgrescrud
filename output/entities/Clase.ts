import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Alumno } from "./Alumno";
import { Docente } from "./Docente";
import { Materia } from "./Materia";

@Index("ixfk_clase_alumno", ["idAlumno"], {})
@Index("pk_clase", ["idClase"], { unique: true })
@Index("ixfk_clase_docente", ["idDocente"], {})
@Index("ixfk_clase_materia", ["idMateria"], {})
@Entity("clase", { schema: "public" })
export class Clase {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_clase" })
  idClase: string;

  @Column("bigint", { name: "id_alumno", nullable: true })
  idAlumno: string | null;

  @Column("bigint", { name: "id_docente", nullable: true })
  idDocente: string | null;

  @Column("integer", { name: "id_materia", nullable: true })
  idMateria: number | null;

  @Column("integer", { name: "parcial", nullable: true })
  parcial: number | null;

  @Column("numeric", { name: "nota", nullable: true, precision: 4, scale: 2 })
  nota: string | null;

  @Column("timestamp without time zone", {
    name: "fecha_registro",
    nullable: true,
  })
  fechaRegistro: Date | null;

  @Column("boolean", { name: "estado", nullable: true })
  estado: boolean | null;

  @ManyToOne(() => Alumno, (alumno) => alumno.clases)
  @JoinColumn([{ name: "id_alumno", referencedColumnName: "idAlumno" }])
  idAlumno2: Alumno;

  @ManyToOne(() => Docente, (docente) => docente.clases)
  @JoinColumn([{ name: "id_docente", referencedColumnName: "idDocente" }])
  idDocente2: Docente;

  @ManyToOne(() => Materia, (materia) => materia.clases)
  @JoinColumn([{ name: "id_materia", referencedColumnName: "idMateria" }])
  idMateria2: Materia;
}
