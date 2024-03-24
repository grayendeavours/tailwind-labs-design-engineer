export function PhotoUpload() {
  return (
    <div className="relative sm:flex sm:justify-center sm:items-center py-8 px-6 sm:px-8 gap-8 bg-gray-50 border-y -mx-2 sm:-mx-8 border-gray-200">
      <ul className="relative z-10 space-y-1">
        <li>
          1x <code className="font-mono text-green-700">react-dropzone</code>
        </li>
        <li>
          1x <code className="font-mono text-green-700">react-query</code>{" "}
          mutation
        </li>
        <li>
          1x <code className="font-mono text-green-700">AbortSignal</code>
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>Manual cancellation</li>
          </ul>
        </li>
        <li>
          2x API routes
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>Signature generation</li>
            <li>Photo deletion</li>
          </ul>
        </li>
        <li>
          1x <code className="font-mono text-green-700">react-easy-crop</code>{" "}
          modal
        </li>
        <li>1x Cloudinary SDK</li>
        <li>1x SVG progress indicator</li>
        <li>
          1x Photo customisation context
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>Crop state</li>
            <li>Filter selection</li>
          </ul>
        </li>
        <li>
          1x <code className="font-mono text-green-700">ref</code> to the
          original file
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>Manual retries without re-selecting</li>
          </ul>
        </li>
        <li>
          1x Hidden input
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>
              Registered with{" "}
              <code className="font-mono text-green-700">react-hook-form</code>
            </li>
          </ul>
        </li>
        <li>
          1x AWS Rekognition content moderation
          <ul className="ml-6 text-gray-600 pl-2 border-l-4 border-gray-200">
            <li>Don&apos;t ask</li>
          </ul>
        </li>
      </ul>

      <div
        style={{ perspective: 1000 }}
        className="absolute opacity-20 right-0 top-8 sm:top-0 sm:opacity-80 sm:relative z-0"
      >
        <div
          style={{ transform: "rotate3d(0.2, 1, 0, 25deg)" }}
          className="p-2 border-4 rounded-sm border-dashed border-gray-300 w-72 h-72"
        >
          <div className="flex h-full items-center justify-center translate-x-6 rounded-sm border-l-8 bg-gray-50 border-2 border-gray-200">
            <div className="flex items-center justify-center translate-x-6 border-8 border-gray-3400 rounded-full">
              <div className="flex items-center justify-center translate-x-6 w-36 h-36 rounded-full bg-white border border-l-4 border-gray-200 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
