export const Example1 = () => {
  return (
    <>
      <svg width="500" height="250" viewBox="0 0 500 250">
        <g fill="orange" stroke="red" stroke-width="7">
          <rect x="25" y="25" width="200" height="200" />
          <rect x="275" y="25" width="200" height="200" />
        </g>
      </svg>
    </>
  );
};

export const Example2 = () => {
  return (
    <>
      <svg width="500" height="250" viewBox="0 0 500 250">
        <g fill="orange" stroke="red" stroke-width="7">
          <rect x="25" y="25" width="200" height="200" />
          <rect x="275" y="25" width="200" height="200" fill="purple" />
        </g>
      </svg>
    </>
  );
};
