const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div
          className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-yellow-200"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1 className="flex m-10">Loading...</h1>
      </div>
    </>
  );
};

export default Loading;
