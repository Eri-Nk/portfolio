// SkillsLoader.jsx
export default function SkillsLoader({ value }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);
  return (
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center ">
      {/* Track circle (background) */}
      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 160 160">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="14"
          fill="transparent"
          r="70"
          cx="80"
          cy="80"
        />
        {/* Progress circle */}
        <circle
          className="text-green-500 drop-shadow-lg"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          fill="transparent"
          r="70"
          cx="80"
          cy="80"
          strokeDasharray={circumference} // circumference = 2πr
          strokeDashoffset={offset} // offset for % completion
        />
      </svg>

      {/* Percentage text in center */}
      <div className="absolute text-base md:text-xl font-bold">{value}%</div>
    </div>
  );
}
