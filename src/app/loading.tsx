export default function Loading() {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
      <div className="text-center">
        {/* Vertical Farm Animation */}
        <div className="relative w-32 h-48 mx-auto mb-8">
          {/* Container */}
          <div className="absolute inset-0 bg-gray-300 rounded-lg border-4 border-gray-400">
            {/* Growing Plants Animation */}
            <div className="absolute bottom-2 left-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-2 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-14 left-2 w-6 h-6 bg-green-600 rounded-full animate-pulse delay-500"></div>
            
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-8 right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-400"></div>
            <div className="absolute bottom-14 right-2 w-6 h-6 bg-green-600 rounded-full animate-pulse delay-600"></div>
            
            {/* Water Drops */}
            <div className="absolute top-4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute top-8 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          </div>
          
          {/* LED Lights */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-purple-400 rounded animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-emerald-800 mb-2">Growing Fresh Solutions</h2>
        <p className="text-emerald-600 mb-4">Loading vertical agriculture data...</p>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto">
          <div className="h-2 bg-emerald-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
      </div>
    </div>
  );
}