import React from 'react';

export function PrivacyNotice() {
  return (
    <p className="text-sm text-gray-600 text-center mt-6">
      By signing up you agree to the{' '}
      <a href="/privacy" className="text-gray-900 hover:underline">
        Privacy Policy
      </a>
      .
    </p>
  );
}