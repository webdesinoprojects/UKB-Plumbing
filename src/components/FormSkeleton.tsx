export default function FormSkeleton() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-subtle animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
      <div className="space-y-3">
        <div className="h-12 bg-gray-200 rounded w-full"></div>
        <div className="h-12 bg-gray-200 rounded w-full"></div>
        <div className="h-12 bg-gray-200 rounded w-full"></div>
        <div className="h-32 bg-gray-200 rounded w-full"></div>
      </div>
      <div className="h-12 bg-gray-300 rounded w-full mt-4"></div>
    </div>
  );
}