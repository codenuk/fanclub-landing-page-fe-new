import * as yup from "yup";

export const AirdropSchema = yup.object().shape({
  promoCodeID: yup.string().required(),
});
