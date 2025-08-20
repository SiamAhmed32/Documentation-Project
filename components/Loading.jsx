const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-emerald-500 border-t-transparent"
          role="status"
          aria-label="loading"
        ></div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Loading content...
        </p>
      </div>
    </div>
  );
};

export default Loading;