import React from 'react';
import { X, Loader2, ExternalLink } from 'lucide-react';
import { useWebsiteStore } from '../../store/websiteStore';
import { Button } from '../ui/Button';

interface Props {
  onClose: () => void;
}

export const DeployModal: React.FC<Props> = ({ onClose }) => {
  const { deployStatus, deployUrl } = useWebsiteStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Deploy Website</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {deployStatus === 'deploying' && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="ml-3 text-gray-600">Deploying your website...</p>
            </div>
          )}

          {deployStatus === 'success' && deployUrl && (
            <div className="space-y-4">
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                <p className="font-medium">Your website is live!</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600 truncate">{deployUrl}</span>
                <a
                  href={deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <Button variant="primary" className="w-full" onClick={onClose}>
                Close
              </Button>
            </div>
          )}

          {deployStatus === 'error' && (
            <div className="space-y-4">
              <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                <p className="font-medium">Deployment failed</p>
                <p className="text-sm mt-1">Please try again later.</p>
              </div>
              <Button variant="primary" className="w-full" onClick={onClose}>
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};