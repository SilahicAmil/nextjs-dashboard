const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-yellow-200"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1 className="h-full">Loading...</h1>
      </div>
    </>
  );
};

export default Loading;
