type PageHeadingProps = {
  text: string;
};

const PageHeading = ({ text }: PageHeadingProps) => {
  return (
    <h1 className="text-center mt-10 font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-6">
      {text}
    </h1>
  );
};

export default PageHeading;
