/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import fs from "node:fs/promises";
import path from "node:path";
import { Aluno } from "./Aluno";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

const students: Aluno[] = [
  new Aluno({
    nome: "Fulano",
    idade: 32,
    nota: 8.7,
  }),
  new Aluno({
    nome: "Ciclano",
    idade: 24,
    nota: 7.9,
  }),
  new Aluno({
    nome: "Beltrano",
    idade: 28,
    nota: 7.1,
  }),
];

const filePath = path.resolve(__dirname, "students.csv");

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  try {
    // nome das colunas primeiro
    await fs.writeFile(filePath, "Nome,Idade,Nota");

    for (const student of students) {
      await fs.appendFile(
        filePath,
        `\n${student.nome},${student.idade},${student.nota}`,
      );
    }
  } catch (error) {
    console.log(error);
  }
});
