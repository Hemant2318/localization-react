import Button from "components/form/Button/Button";
import FileUpload from "components/form/FileUpload/FileUpload";
import RadioButton from "components/form/RadioButton/RadioButton";
import TextInput from "components/form/TextInput/TextInput";
import { Formik } from "formik";
import i18next from "i18next";
import { omit } from "lodash";
import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const AddServicePopup = ({ onHide, handleSuccess }) => {
  const formRef = useRef();
  const [languageDetect, setLanguageDetect] = useState("en");
  const [btnLoading, setBtnLoading] = useState(false);

  const { t } = useTranslation();
  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
    setLanguageDetect(e.target.value);
  };
  const initialValues = {
    serviceName: "",
  };

  const handleSave = async (values) => {
    console.log("values", values);
  };
  const validationSchema = Yup.object().shape({
    serviceName: Yup.string().required("Service Category is required."),
  });
  return (
    <Modal show aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="d-flex justify-content-end color-dashboard-primary position-relative">
          <button
            type="button"
            className="btn-close position-absolute"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onHide}
          ></button>
        </div>
        <div className="cmb-16 text-center color-dashboard-primary cmt-20">
          {t("addCategoryHead")}
        </div>

        <div className="d-flex gap-3 pt-4 pb-4">
          <RadioButton
            label="English"
            id="eng"
            value="en"
            checked={languageDetect === "en"}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          />
          <RadioButton
            label="French"
            id="fnr"
            value="fr"
            checked={languageDetect === "fr"}
            onChange={(e) => {
              handleChangeLanguage(e);
            }}
          />
        </div>

        <Formik
          innerRef={formRef}
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {(props) => {
            const {
              values,
              errors,
              handleChange,
              submitForm,
              handleReset,
              setFieldValue,
            } = props;
            const { serviceName } = values;
            return (
              <form>
                <div className="row d-flex justify-content-center cmb-30">
                  <div className="cmb-22">
                    <TextInput
                      label={t("categoryHead")}
                      id="serviceName"
                      placeholder={t("categoryHead")}
                      value={serviceName}
                      error={errors.serviceName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <Button
                    className="text-13-600 h-auto cps-25 cpe-25 cpt-10 cpb-10 text-15-600"
                    btnStyle="GO"
                    btnText={t("cancel")}
                    onClick={handleReset}
                    // btnLoading={btnLoader}
                  />
                  <Button
                    className="text-15-600 h-auto cps-35 cpe-35 cpt-10 cpb-10 text-15-600"
                    btnStyle="PD"
                    btnText={t("add")}
                    onClick={submitForm}
                    btnLoading={btnLoading}
                  />
                </div>
              </form>
            );
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddServicePopup;
