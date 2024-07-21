export default function Development() {
  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center lg:pl-20 p-4"
      id="cases"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Application Development Stages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-10 items-center">
        <div className="flex flex-col gap-8">
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/plan (1).png"
                  alt="Analysis Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Analysis</h2>
              <p className="text-center mt-2">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </div>
          </div>
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/design (1).png"
                  alt="Design Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Design</h2>
              <p className="text-center mt-2">
                We adapt the customer's corporate identity to the platform
                guidelines. We draw convenient and understandable interfaces.
              </p>
            </div>
          </div>
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/computer coding (2).png"
                  alt="Development Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Development</h2>
              <p className="text-center mt-2">
                We create an extensible architecture, write clean and stable
                code. We integrate with customer technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="./assets/hope-gif1.png"
            alt="App Screenshot"
            className="w-full lg:mr-20 max-w-md"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/copyright (1).png"
                  alt="Testing Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Testing</h2>
              <p className="text-center mt-2">
                We carry out functional testing and do bug fixes. We adapt the
                application to different phone resolutions.
              </p>
            </div>
          </div>
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/hosting (1).png"
                  alt="Launching Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Launching</h2>
              <p className="text-center mt-2">
                We design the application page and publish it in the App Store
                and Google Play stores.
              </p>
            </div>
          </div>
          <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="./assets/mobile setting.png"
                  alt="Support Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Support</h2>
              <p className="text-center mt-2">
                We monitor the stability of the application, update it for new
                devices and versions of iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
