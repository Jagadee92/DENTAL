import React from 'react';
import { legacyMarkup } from '../legacyMarkup';
import MarkupSection from './MarkupSection';
const keys = Object.keys(legacyMarkup).filter((key) => key.startsWith('extra_'));
export default function LegacyOverlays() { return <>{keys.map((key) => <MarkupSection key={key} html={legacyMarkup[key]} />)}</>; }
