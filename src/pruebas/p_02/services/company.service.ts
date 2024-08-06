import { ProfessionalService } from "../services/professional.service";
import { db, Professional } from "../db";
import AllServices from "./all_services.service";

export class CompanyService {
  //%4
  private _professional: AllServices["professional"];
  private _perolito: AllServices["perolito"];
  // constructor(serivces: { professional: ProfessionalService }) {
  //   this._professional = serivces.professional;
  // }

  public __initilize__(
    {professional}: AllServices,
    hello = "undefined", 
  ) 
    {
    this._professional = professional;
  }

  getProfessionalByCompanyName(companyName: string): Professional[] {
    const companyGetting = db.company.find((company) => company.name === companyName);
    const professionalList =
      //%5
      this._professional.getProfessionalList(companyGetting.professional_list);

    return professionalList;
  }
}
