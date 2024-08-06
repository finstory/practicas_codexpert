
import { CompanyService } from "./company.service";
import { ProfessionalService } from "./professional.service";

class AllServices {

  public company: CompanyService;
  public professional: ProfessionalService;

  constructor() {
    this.company = new CompanyService({ professional: this.professional });
    this.professional = new ProfessionalService({ company: this.company });
  }
}

export default AllServices;
