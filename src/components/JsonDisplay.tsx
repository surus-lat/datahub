interface JsonDisplayProps {
  data: any;
}

const JsonDisplay = ({ data }: JsonDisplayProps) => {

  const formatJson = (obj: any, indent = 0): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    const spacing = '  '.repeat(indent);
    
    if (Array.isArray(obj)) {
      elements.push(<span key={`bracket-${indent}-open`} style={{ color: '#f8f8f2' }}>[</span>);
      elements.push(<br key={`br-${indent}-after-open`} />);
      obj.forEach((item, index) => {
        elements.push(<span key={`space-${indent}-${index}`}>{spacing}  </span>);
        elements.push(...formatJson(item, indent + 1));
        if (index < obj.length - 1) {
          elements.push(<span key={`comma-${indent}-${index}`} style={{ color: '#f8f8f2' }}>,</span>);
        }
        elements.push(<br key={`br-${indent}-${index}`} />);
      });
      elements.push(<span key={`space-close-${indent}`}>{spacing}</span>);
      elements.push(<span key={`bracket-${indent}-close`} style={{ color: '#f8f8f2' }}>]</span>);
    } else if (typeof obj === 'object' && obj !== null) {
      elements.push(<span key={`brace-${indent}-open`} style={{ color: '#f8f8f2' }}>{'{'}</span>);
      elements.push(<br key={`br-${indent}-after-brace`} />);
      const entries = Object.entries(obj);
      entries.forEach(([key, value], index) => {
        elements.push(<span key={`space-${indent}-${key}`}>{spacing}  </span>);
        elements.push(<span key={`key-${indent}-${key}`} style={{ color: '#ff79c6' }}>"{key}"</span>);
        elements.push(<span key={`colon-${indent}-${key}`} style={{ color: '#f8f8f2' }}>: </span>);
        elements.push(...formatJson(value, indent + 1));
        if (index < entries.length - 1) {
          elements.push(<span key={`comma-${indent}-${key}`} style={{ color: '#f8f8f2' }}>,</span>);
        }
        elements.push(<br key={`br-${indent}-${key}`} />);
      });
      elements.push(<span key={`space-close-brace-${indent}`}>{spacing}</span>);
      elements.push(<span key={`brace-${indent}-close`} style={{ color: '#f8f8f2' }}>{'}'}</span>);
    } else if (typeof obj === 'string') {
      elements.push(<span key={`string-${indent}`} style={{ color: '#f1fa8c' }}>"{obj}"</span>);
    } else if (typeof obj === 'number') {
      elements.push(<span key={`number-${indent}`} style={{ color: '#bd93f9' }}>{obj}</span>);
    } else if (typeof obj === 'boolean') {
      elements.push(<span key={`boolean-${indent}`} style={{ color: '#bd93f9' }}>{obj.toString()}</span>);
    } else if (obj === null) {
      elements.push(<span key={`null-${indent}`} style={{ color: '#bd93f9' }}>null</span>);
    }
    
    return elements;
  };

  return (
    <div className="w-full max-w-4xl p-8 overflow-auto max-h-screen">
      <pre className="font-mono text-sm" style={{ color: '#f8f8f2' }}>
        {formatJson(data)}
      </pre>
    </div>
  );
};

export default JsonDisplay;
