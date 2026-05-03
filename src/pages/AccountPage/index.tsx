import { useAccountForm } from "./hooks/useAccountForm";

import "./style.scss";

const AccountPage = () => {
  const {
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
  } = useAccountForm();

  return (
    <div className="account-page">
      <section className="account-section">
        <h3 className="section-title">Пользователь</h3>

        <div className="user-row">
          <div className="user-avatar-large" />
          <div className="user-field">
            <label>Имя</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Имя"
            />
          </div>
        </div>

        <div className="save-btn-wrapper">
          <button className="save-btn" type="button" onClick={handleSaveUser}>
            Сохранить
          </button>
        </div>
      </section>

      <div className="section-divider" />

      <section className="account-section">
        <h3 className="section-title">Аккаунт</h3>

        <div className="field-group">
          <label>Название</label>
          <input
            value={accountName}
            onChange={(event) => setAccountName(event.target.value)}
            placeholder="Название"
          />
        </div>

        <div className="field-group email-group">
          <label>Email для связи</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="my@email.ru"
          />
          <span className="error-text">Не подтвержден</span>
        </div>

        <div className="save-btn-wrapper">
          <button
            className="save-btn"
            type="button"
            onClick={handleSaveAccount}
          >
            Сохранить
          </button>
        </div>
      </section>

      <div className="section-divider" />

      <section className="account-section">
        <div className="entity-toggle">
          <button
            type="button"
            className={entity === "physical" ? "active" : ""}
            onClick={() => setEntity("physical")}
          >
            Физическое лицо
          </button>
          <button
            type="button"
            className={entity === "legal" ? "active" : ""}
            onClick={() => setEntity("legal")}
          >
            Юридическое лицо
          </button>
        </div>

        <div className="field-group">
          <label>Полное название</label>
          <input placeholder="Полное название" />
        </div>
      </section>

      <div className="section-divider" />

      <section className="account-section">
        <h3 className="section-title">Реквизиты</h3>

        <div className="field-group">
          <label>Короткое название</label>
          <input
            value={shortName}
            onChange={(event) => setShortName(event.target.value)}
            placeholder="Короткое название"
          />
        </div>

        <div className="field-group">
          <label>Действует до</label>
          <input
            type="date"
            value={validUntil}
            onChange={(event) => setValidUntil(event.target.value)}
            placeholder="__.__.____"
          />
        </div>

        <div className="field-group">
          <label>ОГРН / ОГРНИП</label>
          <input
            value={ogrn}
            onChange={(event) => setOgrn(event.target.value)}
            placeholder="Номер ОГРН / ОГРНИП"
          />
        </div>

        <div className="field-group">
          <label>ИНН</label>
          <input
            value={inn}
            onChange={(event) => setInn(event.target.value)}
            placeholder="Номер ИНН"
          />
        </div>

        <div className="field-group">
          <label>КПП</label>
          <input
            value={kpp}
            onChange={(event) => setKpp(event.target.value)}
            placeholder="Номер КПП"
          />
        </div>

        <div className="save-btn-wrapper-left">
          <button
            className="save-btn"
            type="button"
            onClick={handleSaveRequisites}
          >
            Сохранить
          </button>
        </div>
      </section>

      <div className="section-divider" />

      <section className="account-section">
        <h3 className="section-title">Контактные данные</h3>

        <div className="field-group">
          <label>Юридический адрес</label>
          <input
            value={legalAddress}
            onChange={(event) => setLegalAddress(event.target.value)}
            placeholder="Юридический адрес"
          />
        </div>

        <div className="field-group">
          <label>Почтовый адрес</label>
          <input
            value={postalAddress}
            onChange={(event) => setPostalAddress(event.target.value)}
            placeholder="Почтовый адрес"
          />
        </div>

        <div className="field-group">
          <label>Генеральный директор</label>
          <input
            value={ceo}
            onChange={(event) => setCeo(event.target.value)}
            placeholder="ФИО"
          />
        </div>

        <div className="field-group">
          <label>Контактное лицо</label>
          <input
            value={contactPerson}
            onChange={(event) => setContactPerson(event.target.value)}
            placeholder="ФИО"
          />
        </div>

        <div className="field-group">
          <label>Контактный Email</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.target.value)}
            placeholder="my@email.ru"
          />
        </div>

        <div className="field-group">
          <label>Контактный Телефон</label>
          <input
            type="tel"
            value={contactPhone}
            onChange={(event) => setContactPhone(event.target.value)}
            placeholder="+7 (___) ___-__-__"
          />
        </div>

        <div className="save-btn-wrapper-left">
          <button
            className="save-btn"
            type="button"
            onClick={handleSaveContact}
          >
            Сохранить
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
