import moment from "moment";

export function getHeaderData() {
  let header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
  };
  if (getDataFromLocalStorage("token")) {
    header = {
      ...header,
      ...{ Authorization: `Bearer ${getDataFromLocalStorage("token")}` },
    };
  }
  return header;
}

export const storeLocalStorageData = (newData) => {
  // const decryptData = decrypt(localStorage.sliikeData || {});
  // localStorage.sliikeData = encrypt({ ...decryptData, ...newData });
  const decryptData = localStorage?.sliikeData
    ? JSON.parse(localStorage?.sliikeData)
    : {};
  localStorage.sliikeData = JSON.stringify({ ...decryptData, ...newData });
};

export const getDataFromLocalStorage = (key = "") => {
  let returnValue = "";
  if (localStorage?.sliikeData) {
    // const localObjectData = decrypt(localStorage?.sliikeData);
    const localObjectData = JSON.parse(localStorage?.sliikeData);
    if (key) {
      returnValue = localObjectData[key] ? localObjectData[key] : "";
    } else {
      returnValue = localObjectData;
    }
  }
  return returnValue;
};

export const titleCaseString = (value) => {
  if (typeof value !== "string") return "";
  return value.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase()); // Capital first character of each word
};

export const objectToFormData = (obj) => {
  let formData = new FormData();
  for (let key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

export const objectToQueryParams = (object) => {
  return new URLSearchParams(object).toString();
};

// Trim all left space
export const trimLeftSpace = (value) => value.replace(/^\s+/g, ""); // Remove white space from left side
export const trimAllSpace = (value) => value.replace(/ /g, "");

//month year list
export const getMonthList = (num) => {
  return [...Array(num)].map((_, i) => {
    return { id: moment().subtract(i, "month").format("MMM YYYY") };
  });
};

//year list
export const getYearList = (num) => {
  return [...Array(num)].map((_, i) => {
    return { id: moment().subtract(i, "year").format("YYYY") };
  });
};
