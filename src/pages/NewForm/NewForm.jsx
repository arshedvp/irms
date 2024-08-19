import React from 'react';

const SecurityIncidentForm = () => {
  return (
    <div className="max-w-4xl mb-16 mx-auto p-6 bg-[#EEEBED] dark:bg-gray-800">
      {/* Header */}
      <div className="bg-[#EEEBED] dark:bg-gray-700 mb-6">
        <h1 className="text-2xl font-bold text-center dark:text-white">SECURITY INCIDENT REPORT</h1>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="font-bold dark:text-white">Submitted by:</h2>
          <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" placeholder="(Security Name and ID No.)" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Submitted to:</h2>
          <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" placeholder="(Manager / In-charge)" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Department concern:</h2>
          <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" placeholder="(Actions to be taken)" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Reported To:</h2>
          <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" placeholder="(Copy Handed Over To)" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="font-bold dark:text-white">Reported Date:</h2>
          <input type="date" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Reported Time:</h2>
          <input type="time" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Incident Date Occurred:</h2>
          <input type="date" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
        </div>
        <div>
          <h2 className="font-bold dark:text-white">Incident Time Occurred:</h2>
          <input type="time" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold dark:text-white">Incident Location</h2>
        <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
      </div>

      <div className="mb-6">
        <h2 className="font-bold dark:text-white">Type of Incident</h2>
        <div className="flex flex-wrap gap-4">
          {['Theft', 'Fights', 'Accident', 'Safety', 'Environment', 'Damages on properties', 'Maintenance Required', 'Others (specify)'].map((type) => (
            <label key={type} className="flex items-center dark:text-white">
              <input type="checkbox" className="mr-2 dark:bg-gray-700" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-6">
        <h2 className="font-bold dark:text-white">Security Incident Narrative</h2>
        <textarea className="w-full h-36 border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white"></textarea>
      </div>

      <div className="mb-6 border-t-2 border-gray-300 pt-6 dark:border-gray-600">
        <h2 className="font-bold text-lg mb-4 dark:text-white">Suspect Details</h2>
        <div className="mb-4">
          <label className="block dark:text-white">Name / ID / Contact Number:</label>
          <input type="text" className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
        </div>
        <div className="mb-4">
          <label className="block dark:text-white">Unknown person And/or No Name given:</label>
          <div className="flex flex-wrap gap-4">
            {['White skin', 'Dark skin', 'Asian', 'African', 'Others (specify)', 'Age', 'Height', 'Male - Female', 'Hair style-colour', 'Body Description', 'Eyes', 'with Glasses - without Glasses', 'Other Details (specify)'].map((item) => (
              <label key={item} className="flex items-center dark:text-white">
                <input type="checkbox" className="mr-2 dark:bg-gray-700" />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block dark:text-white">Other Suspects involved and/or Witness (To mention Names, ID Numbers & Contacts):</label>
          <textarea className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white h-24" placeholder="*In-case if no information given to follow Unknown person details as mentioned above."></textarea>
        </div>
      </div>

      <div className="mb-6 border-t-2 border-gray-300 pt-6 dark:border-gray-600">
        <h2 className="font-bold text-lg mb-4 dark:text-white">Facts of the Incident</h2>
        <textarea className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white h-36"></textarea>
      </div>

      <div className="mb-6 border-t-2 border-gray-300 pt-6 dark:border-gray-600">
        <h2 className="font-bold text-lg mb-4 dark:text-white">Actions taken (By Security)</h2>
        <textarea className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white h-36"></textarea>
      </div>

      <div className="mb-6 border-t-2 border-gray-300 pt-6 dark:border-gray-600">
        <h2 className="font-bold text-lg mb-4 dark:text-white">Document/s Supported</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block mb-2 dark:text-white">Photo taken (Y/N):</label>
            <select className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
              <option value="">Select</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 dark:text-white">Security Incident Narrative (Y/N):</label>
            <select className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
              <option value="">Select</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 dark:text-white">Copy & Photo of ID (If Required):</label>
            <select className="w-full border p-3 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
              <option value="">Select</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-10 border-t-2 border-gray-300 pt-6 dark:border-gray-600">
        <h2 className="font-bold text-lg mb-4 dark:text-white">Security Incident Photo/s</h2>
        <div className="border p-6 dark:border-gray-600 dark:bg-gray-900">
          <ul className="list-none space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <li key={num} className="flex items-center dark:text-white">
                <span className="text-red-500 mr-3">•</span>
                <span className="mr-3">Incident Photo. {num} (To be attached here)</span>
                <input type="file" className="border p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" accept="image/*" />
              </li>
            ))}
            <li className="flex items-center dark:text-white">
              <span className="text-red-500 mr-3">•</span>
              <span className="mr-3">ID Photo/s (To be attach here if it is required)</span>
              <input type="file" className="border p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" accept="image/*" multiple />
            </li>
          </ul>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mb-16">
        <button type="button" className="text-white bg-gradient-to-r from-[#47594B] via-[#67816c] to-[#3e6045] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Submit
        </button>
      </div>


      {/* Footer */}
      <div className="text-right text-sm text-gray-400 dark:text-gray-500 mt-4">
        Ver.2024
      </div>
    </div>
  );
};

export default SecurityIncidentForm;
