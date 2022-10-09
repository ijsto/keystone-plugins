import React from 'react';

interface ApiOptionProps {
  children: string;
  optional?: boolean;
  usage?: string;
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'function'
    | 'node'
    | 'element'
    | 'symbol'
    | 'any';
}

export const ApiOption = ({
  children,
  optional,
  type = 'string',
  usage,
}: ApiOptionProps) => {
  const infoItems = [];

  if (!optional) {
    infoItems.push('required');
  }

  if (optional) {
    infoItems.push('optional');
  }

  if (type) {
    infoItems.push(type);
  }

  if (usage) {
    infoItems.push({ href: usage, value: 'href' });
  }

  return (
    <span
      style={{
        alignItems: 'baseline',
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        margin: '0',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <code>{children}</code>

      {infoItems && (
        <span
          style={{
            alignItems: 'end',
            display: 'inline-flex',
            gap: '6px',
          }}
        >
          {infoItems.map((item, index) => {
            if (item?.value === 'href') {
              return (
                <a
                  key={`i-i-${index}`}
                  href={item.href}
                  style={{
                    color: '#9538cb',
                    fontSize: '0.4em',
                    fontWeight: 600,
                    marginLeft: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  usage
                </a>
              );
            }
            return (
              <span
                key={`i-i-${index}`}
                style={{
                  color: item === 'required' ? 'red' : '#9d87a2',
                  fontSize: '0.5em',
                  fontWeight: 500,
                  marginLeft: '4px',
                }}
              >
                {item}
              </span>
            );
          })}
        </span>
      )}
    </span>
  );
};
