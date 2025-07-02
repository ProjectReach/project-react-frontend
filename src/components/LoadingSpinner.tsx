export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        {/* Vertical Farm Container */}
        <div className="w-16 h-24 bg-gray-200 rounded border-2 border-gray-300 relative">
          {/* Growing Plants */}
          <div className="absolute bottom-1 left-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-1 w-3 h-3 bg-green-500 rounded-full animate-ping delay-200"></div>
          <div className="absolute bottom-7 left-1 w-3 h-3 bg-green-600 rounded-full animate-ping delay-400"></div>
          
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-4 right-1 w-3 h-3 bg-green-500 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-7 right-1 w-3 h-3 bg-green-600 rounded-full animate-ping delay-500"></div>
        </div>
        
        {/* LED Light */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-purple-400 rounded animate-pulse"></div>
      </div>
    </div>
  );
}