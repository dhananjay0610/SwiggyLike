const ShimmerBody = () => {
  // console.log(props);
  return (
    <div className="shimmer-div">
      {Array(10)
        .fill("")
        .map(() => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerBody;
