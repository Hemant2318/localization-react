import React, { useState } from "react";
import "./Home.scss";
import RadioButton from "components/form/RadioButton/RadioButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Table from "components/layouts/Table/Table";
import Button from "components/form/Button/Button";
import AddServicePopup from "./AddServicePopup";

const Home = () => {
  const [languageDetect, setLanguageDetect] = useState("en");
  const [showPopup, setShowPopup] = useState(false);

  const { t } = useTranslation();
  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
    setLanguageDetect(e.target.value);
  };

  const data = [
    {
      id: t("indOne"),
      name: t("category1"),
    },
    {
      id: t("indTwo"),
      name: t("category2"),
    },
    {
      id: t("indThree"),
      name: t("category3"),
    },
  ];

  const header = [
    {
      title: <div>{t("srHead")}</div>,
    },
    {
      title: <div>{t("categoryHead")}</div>,
    },
    {
      title: <div>{t("actionHead")}</div>,
    },
  ];

  const rowData = [];
  data?.map((elem) => {
    const { id, name } = elem;
    let obj = [
      {
        value: <div>{id}</div>,
      },
      {
        value: <div>{name}</div>,
      },
      {
        value: <div>Action</div>,
      },
    ];
    rowData?.push({ data: obj });
  });

  return (
    <div id="home-container">
      <h5 className="text-center color-black">Internationalization</h5>
      <div className="localization d-flex justify-content-center flex-column align-items-center cmt-200">
        <div className="d-flex gap-3 pt-4 pb-4">
          <RadioButton
            label="English"
            id="en"
            value="en"
            checked={languageDetect === "en"}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          />
          <RadioButton
            label="French"
            id="fr"
            value="fr"
            checked={languageDetect === "fr"}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          />
        </div>

        <h4 className="pt-4 pb-4">{t("welcome")}</h4>
        {showPopup && (
          <AddServicePopup
            handleSuccess={() => {}}
            onHide={() => {
              setShowPopup(false);
            }}
          />
        )}
      </div>
      <div className="table-container p-3">
        <div className="d-flex">
          <Button
            btnText="Add Category"
            className="cmb-20"
            btnStyle="PD"
            onClick={() => setShowPopup(true)}
          />
        </div>
        <Table tableData={data} header={header} rowData={rowData} />
      </div>
    </div>
  );
};

export default Home;
