import { Company, DB, Professional } from "../db";
import AllServices from "./all_services.service";
import { CompanyService } from "./company.service";

export class ProfessionalService {
  private _company: CompanyService;
  private _db: DB;

  // constructor(serivces: { db: DB; company: CompanyService }) {
  //   this._company = serivces.company;
  //   this._db = serivces.db;
  // }

  public __initallize({ company, db }: AllServices) {
    this._company = company;
    this._db = db;
  }

  getAllProfessional = (professionalUsernameList: string[]): Professional[] => {
    const professionalList: Professional[] = this._db.professional.filter((professional) => {
      return professionalUsernameList.includes(professional.username);
    });
    return professionalList;
  };
}
