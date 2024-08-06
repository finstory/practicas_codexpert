import { db, Professional, Company } from "../db";
import AllServices from "./all_services.service";
import { CompanyService } from "./company.service";



export class ProfessionalService {
  private _perolito: AllServices["perolito"];

  public __initilize__(services: AllServices) {
    this._perolito = services.perolito;

  }

  getProfessionalByUsername = (username: string): Professional => {
    const professional = db.professional.find((professional) => professional.username === username);
    return professional;
  };

  getProfessionalList = (professionalUsernameList: string[]): Professional[] => {
    const professionalList: Professional[] = db.professional.filter((professional) => {
      return professionalUsernameList.includes(professional.username);
    });
    return professionalList;
  };
}
