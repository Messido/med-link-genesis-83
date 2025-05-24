
import React from 'react';
import { User, Stethoscope } from 'lucide-react';

interface LoginToggleProps {
  userType: 'doctor' | 'patient';
  onToggle: (type: 'doctor' | 'patient') => void;
}

const LoginToggle: React.FC<LoginToggleProps> = ({ userType, onToggle }) => {
  return (
    <div className="flex bg-medical-100 rounded-full p-2 mb-10 relative">
      <div 
        className={`absolute top-2 bottom-2 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          userType === 'doctor' ? 'left-2 right-1/2' : 'left-1/2 right-2'
        }`}
      />
      
      <button
        onClick={() => onToggle('doctor')}
        className={`flex-1 flex items-center justify-center py-4 px-8 rounded-full transition-all duration-300 relative z-10 ${
          userType === 'doctor' 
            ? 'text-medical-700 font-bold' 
            : 'text-medical-600 hover:text-medical-700'
        }`}
      >
        <Stethoscope className="w-6 h-6 mr-3" />
        <span className="text-lg">Doctor Login</span>
      </button>
      
      <button
        onClick={() => onToggle('patient')}
        className={`flex-1 flex items-center justify-center py-4 px-8 rounded-full transition-all duration-300 relative z-10 ${
          userType === 'patient' 
            ? 'text-medical-700 font-bold' 
            : 'text-medical-600 hover:text-medical-700'
        }`}
      >
        <User className="w-6 h-6 mr-3" />
        <span className="text-lg">Patient Login</span>
      </button>
    </div>
  );
};

export default LoginToggle;
