function Divider() {
  return (
    <div
      className="my-8 h-px w-full sm:my-10"
      style={{
        background:
          "repeating-linear-gradient(to right, rgb(115 115 115) 0px, rgb(115 115 115) 10px, transparent 10px, transparent 20px)",
      }}
    />
  );
}

export default Divider;