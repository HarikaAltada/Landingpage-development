const TeamSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 lg:pl-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our team</h2>
          <p className="text-gray-600 mb-8">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex flex-start gap-10 mb-8">
            <div>
              <h3 className="text-4xl font-bold">28</h3>
              <p className="text-gray-600">team members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">+100</h3>
              <p className="text-gray-600">projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">7 years</h3>
              <p className="text-gray-600">in IT sphere</p>
            </div>
          </div>
          <p className="text-gray-600">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it.
          </p>
        </div>
        <div className="md:w-1/2 lg:pl-10 mt-8 md:mt-0">
          <img
            src="./assets/Group 625868.png"
            alt="Team"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
