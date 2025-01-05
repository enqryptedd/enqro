import { ChangelogEntry } from '../types/changelog';

export const changelog: ChangelogEntry[] = [
  {
    version: '2.4.0',
    date: '2024-03-15',
    changes: [
      { type: 'feature', description: 'Added new script library interface with improved search' },
      { type: 'security', description: 'Enhanced anti-detection system with behavioral analysis' },
      { type: 'performance', description: 'Optimized memory usage during script execution' }
    ]
  },
  {
    version: '2.3.2',
    date: '2024-03-01',
    changes: [
      { type: 'fix', description: 'Fixed rare crash when loading large scripts' },
      { type: 'improvement', description: 'Updated UI elements for better visibility' },
      { type: 'security', description: 'Patched potential memory leak vulnerability' }
    ]
  },
  {
    version: '2.3.1',
    date: '2024-02-15',
    changes: [
      { type: 'performance', description: 'Reduced startup time by 40%' },
      { type: 'fix', description: 'Resolved authentication issues on specific networks' }
    ]
  }
];