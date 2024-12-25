import React from 'react';
import { CodeAntLogo } from '../CodeAntLogo';

export function SignInHero() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gray-50 flex-col items-start justify-center p-12">
      <div className="max-w-lg">
        <div className="mb-8">
          <CodeAntLogo className="h-12 w-12" />
          <h2 className="text-2xl font-bold mt-4">AI to Detect & Autofix Bad Code</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
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

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="text-blue-600 text-xl">📊</div>
            </div>
            <div>
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
  );
}