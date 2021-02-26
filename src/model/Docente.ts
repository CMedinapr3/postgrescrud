import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clase } from "./Clase";

@Index("pk_docente", ["idDocente"], { unique: true })
@Entity("docente", { schema: "public" })
export class Docente {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_docente" })
  idDocente: string;

  @Column("text", { name: "nombre_docente", nullable: true })
  nombreDocente: string | null;

  @Column("integer", { name: "celular", nullable: true })
  celular: number | null;

  @Column("timestamp without time zone", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("boolean", { name: "estado", nullable: true })
  estado: boolean | null;

  @OneToMany(() => Clase, (clase) => clase.idDocente2)
  clases: Clase[];
}
