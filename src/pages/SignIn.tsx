import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { SignInButton } from '../components/auth/SignInButton';
import { DeploymentToggle } from '../components/auth/DeploymentToggle';
import { PrivacyNotice } from '../components/auth/PrivacyNotice';
import { SAAS_PROVIDERS, SELF_HOSTED_PROVIDERS, DeploymentType } from '../constants/auth';
import { Vector } from '../components/Vector';
import { Ellipse } from '../components/Ellipse';
export default function SignIn() {
  const [deploymentType, setDeploymentType] = useState<DeploymentType>('saas');
  const navigate = useNavigate();

  const handleSignIn = (provider: string) => {
    navigate('/dashboard');
  };

  const providers = deploymentType === 'saas' ? SAAS_PROVIDERS : SELF_HOSTED_PROVIDERS;

  return (
    <div className="min-h-screen flex bg-[#ca4e4e]">
      <div className="hidden lg:flex lg:w-1/2 bg-[#FFFFFF] relative">
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
          </div>
        </div>
        <div className="absolute top-1/3 right-12 -translate-y-1/2">
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md">
              <div className="flex items-center space-x-4 mb-6">
                <Logo className="h-8 w-8" />
                <h2 className="text-xl font-bold whitespace-nowrap">AI to Detect & Autofix Bad Code</h2>
              </div>

              <div className="h-px bg-gray-200 my-6" />

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">30+</div>
                  <div className="text-sm text-gray-600">Language Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100K+</div>
                  <div className="text-sm text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg w-[300px] absolute -bottom-32 -right-8">
            <div className="flex items-center justify-between mb-4">  
                <div className="relative">  
                  <Ellipse className="width: 56px;
                    height: 56.77px;
                    top: 15.21px;
                    left: 31.83px;
                    gap: 0px;
                    opacity: 0px;
                    " />  
                  <Vector className="absolute top-3.5 left-4 w-6 h-6" />  
                </div>  
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-600">↑ 14%</div>
                  <div className="text-sm text-gray-600">This week</div>
                </div> 
              </div>
              <div>
                <div className="text-sm text-gray-600">Issues Fixed</div>
                <div className="text-3xl font-bold">500K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side remains unchanged */}
      <div className="flex-1 flex items-center justify-center p-4 bg-[#F5F5F5]">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Logo className="h-12 w-12" />
                <span className="text-2xl font-semibold">CodeAnt AI</span>
              </div>
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
            </div>

            <DeploymentToggle selected={deploymentType} onSelect={setDeploymentType} />
            <div className="h-px bg-gray-200 -mx-8" />

            <div className="h-[216px] mt-6">
              <div className="space-y-3">
                {providers.map((provider) => (
                  <SignInButton
                    key={provider.id}
                    icon={provider.icon}
                    provider={provider.name}
                    onClick={() => handleSignIn(provider.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <PrivacyNotice />
        </div>
      </div>
    </div>
  );
}
