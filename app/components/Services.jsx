export default function Services() {
  return (
    <section className="bg-white p-8" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-wrap justify-around p-4 md:p-9">
          <img
            src="./assets/image 10.png"
            alt="Company Logo"
            className="w-1/2 sm:w-1/4 md:w-1/6"
          />
          <img
            src="./assets/image 10.png"
            alt="Company Logo"
            className="w-1/2 sm:w-1/4 md:w-1/6"
          />
          <img
            src="./assets/image 10.png"
            alt="Company Logo"
            className="w-1/2 sm:w-1/4 md:w-1/6"
          />
          <img
            src="./assets/image 10.png"
            alt="Company Logo"
            className="w-1/2 sm:w-1/4 md:w-1/6"
          />
          <img
            src="./assets/image 10.png"
            alt="Company Logo"
            className="w-1/2 sm:w-1/4 md:w-1/6"
          />
        </div>
        <div className="flex flex-col md:flex-row text-left justify-around mb-8">
          <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Full development cycle
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We use proven technologies
              </p>
              <h3 className="font-bold text-xl mb-2">Web</h3>
              <p>
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js /
                Nuxt / MySQL / Laravel / GO lang / django / Python
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Mobile</h3>
              <p>
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                / Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </p>
            </div>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  iOS development &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  Android development &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  Web development &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  UI/UX design &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  Testing &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  Launch &gt;
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black-600 hover:text-green-800">
                  IT consulting &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
