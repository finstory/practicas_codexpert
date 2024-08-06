import db from "./db"

const practica06 = () => {

      //%po

    const getAllProfessional = () => {
        return db.professionals;
    };
    const getProfessionalById = (id: string) => {
        return db.professionals.find(professional => professional.id === id);
    }

}