import db, { DB } from "../db";
import { CompanyService } from "./company.service";
import { ProfessionalService } from "./professional.service";

class AllServices {
  public db: DB;

  public company: CompanyService;
  public professional: ProfessionalService;

  constructor() {
    this.db = db;

    this.professional = new ProfessionalService();
    this.company = new CompanyService();
    
    this.professional.__initallize(this);
    this.company.__initallize(this);
  }
}

export default AllServices;
