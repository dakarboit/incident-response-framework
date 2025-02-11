import React, { useState } from 'react';
import { Shield, AlertTriangle, Search, ShieldCheck, FileSearch, RefreshCw, CheckCircle2 } from 'lucide-react';

type Phase = 'identification' | 'containment' | 'resolution' | 'recovery' | 'post-incident';

interface IncidentDetail {
  phase: Phase;
  title: string;
  description: string;
  icon: React.ReactNode;
  actions: string[];
}

function App() {
  const [activePhase, setActivePhase] = useState<Phase>('identification');

  const phases: Record<Phase, IncidentDetail> = {
    identification: {
      phase: 'identification',
      title: 'Attack Identification',
      description: 'Collect and analyze forensic data to identify the type and scope of the attack.',
      icon: <Search className="w-6 h-6" />,
      actions: [
        'Collect system and network logs',
        'Analyze malware indicators',
        'Identify affected systems',
        'Determine attack vector'
      ]
    },
    containment: {
      phase: 'containment',
      title: 'Containment',
      description: 'Isolate affected systems and prevent further spread of the attack.',
      icon: <Shield className="w-6 h-6" />,
      actions: [
        'Isolate compromised systems',
        'Block malicious IPs',
        'Disable compromised accounts',
        'Enable enhanced monitoring'
      ]
    },
    resolution: {
      phase: 'resolution',
      title: 'Resolution',
      description: 'Remove threats and patch vulnerabilities to resolve the incident.',
      icon: <AlertTriangle className="w-6 h-6" />,
      actions: [
        'Remove malware',
        'Patch vulnerabilities',
        'Update security policies',
        'Reset compromised credentials'
      ]
    },
    recovery: {
      phase: 'recovery',
      title: 'Recovery',
      description: 'Restore systems and validate security measures.',
      icon: <RefreshCw className="w-6 h-6" />,
      actions: [
        'Restore from clean backups',
        'Verify system integrity',
        'Monitor for persistence',
        'Resume normal operations'
      ]
    },
    'post-incident': {
      phase: 'post-incident',
      title: 'Post-Incident Analysis',
      description: 'Document findings and implement preventive measures.',
      icon: <FileSearch className="w-6 h-6" />,
      actions: [
        'Conduct root cause analysis',
        'Update security controls',
        'Document lessons learned',
        'Enhance training programs'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
            <h1 className="text-2xl font-bold">Incident Response Framework</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-5 gap-4 mb-8">
          {Object.values(phases).map((phase) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhase(phase.phase)}
              className={`p-4 rounded-lg transition-all ${
                activePhase === phase.phase
                  ? 'bg-emerald-600 shadow-lg scale-105'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {phase.icon}
                <span className="text-sm font-medium">{phase.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            {phases[activePhase].icon}
            <div>
              <h2 className="text-xl font-bold">{phases[activePhase].title}</h2>
              <p className="text-gray-400">{phases[activePhase].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Required Actions</h3>
              <ul className="space-y-3">
                {phases[activePhase].actions.map((action, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Resources & Tools</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-600 rounded-lg">
                  <h4 className="font-medium mb-2">Detection & Analysis</h4>
                  <p className="text-sm text-gray-300">SIEM (Splunk, ELK Stack), Wireshark, OSQuery</p>
                </div>
                <div className="p-4 bg-gray-600 rounded-lg">
                  <h4 className="font-medium mb-2">Containment & Response</h4>
                  <p className="text-sm text-gray-300">EDR Solutions, Firewall & IDS/IPS, Backup Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;