import ReactSwitch from 'react-switch';

function PasswordGenerator() {
  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length</label>
            <input className="w-12 bg-purple-700 pl-2" type="number" />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Uppercase:</label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers:</label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters:</label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>

          <button className="bg-gradient-to-r from green-400 to-blue-500 hover:from-pink-500 hover:t0-yellow-500 p-2 text-white font-bold rounded-md">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
