import { useEffect } from "react";
import { useDispatch } from "react-redux";
import allAction from "../redux/actions/index";
import { useUserProfile } from ".";
import { getAccessToken } from "../services/cookie.service";

const useUserInfo = () => {
  const { data: userInfo, loading, refetch: refetchUserInfo } = useUserProfile();
  const dispatch = useDispatch();
  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      dispatch(allAction.userInfoAction.setUserInfo(userInfo));
    }
  }, [token, userInfo]);

  return {
    loading,
    refetchUserInfo,
  };
};

export default useUserInfo;
