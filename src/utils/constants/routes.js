export const commonRoute = {
  login: "/login",
  subLogin: "/login/:secreat",
  cardList: "/card-list",

  //dashboard
  dashboard: "/dashboard",
  dashboardType: "/dashboard/:dType",
  pushNotification: "/dashboard/push-notification",
  newMessage: "/dashboard/push-notification/:mType",
  recentMessage: "/dashboard/push-notification/recent-message",

  usersJourney: "/dashboard/users-journey",
  usersJourneyDetail: "/dashboard/users-journey/details/:id",
  userData: "/dashboard/user-data",
  discount: "/dashboard/discount",
  newDiscount: "/dashboard/discount/:dType",
  newDiscountSummary: "/dashboard/discount/summary",
  recentDiscount: "/dashboard/discount/recent-discount",

  //beautician
  beauticians: "/beauticians",
  // beauticianDetails: "/beauticians/:id",
  beauticianDetails: "/beauticians/details/:id",
  beauticianDashboard: "/beauticians/beautician-dashboard/:id",
  addBeautician: "/beauticians/add-beautician",
  approvalPage: "/beauticians/approval",
  archive: "/beauticians/archive",
  approvalDetail: "/beauticians/:type/:type",

  clients: "/clients",
  clientsArchived: "/clients/archive",
  clientDetails: "/clients/details/:id",
  brands: "/brands",
  brandsDetails: "/brands/:id",
  addBrand: "/brands/add-brand",
  // addProduct: "/brands/add-product",

  services: "/services",
  servicesDetails: "/services/:id",
  servicesArchive: "/services/archive",
  products: "/products",
  productsArchive: "/products/archive",
  productsDetails: "/products/details/:id",

  promotions: "/promotions",
  addPromotion: "/promotions/add-promotions",
  addSummary: "/promotions/promotion-summary",

  admins: "/admins",
  addAdmin: "/admins/:type",
  myProfile: "/admins/profile-details/:id",
  changePassword: "/admins/change-password",

  cardPieChart: "/card-pie-chart",
  gist: "/gist",
  myGist: "/gist/my-gist",
  gistDetails: "/gist/:id",

  moreOptions: "/more-options",
  moreOptionsType: "/more-options/:cType",
  serviceSubCategory: "/more-options/service-sub-category",
  productCategory: "/more-options/product-category",
  province: "/more-options/province",
  demography: "/more-options/demography",
  hsRules: "/more-options/health-safety-rules",
  amenities: "/more-options/amenities",

  termsPolicy: "/terms-policy",
  faq: "/faq",
  feedback: "/feedback",
  contactUs: "/contact-us",
};
