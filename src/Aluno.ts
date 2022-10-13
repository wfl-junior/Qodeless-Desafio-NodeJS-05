export class Aluno {
  public nome!: string;
  public idade!: number;
  public nota!: number;

  constructor(student: Aluno) {
    Object.assign(this, student);
  }
}
