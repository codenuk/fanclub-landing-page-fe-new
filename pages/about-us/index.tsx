import { AboutUs } from "../../containers";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const AboutUsPage: NextPageWithLayout = () => {
  return <AboutUs />;
};

AboutUsPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default AboutUsPage;
