import { db } from "../db";
import { ProfessionalService } from "./professional.service";

export class CompanyService {

  private _professional: ProfessionalService;

  constructor(serivces: { professional: ProfessionalService }) {
    this._professional = serivces.professional;
  }

  featuredProfessional(companyName: string): string {
    const company = db.company.find((company) => company.name === companyName);
    return company.featured_professional;
  }
}
