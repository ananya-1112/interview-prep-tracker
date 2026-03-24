function ProgressBar({ progress }) {
  return (
    <div style={{ background: "#ddd", borderRadius: "5px", height: "20px" }}>
      <div
        style={{
          width: `${progress}%`,
         background: progress > 70 ? "green" : "orange",
          height: "100%",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;