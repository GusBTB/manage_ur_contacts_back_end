export interface IContactRequest {
  name: string;
  email: string;
  cellphone: string;
  id?: string;
}

export interface IContactUpdate {
  name: string;
  email: string;
  cellphone: string;
}
