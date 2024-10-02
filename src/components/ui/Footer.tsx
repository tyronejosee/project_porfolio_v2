export const Footer = () => {
  return (
    <footer className="mt-auto bg-neutral-darkgrey">
      <div className="max-w-screen-xl mx-auto text-center py-8 space-y-4 px-4 xl:px-0">
        <div className="text-sm text-neutral-gray max-w-screen-md mx-auto">
          <p>
            This site is a personal project and does not represent a real
            service. All information and content displayed here are fictitious
            and used solely for educational and demonstration purposes.
          </p>
        </div>
        <div className="text-sm text-neutral-gray">
          <p>
            &copy; {new Date().getFullYear()} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugiat, architecto nostrum minima in illo eligendi cum iusto? Sint, minima deleniti! Laudantium veniam rerum voluptas cum molestiae, aspernatur distinctio iure.
          </p>
        </div>
      </div>
    </footer>
  );
};
