export interface MenuConfig {
  path: string;
  title: string;
  protected?: boolean;
}

type TranslateFunction = (key: string) => string;

export const navMenuConfigs = (translate: TranslateFunction): MenuConfig[] => [
  {
    path: "/",
    title: translate("HOME"),
  },
  {
    path: "https://www.news.fandom.co.th/",
    title: translate("BLOG"),
  },
  {
    path: "/about-us",
    title: translate("ABOUT_US"),
  },
  {
    path: "/mystery-box",
    title: "Mystery Box",
  },
];

export const personalMenuConfigs = (translate: TranslateFunction) => [
  {
    path: "/account",
    title: translate("ACCOUNT"),
  },
  {
    path: "/wallet",
    title: translate("WALLET"),
  },
  {
    path: "/my-item",
    title: "My Item",
  },
  {
    path: "/change-password",
    title: translate("CHANGE_PASSWORD"),
  },
];
