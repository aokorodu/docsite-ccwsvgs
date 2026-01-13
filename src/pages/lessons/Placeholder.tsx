interface PlaceholderProps {
  title: string;
}

const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>This page is being migrated from MDX to JSX.</p>
      <p>Content coming soon...</p>
    </>
  );
};

export default Placeholder;
