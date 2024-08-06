import { db, Professional } from "../db";
import { ProfessionalService } from "./professional.service";

export class CompanyService {
  private _professional: ProfessionalService;

  constructor(serivces: { professional: ProfessionalService }) {
    this._professional = serivces.professional;
  }

  featuredfProfessional(companyName: string): string {
    const company = db.company.find((company) => company.name === companyName);
    return company.featured_professional;
  }

  getProfessionalByCompanyName(companyName: string): Professional[] {
    const companyGetting = db.company.find((company) => company.name === companyName);

    const professionalList = this._professional.getProfessionalList(companyGetting.professional_list);

    return professionalList;
  }
}
