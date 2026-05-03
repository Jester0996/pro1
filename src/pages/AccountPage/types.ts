import type { Dispatch, SetStateAction } from "react";

export type EntityTypeModel = "physical" | "legal";

export interface AccountFormDataModel {
  name: string;
  accountName: string;
  email: string;
  entity: EntityTypeModel;
  shortName: string;
  validUntil: string;
  ogrn: string;
  inn: string;
  kpp: string;
  legalAddress: string;
  postalAddress: string;
  ceo: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
}

export interface AccountFormStateModel extends AccountFormDataModel {
  setName: Dispatch<SetStateAction<string>>;
  setAccountName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setEntity: Dispatch<SetStateAction<EntityTypeModel>>;
  setShortName: Dispatch<SetStateAction<string>>;
  setValidUntil: Dispatch<SetStateAction<string>>;
  setOgrn: Dispatch<SetStateAction<string>>;
  setInn: Dispatch<SetStateAction<string>>;
  setKpp: Dispatch<SetStateAction<string>>;
  setLegalAddress: Dispatch<SetStateAction<string>>;
  setPostalAddress: Dispatch<SetStateAction<string>>;
  setCeo: Dispatch<SetStateAction<string>>;
  setContactPerson: Dispatch<SetStateAction<string>>;
  setContactEmail: Dispatch<SetStateAction<string>>;
  setContactPhone: Dispatch<SetStateAction<string>>;
  handleSaveUser: () => void;
  handleSaveAccount: () => void;
  handleSaveRequisites: () => void;
  handleSaveContact: () => void;
}
