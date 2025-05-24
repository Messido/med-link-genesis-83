
import React from 'react';
import { User, Stethoscope } from 'lucide-react';

interface LoginToggleProps {
  userType: 'doctor' | 'patient';
  onToggle: (type: 'doctor' | 'patient') => void;
}

const LoginToggle: React.FC<LoginToggleProps> = ({ userType, onToggle }) => {
  return (
    <div className="flex bg-medical-100 rounded-full p-1 mb-8 relative">
      <div 
        className={`absolute top-1 bottom-1 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          userType === 'doctor' ? 'left-1 right-1/2' : 'left-1/2 right-1'
        }`}
      />
      
      <button
        onClick={() => onToggle('doctor')}
        className={`flex-1 flex items-center justify-center py-3 px-6 rounded-full transition-all duration-300 relative z-10 ${
          userType === 'doctor' 
            ? 'text-medical-700 font-semibold' 
            : 'text-medical-600 hover:text-medical-700'
        }`}
      >
        <Stethoscope className="w-5 h-5 mr-2" />
        Doctor Login
      </button>
      
      <button
        onClick={() => onToggle('patient')}
        className={`flex-1 flex items-center justify-center py-3 px-6 rounded-full transition-all duration-300 relative z-10 ${
          userType === 'patient' 
            ? 'text-medical-700 font-semibold' 
            : 'text-medical-600 hover:text-medical-700'
        }`}
      >
        <User className="w-5 h-5 mr-2" />
        Patient Login
      </button>
    </div>
  );
};

export default LoginToggle;
