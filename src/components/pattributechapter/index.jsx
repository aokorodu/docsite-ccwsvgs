export const ExampleTemp = () => {
  return <></>;
};

export const Example1 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle cx="250" cy="150" r="100" fill="orange" />
      </svg>
    </>
  );
};

export const Example2 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="none"
        />
      </svg>
    </>
  );
};

export const Example3 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="black"
        />
      </svg>
    </>
  );
};

export const Example4 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="black"
          strokeWidth={3}
        />
      </svg>
    </>
  );
};

export const Example5 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="black"
          strokeWidth={3}
          strokeOpacity={0.3}
        />
      </svg>
    </>
  );
};

export const Example6 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="black"
          strokeWidth={3}
          strokeDasharray={10}
        />
      </svg>
    </>
  );
};

export const Example7 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="orange"
          fillOpacity={0.2}
          stroke="black"
          strokeWidth={3}
          strokeDasharray={"40 5"}
        />
      </svg>
    </>
  );
};

export const Example8 = () => {
  return (
    <>
      <svg width="500" height="500" viewBox="0 0 500 500">
        <path d="M 50,0 v 500" stroke="red" />
        <path d="M 450,0 v 500" stroke="red" />
        <path d="M 50,100 h 400" stroke="black" stroke-width="5" />
        <path
          d="M 50,200 h 400"
          stroke="black"
          stroke-width="5"
          strokeDasharray="50"
        />
        <text
          x="250"
          y="210"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          strokeDasharray="50"
        </text>

        <path
          d="M 50,300 h 400"
          stroke="black"
          stroke-width="5"
          strokeDasharray="30 10"
        />
        <text
          x="250"
          y="310"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          strokeDasharray="30 10"
        </text>
        <path
          d="M 50,400 h 400"
          stroke="black"
          stroke-width="5"
          strokeDasharray="20 15 10 5"
        />
        <text
          x="250"
          y="410"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          strokeDasharray="20 15 10 5"
        </text>
      </svg>
    </>
  );
};

export const Example9 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <path d="M 50,0 v 500" stroke="red" />
        <path d="M 450,0 v 500" stroke="red" />
        <path
          d="M 50,100 h 400"
          stroke="black"
          stroke-width="5"
          strokeDasharray="50"
        />
        <text
          x="250"
          y="110"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          no stroke-dashoffset
        </text>
        <path
          d="M 50,200 h 400"
          stroke="black"
          stroke-width="5"
          strokeDasharray="50"
          strokeDashoffset={25}
        />
        <text
          x="250"
          y="210"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-dashoffset="25"
        </text>
      </svg>
    </>
  );
};

export const Example10 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="none"
          stroke="black"
          strokeWidth={3}
        />
      </svg>
    </>
  );
};

export const Example11 = () => {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300">
        <circle
          cx="250"
          cy="150"
          r="100"
          fill="none"
          stroke="black"
          strokeWidth={3}
          strokeDasharray={50}
          pathLength={100}
        />
      </svg>
    </>
  );
};

export const Example12 = () => {
  return (
    <>
      <svg width="500" height="400" viewBox="0 0 500 400">
        <path
          d="M 50,100 h 400"
          stroke="black"
          strokeWidth="30"
          strokeLinecap="butt"
        />
        <text
          x="250"
          y="120"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linecap="butt"
        </text>

        <path
          d="M 50,200 h 400"
          stroke="black"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <text
          x="250"
          y="220"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linecap="round"
        </text>

        <path
          d="M 50,300 h 400"
          stroke="black"
          strokeWidth="30"
          strokeLinecap="square"
        />
        <text
          x="250"
          y="320"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linecap="square"
        </text>

        <path d="M 50,0 v 500" stroke="red" strokeWidth="1" />

        <path d="M 450,0 v 500" stroke="red" strokeWidth="1" />
      </svg>
    </>
  );
};

export const Example13 = () => {
  return (
    <>
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
        <path
          d="M70 138L247 23L420.5 138"
          stroke="black"
          stroke-width="40"
          strokeLinejoin="miter"
        />
        <text
          x="250"
          y="125"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linejoin="miter"
        </text>

        <path
          d="M70 300L247 185L420.5 300"
          stroke="black"
          stroke-width="40"
          strokeLinejoin="bevel"
        />
        <text
          x="250"
          y="295"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linejoin="bevel"
        </text>

        <path
          d="M75 462L252 347L425.5 462"
          stroke="black"
          stroke-width="40"
          strokeLinejoin="round"
        />
        <text
          x="250"
          y="465"
          fill="black"
          textAnchor="middle"
          dominantBaseline={"hanging"}
        >
          stroke-linejoin="round"
        </text>
      </svg>
    </>
  );
};
