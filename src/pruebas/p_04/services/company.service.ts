import { DB, Professional } from "../db";
import AllServices from "./all_services.service";
import { ProfessionalService } from "./professional.service";

export class CompanyService {
  private _professional: ProfessionalService;
  private _db: DB;

  // constructor(db: DB) {
  //   this._db = db;
  // }

  __initallize({ professional, db }: AllServices) {
    this._professional = professional;
    this._db = db;
  }

  getProfessionalByCompanyName(companyName: string): Professional[] {
    const companyGetting = this._db.company.find((company) => company.name === companyName);
    const professionalList = this._professional.getAllProfessional(companyGetting.professional_list);

    return professionalList;
  }
}
