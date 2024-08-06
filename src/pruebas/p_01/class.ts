export class User {
  public id: number;
  public username: string;
  private _password: string;
  public hobbies: string[];
  private age: number;
  private _adult: boolean;

  constructor(id: number, username: string, _password: string, hobbies: string[], age: number) {
    this.id = id;
    this.username = username;
    this._password = _password;
    this.hobbies = hobbies;
    this.age = age;
    this._adult = this.age >= 18;
  }

  public get getUsername(): string {
    return this.username;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public getPasswordBySecretPassword(secret: string): string {
    if (secret === "secret") {
      return this._password;
    } else {
      return "No tienes acceso a la contraseña";
    }
  }
}

export const main = () => {
  const user = new User(1, "john_doe", "123Qwer", ["reading", "gaming"], 25);
  const passwordGetting = user.getPasswordBySecretPassword("secret");
  console.log(passwordGetting);
};

main();
