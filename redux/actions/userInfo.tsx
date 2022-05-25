const setUserInfo = (value: string): { type: string; userInfo: any } => {
  return {
    type: "SET_USER_INFO",
    userInfo: value,
  };
};

export default {
  setUserInfo,
};
