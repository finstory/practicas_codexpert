
import { CompanyService } from "./company.service";
import { ProfessionalService } from "./professional.service";

class AllServices {

  public company: CompanyService;
  public professional: ProfessionalService;

  constructor() {
    this.professional = new ProfessionalService({ company: this.company });
    this.company = new CompanyService({ professional: this.professional });
  }
}

export default AllServices;
