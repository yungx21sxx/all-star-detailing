export interface IUser {
  id: string;
  phone: string;
  role: Role;
  balance: number;
}

interface IPriceTableItem {
  name: string;
  prices: string[];
}
export interface IPriceTable {
  serviceID: string;
  services: IPriceTableItem[];
}

type Role = 'ADMIN' | 'USER';

interface ISEOInfo {
  title: string;
  description: string;
}
export interface IService {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: string;
  position: number;
  img: string;
  price: {
    text: string;
    value: number;
  };
  photos: string[];
  seo?: ISEOInfo;
}

export interface IComplex {
  id: string;
  title: string;
  included: string[];
  description: string;
  price: PriceSale;
  time: string;
  seo?: ISEOInfo;
}

export interface Photo {
  photoId: number;
  urlMin: string;
  position: number;
  urlFull: number;
}

export interface ICar {
  id: number;
  name: string;
  description: string;
  date: string;
  img: string;
  photos: Photo[];
}

interface Price {
  text: string;
  value: number;
}

interface PriceSale {
  previous: string;
  current: string;
}
