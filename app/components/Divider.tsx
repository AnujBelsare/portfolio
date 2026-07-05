type DividerProps = {
  className?: string;
};

function Divider({ className = "my-8 sm:my-10" }: DividerProps) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "repeating-linear-gradient(to right, rgb(115 115 115) 0px, rgb(115 115 115) 10px, transparent 10px, transparent 20px)",
      }}
    />
  );
}

export default Divider;