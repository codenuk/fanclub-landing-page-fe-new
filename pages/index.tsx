import { PageLayout } from "../layouts";
import { NextPageWithLayout } from "./_app";
import { LandingSections } from "../containers";

const Home: NextPageWithLayout = () => {
  console.log('process.env["NEXT_PUBLIC_API_ENDPOINT"];', process.env["NEXT_PUBLIC_STATE"])
  return <LandingSections />;
};

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Home;
