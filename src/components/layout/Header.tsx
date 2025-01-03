import React, { useState } from 'react';
import { Save, Eye, Upload, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { DeployModal } from '../deploy/DeployModal';
import { useWebsiteStore } from '../../store/websiteStore';
import { generateHTML } from '../../services/deploy';

export const Header: React.FC = () => {
  const [showDeployModal, setShowDeployModal] = useState(false);
  const { website, setDeployStatus, setDeployUrl } = useWebsiteStore();

  const handleDeploy = async () => {
    setShowDeployModal(true);
    setDeployStatus('deploying');

    try {
      const html = await generateHTML(website);
      
      // Create a temporary index.html file for deployment
      const deployFiles = {
        'index.html': html
      };

      // Deploy to Netlify
      const response = await fetch('/.netlify/functions/deploy', {
        method: 'POST',
        body: JSON.stringify(deployFiles),
      });

      if (!response.ok) throw new Error('Deployment failed');

      const { url } = await response.json();
      setDeployUrl(url);
      setDeployStatus('success');
    } catch (error) {
      console.error('Deployment error:', error);
      setDeployStatus('error');
    }
  };

  return (
    <header className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-900">Website Builder</h1>
        <div className="h-6 w-px bg-gray-200" />
        <input
          type="text"
          value={website.title}
          onChange={(e) => useWebsiteStore.getState().updateWebsiteTitle(e.target.value)}
          className="text-sm text-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
          placeholder="Untitled Project"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Button icon={Eye} variant="secondary">
          Preview
        </Button>
        <Button
          icon={Globe}
          variant="primary"
          onClick={handleDeploy}
        >
          Deploy
        </Button>
      </div>

      {showDeployModal && (
        <DeployModal onClose={() => setShowDeployModal(false)} />
      )}
    </header>
  );
};