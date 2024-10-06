export const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto border-t border-neutral-800">
      <div className="max-w-screen-lg mx-auto py-4 w-full z-50">
        <div className="text-center">
          <p className="text-balance font-medium text-sm leading-loose text-neutral-500">
            The source code is available on{" "}
            <span className="hover:underline underline-offset-4">GitHub</span>
          </p>
          <p className="text-balance font-medium text-sm leading-loose text-neutral-500">
            {new Date().getFullYear()}
            <span className="hover:underline underline-offset-4">
              Tyrone José
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
