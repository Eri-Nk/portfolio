import { Helmet } from "react-helmet-async";

const PageHelmet = ({
  title = "Eri's Portfolio",
  content = "details of the portfolio",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};

export default PageHelmet;
