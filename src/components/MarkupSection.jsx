import React from 'react';

export default function MarkupSection({ html, className = '' }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
