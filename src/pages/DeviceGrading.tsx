
import DeviceGradingImage from '../assets/DeviceGrading.png';
import GradeAImage from '../assets/GradeA.png';
import GradeBImage from '../assets/GradeB.png';
import GradeCImage from '../assets/GradeC.png';

const DeviceGrading = () => {
  return (
    <section className="bg-background text-primary px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Phone & Device Grading System</h1>
        <p className="text-center mb-12">
          Understand how we grade! We recognize that inconsistent grading can impact your business.
          When you purchase from Al Shami Electronics, you know exactly what you're getting. We adhere to strict
          criteria to grade our devices properly. Please review each grade to better understand our standards.
        </p>

        <div className="mb-12">
          <img src={DeviceGradingImage} alt="Device Grading Overview" className="w-3/4 mx-auto rounded-lg shadow-lg" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Grade A */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img src={GradeAImage} alt="Grade A" className="w-3/4 mx-auto mb-4 rounded-lg" />
            <h2 className="text-3xl font-bold text-dark mb-3">Grade A</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Good condition (8.5 to 9.5 / 10)</li>
              <li>Fully functional, no dents or dings</li>
              <li>Minor signs of use</li>
              <li>Clean IMEI, iCloud, MDM; ready to sell</li>
              <li>90-day warranty & Lifetime IMEI warranty</li>
              <li>Battery 80%+ for recent models</li>
            </ul>
          </div>

          {/* Grade B */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img src={GradeBImage} alt="Grade B" className="w-3/4 mx-auto mb-4 rounded-lg" />
            <h2 className="text-3xl font-bold text-dark mb-3">Grade B</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fair condition (7 to 7.5 / 10)</li>
              <li>Minor dents & signs of LCD use</li>
              <li>Clean IMEI, iCloud, MDM; ready to sell</li>
              <li>Fully functional, parts may be changed</li>
              <li>90-day warranty & Lifetime IMEI warranty</li>
              <li>Battery 80%+ for recent models</li>
            </ul>
          </div>

          {/* Grade C */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img src={GradeCImage} alt="Grade C" className="w-3/4 mx-auto mb-4 rounded-lg" />
            <h2 className="text-3xl font-bold text-dark mb-3">Grade C</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Heavy signs of use (5 / 10)</li>
              <li>May have deep scratches or bent frames</li>
              <li>Functional unless noted otherwise</li>
              <li>Clean IMEI, iCloud, MDM; ready to sell</li>
              <li>No battery warranty</li>
              <li>90-day warranty & Lifetime IMEI warranty</li>
            </ul>
          </div>

          {/* Other Grades */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold text-dark mb-3">Other Grades</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Brand New:</strong> Sealed/open box; perfect (10 / 10)</li>
              <li><strong>Refurbished:</strong> New aftermarket parts, looks new</li>
              <li><strong>Grade D:</strong> Powers on; may have cracked parts, variable condition</li>
            </ul>
          </div>
        </div>

        {/* Contact Section from homepage */}
        <div className="mt-20 bg-beige text-dark rounded-xl p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">We’re ready to assist you with all your electronic repair needs.</p>
              <p className="mb-2 text-lg font-medium">+1 (864) 354-7576</p>
              <p className="mb-6 text-lg font-medium">alshamifix@gmail.com</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white text-dark p-4 rounded-lg shadow">
                <h3 className="font-semibold">WORLDWIDE SHIPPING</h3>
                <p>Overnight shipping available</p>
              </div>
              <div className="bg-white text-dark p-4 rounded-lg shadow">
                <h3 className="font-semibold">SAFE PAYMENT</h3>
                <p>100% secure payment</p>
              </div>
              <div className="bg-white text-dark p-4 rounded-lg shadow">
                <h3 className="font-semibold">24/7 HELP CENTER</h3>
                <p>Dedicated 24/7 support</p>
              </div>
              <div className="bg-white text-dark p-4 rounded-lg shadow">
                <h3 className="font-semibold">FRIENDLY SERVICES</h3>
                <p>90 Days Warranty</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeviceGrading;
