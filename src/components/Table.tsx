import React from 'react';

interface ITable {
  renderTableRows: React.ReactNode;
  darkMode: boolean;
}

const Table: React.FC<ITable> = ({ renderTableRows, darkMode }) => {
  return (
    <table className="table-auto w-full">
      <thead className="text-center uppercase text-white bg-black">
        <tr>
          <th className="px-4 py-2">Flag</th>
          <th className="hidden md:table-cell px-4 py-2">Population</th>
          <th className="px-4 py-2">Region</th>
          <th className="hidden md:table-cell px-4 py-2">Capital</th>
          <th className="px-4 py-2">Country</th>
          <th className="hidden md:table-cell px-4 py-2">Currency</th>
        </tr>
      </thead>
      <tbody
        className={`${
          darkMode ? 'text-white' : 'text-gray-800'
        } divide-y divide-gray-300`}
      >
        {renderTableRows}
      </tbody>
    </table>
  );
};

export default Table;
