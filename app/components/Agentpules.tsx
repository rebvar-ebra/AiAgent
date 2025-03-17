type AgentpulesProps = {
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "purple";
};

function Agentpules({ size = "medium", color = "blue" }: AgentpulesProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const colorClasses = {
    blue: "bg-blue-500 shadow-[0_0_8px_4px_rgba(59,130,246,0.5)]",
    green: "bg-green-500 shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]",
    purple: "bg-purple-500 shadow-[0_0_8px_4px_rgba(139,92,246,0.5)]",
  };

  return (
    <div
      className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
    ></div>
  );
}

export default Agentpules;
