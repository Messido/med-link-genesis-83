
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  userType: 'doctor' | 'patient';
}

const LoginForm: React.FC<LoginFormProps> = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${userType} login:`, { email, password });
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <Label htmlFor="email" className="text-medical-700 font-semibold text-lg">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-medical-500 w-6 h-6" />
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-12 border-medical-200 focus:border-medical-500 focus:ring-medical-500 h-14 text-lg"
            placeholder={`Enter your ${userType} email`}
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="password" className="text-medical-700 font-semibold text-lg">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-medical-500 w-6 h-6" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-12 pr-12 border-medical-200 focus:border-medical-500 focus:ring-medical-500 h-14 text-lg"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-medical-500 hover:text-medical-600"
          >
            {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" className="text-medical-500 focus:ring-medical-500 w-4 h-4" />
          <span className="text-base text-medical-600">Remember me</span>
        </label>
        <a href="#" className="text-base text-medical-500 hover:text-medical-600 transition-colors font-medium">
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full bg-medical-gradient-dark hover:bg-medical-600 text-white h-14 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
      >
        Sign In as {userType === 'doctor' ? 'Doctor' : 'Patient'}
      </Button>

      <div className="text-center pt-6">
        <span className="text-lg text-medical-600">Don't have an account? </span>
        <a href="#" className="text-lg text-medical-500 hover:text-medical-600 font-semibold transition-colors">
          Sign up here
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
