
import React, { useState } from 'react';
import LoginToggle from './LoginToggle';
import LoginForm from './LoginForm';
import { Stethoscope, Heart, Shield, Users } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'doctor' | 'patient'>('doctor');

  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Expert Care",
      description: "Connect with certified healthcare professionals"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Health",
      description: "Tailored treatment plans for your unique needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Join thousands of patients and healthcare providers"
    }
  ];

  return (
    <div className="min-h-screen bg-medical-gradient flex">
      {/* Left side - Features */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center">
        <div className="max-w-lg">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-medical-700 mb-4">
              Healthcare Connected
            </h1>
            <p className="text-xl text-medical-600 leading-relaxed">
              Bridging the gap between doctors and patients with cutting-edge technology 
              for better healthcare outcomes.
            </p>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-medical-500 shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-medical-700 mb-1">{feature.title}</h3>
                  <p className="text-medical-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-medical-gradient-dark rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-700 mb-2">
                Welcome Back
              </h2>
              <p className="text-medical-600">
                Sign in to access your {userType} dashboard
              </p>
            </div>

            <LoginToggle userType={userType} onToggle={setUserType} />
            
            <div className="animate-fade-in" key={userType}>
              <LoginForm userType={userType} />
            </div>
          </div>

          {/* Mobile features */}
          <div className="lg:hidden mt-8 text-center">
            <p className="text-medical-600 mb-4">Trusted by healthcare professionals worldwide</p>
            <div className="flex justify-center space-x-8 text-medical-500">
              <Heart className="w-6 h-6" />
              <Shield className="w-6 h-6" />
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
