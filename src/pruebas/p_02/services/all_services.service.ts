import { CompanyService } from "./company.service";
import { ProfessionalService } from "./professional.service";

class AllServices {
  public company: CompanyService;
  public professional: ProfessionalService;
  perolito: string;

  constructor() {
    this.company = new CompanyService();
    this.professional = new ProfessionalService();
    
    this.company.__initilize__(this);
  }
}
export default AllServices;

const services = new AllServices();
//% 1 instanciamos la clase:
//$ services.company.getProfessionalByCompanyName === undefined
