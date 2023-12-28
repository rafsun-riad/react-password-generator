import ReactSwitch from 'react-switch';
import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);

  function generatePassword() {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()';

    let validChars = lowerCaseChars;

    if (includeUppercase) {
      validChars += upperCaseChars;
    }

    if (includeNumber) {
      validChars += numbers;
    }

    if (includeSpecialCharacter) {
      validChars += specialChars;
    }

    let generatePassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charCodeAt(randomIndex);
    }
    setPassword(generatePassword);
  }

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length</label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="w-12 bg-purple-700 pl-2"
              type="number"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Uppercase:</label>
            <ReactSwitch
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers:</label>
            <ReactSwitch
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters:</label>
            <ReactSwitch
              checked={includeSpecialCharacter}
              onChange={() =>
                setIncludeSpecialCharacter(!includeSpecialCharacter)
              }
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          <button
            onClick={() => generatePassword()}
            className="bg-gradient-to-r from green-400 to-blue-500 hover:from-pink-500 hover:t0-yellow-500 p-2 text-white font-bold rounded-md"
          >
            Generate Password
          </button>
          {password && (
            <p className="font-normal text-white mt-2 ">
              Generate Password: <span className="font-bold">{password}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
