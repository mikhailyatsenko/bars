import React, { useMemo } from "react";

interface NeighborhoodFilterProps {
  neighborhoods: string[];
  value: string;
  onChange: (value: string) => void;
}

const NeighborhoodFilter: React.FC<NeighborhoodFilterProps> = ({ neighborhoods, value, onChange }) => {
  const uniqueNeighborhoods = useMemo(() => Array.from(new Set(neighborhoods)).filter(Boolean), [neighborhoods]);

  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">All neighborhoods</option>
      {uniqueNeighborhoods.map(n => (
        <option key={n} value={n}>{n}</option>
      ))}
    </select>
  );
};

export default NeighborhoodFilter; 