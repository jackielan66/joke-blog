export default function LoadingSpinner({  }) {
    return (
      <div className="flex items-center space-x-2 text-gray-500">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
        <span>text</span>
      </div>
    )
  }