import { Link } from "react-router-dom";
import BuyMeCoffee from "../components/BuyMeCofee";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Ontario G1 Practice Test App</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Prepare for the Ontario G1 written driving test with realistic, updated practice questions — including road signs and rules of the road.
        </p>
        <Link to="/quiz">
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded shadow hover:bg-gray-100 transition">
            Start Practicing
          </button>
        </Link>
      </section>

      {/* About G1 */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What is the G1 Test?</h2>
        <p className="mb-4">
          The G1 test is the first step in Ontario's graduated licensing system. It covers road rules, traffic signs, and safe driving practices. The test is multiple-choice and administered by DriveTest centres across Ontario.
        </p>
        <p>
          Our app simulates real G1 questions, so you can practice with confidence before your test day.
        </p>
      </section>

      {/* Features */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Up-to-date Questions", desc: "Practice with realistic, updated questions based on the official MTO handbook." },
            { title: "Road Signs + Rules", desc: "Covers all categories including road signs, safe driving, and Ontario-specific laws." },
            { title: "Mobile Friendly", desc: "Designed to work on all devices — study anytime, anywhere." }
          ].map((f, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-10 text-center">
        <p className="text-lg">Found this helpful?</p>
        <BuyMeCoffee />
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-white text-sm">
        © {new Date().getFullYear()} Binod Sapkota · G1 Practice App · All rights reserved
      </footer>
    </div>
  );
};

export default LandingPage;
