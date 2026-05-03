import { useState } from "react";

import { selectUser } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import {
  validateEmail,
  validateInn,
  validateKpp,
  validateOgrn,
  validatePhone,
} from "@/utils/validations";

import type { AccountFormStateModel, EntityTypeModel } from "../types";

export const useAccountForm = (): AccountFormStateModel => {
  const user = useAppSelector(selectUser);

  const [name, setName] = useState(user?.login || "");
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [entity, setEntity] = useState<EntityTypeModel>("legal");
  const [shortName, setShortName] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [ogrn, setOgrn] = useState("");
  const [inn, setInn] = useState("");
  const [kpp, setKpp] = useState("");
  const [legalAddress, setLegalAddress] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [ceo, setCeo] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleSaveUser = () => {
    if (!name.trim()) {
      return;
    }
  };

  const handleSaveAccount = () => {
    if (email && !validateEmail(email)) {
      return;
    }
  };

  const handleSaveRequisites = () => {
    if (ogrn && !validateOgrn(ogrn)) {
      return;
    }

    if (inn && !validateInn(inn)) {
      return;
    }

    if (kpp && !validateKpp(kpp)) {
      return;
    }
  };

  const handleSaveContact = () => {
    if (contactEmail && !validateEmail(contactEmail)) {
      return;
    }

    if (contactPhone && !validatePhone(contactPhone)) {
      return;
    }
  };

  return {
    name,
    setName,
    accountName,
    setAccountName,
    email,
    setEmail,
    entity,
    setEntity,
    shortName,
    setShortName,
    validUntil,
    setValidUntil,
    ogrn,
    setOgrn,
    inn,
    setInn,
    kpp,
    setKpp,
    legalAddress,
    setLegalAddress,
    postalAddress,
    setPostalAddress,
    ceo,
    setCeo,
    contactPerson,
    setContactPerson,
    contactEmail,
    setContactEmail,
    contactPhone,
    setContactPhone,
    handleSaveUser,
    handleSaveAccount,
    handleSaveRequisites,
    handleSaveContact,
  };
};
