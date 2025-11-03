import { useEffect, useState } from 'react';

const JsonDisplay = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  useEffect(() => {
    fetch('/core_data.json')
      .then(res => res.json())
      .then(data => setJsonData(data))
      .catch(err => console.error('Error loading JSON:', err));
  }, []);

  if (!jsonData) {
    return <div className="text-foreground">Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl p-8 overflow-auto max-h-screen">
      <pre className="text-green-500 font-mono text-sm">
        {JSON.stringify(jsonData, null, 2)}
      </pre>
    </div>
  );
};

export default JsonDisplay;
