import { db, Professional, Company } from "../db";
import { CompanyService } from "./company.service";

export class ProfessionalService {
  private _company: CompanyService;

  constructor(serivces: { company: CompanyService }) {
    this._company = serivces.company;
  }

  isFeaturedProfessional = (professionalUsername: string): boolean => {
    try {
      let check = false;
      const professionalGetting = db.professional.find((professional) => professional.username === professionalUsername);
      const companyNameList = professionalGetting?.company_list;

      if (companyNameList)
        companyNameList.forEach((companyName) => {
          if (this._company.featuredProfessional(companyName) === professionalUsername) {
            check = true;
          }
        });
      else throw new Error("Professional not found");

      return check;
    } catch (error) {
      console.log(error.message);
    }
  };
}
