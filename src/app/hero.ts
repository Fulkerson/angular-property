export class Hero {
  id: number;
  name: string;

  get propname(): string {
    return this.name;
  }
}
