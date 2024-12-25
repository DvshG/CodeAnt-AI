import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { SignInButton } from '../components/auth/SignInButton';
import { DeploymentToggle } from '../components/auth/DeploymentToggle';
import { PrivacyNotice } from '../components/auth/PrivacyNotice';
import { SAAS_PROVIDERS, SELF_HOSTED_PROVIDERS, DeploymentType } from '../constants/auth';

export default function SignIn() {
  const [deploymentType, setDeploymentType] = useState<DeploymentType>('saas');
  const navigate = useNavigate();

  const handleSignIn = (provider: string) => {
    navigate('/dashboard');
  };

  const providers = deploymentType === 'saas' ? SAAS_PROVIDERS : SELF_HOSTED_PROVIDERS;

  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      <div className="hidden lg:flex lg:w-1/2 bg-[#FAFAFA] relative">
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-semibold">CodeAnt AI</span>
          </div>
        </div>
        <div className="absolute top-1/2 right-12 -translate-y-1/2">
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold">AI to Detect & Autofix Bad Code</h2>
              </div>

              <div className="h-px bg-gray-200 my-6" />

              <div className="grid grid-cols-3 gap-8 mb-20">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-gray-600">Language Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-sm text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg w-[300px] absolute -bottom-24 -right-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-blue-600 text-xl">📊</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-600">This week</div>
                  <div className="text-lg font-semibold">↑ 14%</div>
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
      
      <div className="flex-1 flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Logo className="h-12 w-12" />
                <span className="text-2xl font-semibold">CodeAnt AI</span>
              </div>
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
            </div>

            <DeploymentToggle selected={deploymentType} onSelect={setDeploymentType} />
            <div className="h-px bg-gray-200 -mx-8" />

            <div className="min-h-[216px] mt-6">
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