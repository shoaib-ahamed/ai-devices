export const MobileNotSupported: React.FC = () => {
  return (
    <div className="flex flex-col text-black items-center justify-center h-screen z-10 bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Only Desktop Supported Currently
        </h2>
        <p className="text-lg">Mobile devices coming soon...</p>
      </div>
    </div>
  );
};
