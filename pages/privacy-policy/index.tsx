import { PrivacyPolicy } from "../../containers";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const PrivacyPolicyPage: NextPageWithLayout = () => {
  return <PrivacyPolicy isSignUp={false} />;
};

PrivacyPolicyPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default PrivacyPolicyPage;
