export interface EndpointUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

export interface UserStore {
    dni: string;
    setDni: (dni: string) => void;

    cellPhone: string;
    setCellPhone: (cellPhone: string) => void;

    licensePlate: string;
    setLicensePlate: (licensePlate: string) => void;

    mailing: string;
    setMailing: (mailing: string) => void;
    
    name: string;
    setName: (name: string) => void;
}