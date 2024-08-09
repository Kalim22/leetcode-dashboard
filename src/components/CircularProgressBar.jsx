const CircularProgressBar = ({
  sqSize = 50,
  percentage = 25,
  strokeWidth = 4,
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        stroke={percentage < 50 ? 'red' : 'green'}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className="circle-text text-white"
        x="50%"
        y="50%"
        dy=".1em"
        textAnchor="middle"
        style={{ fontSize: '0.9em', fill: 'white' }} 
        dominantBaseline="middle" 
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar