
import React, { useState } from 'react';
import LoginToggle from './LoginToggle';
import LoginForm from './LoginForm';
import { Stethoscope, Heart, Shield, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'doctor' | 'patient'>('doctor');

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expert Care",
      description: "Connect with certified healthcare professionals"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Health",
      description: "Tailored treatment plans for your unique needs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join thousands of patients and healthcare providers"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side - Features with medical gradient background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-medical-500 to-medical-600 p-16 flex-col justify-center items-center relative">
        <div className="max-w-md text-white text-center">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Healthcare Connected
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Bridging the gap between doctors and patients with cutting-edge technology 
              for better healthcare outcomes.
            </p>
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-lg opacity-90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <Separator orientation="vertical" className="hidden lg:block w-1 bg-gradient-to-b from-medical-400 to-medical-600" />

      {/* Right side - Login Form with light background */}
      <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-medical-50 to-medical-100">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-16 animate-fade-in border border-medical-200">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-medical-gradient-dark rounded-full flex items-center justify-center mx-auto mb-6 animate-float shadow-lg">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-medical-700 mb-3">
                Welcome Back
              </h2>
              <p className="text-xl text-medical-600">
                Sign in to access your {userType} dashboard
              </p>
            </div>

            <LoginToggle userType={userType} onToggle={setUserType} />
            
            <div className="animate-fade-in mt-8" key={userType}>
              <LoginForm userType={userType} />
            </div>
          </div>

          {/* Mobile features */}
          <div className="lg:hidden mt-10 text-center">
            <p className="text-xl text-medical-600 mb-6">Trusted by healthcare professionals worldwide</p>
            <div className="flex justify-center space-x-10 text-medical-500">
              <Heart className="w-8 h-8" />
              <Shield className="w-8 h-8" />
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
