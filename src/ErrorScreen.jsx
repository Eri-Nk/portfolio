const ErrorScreen = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4">
      <h3 className="text-2xl font-semibold text-red-600 mb-4">
        We are sorry, something went wrong
      </h3>
      <p className="text-lg mb-2 text-center">
        We cannot process your request at this moment. Please try again later.
      </p>
      <p className="text-sm text-gray-600 mb-2">ERROR: {error.message}</p>
      <p className="text-sm text-gray-600 italic mb-4">{error.component}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorScreen;
