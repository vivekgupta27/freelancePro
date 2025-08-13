import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { week: 'Week 1', proposals: 4 },
  { week: 'Week 2', proposals: 6 },
  { week: 'Week 3', proposals: 3 },
  { week: 'Week 4', proposals: 4 },
];

const ProposalGraph = () => {
  return (
    <div className="bg-[#1e1e1e] text-white p-5 rounded-xl border border-[#444] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-4">Proposals Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="week" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="proposals" stroke="#6ee7b7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProposalGraph;
