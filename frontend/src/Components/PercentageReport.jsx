// import React from 'react';

// const ReportPercentage = ({ percentage }) => {
//   const isDyslexic = percentage >= 50; // Assume a threshold of 50% for dyslexia

//   return (
//     <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">Dyslexia Report</h2>
//       <div className="flex items-center justify-center">
//         <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl font-bold mr-4">
//           {percentage}%
//         </div>
//         <div>
//           <p className="text-xl font-semibold">
//             {isDyslexic ? 'Likely Dyslexic' : 'Not Dyslexic'}
//           </p>
//           <p className="text-gray-600">
//             {isDyslexic
//               ? 'Further evaluation and support may be needed.'
//               : 'No indications of dyslexia at this time.'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportPercentage;

import React from 'react';
import { Bar } from 'react-chartjs-2';

const ReportPercentage = ({ percentage, title }) => {
  const isDyslexic = percentage >= 50; // Assume a threshold of 50% for dyslexia

  const data = {
    labels: ['Dyslexia'],
    datasets: [
      {
        label: 'Percentage',
        data: [percentage],
        backgroundColor: isDyslexic ? '#F87171' : '#34D399',
        borderColor: isDyslexic ? '#F87171' : '#34D399',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className='h-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='mb-6 w-full'>
        <Bar data={data} options={options} />
      </div>
      <h2 className='text-2xl font-bold mb-2 text-center'>
        {isDyslexic ? 'Likely Dyslexic' : 'Not Dyslexic'}
      </h2>
      <p className='text-gray-600 text-center'>
        {isDyslexic
          ? 'Further evaluation and support may be needed.'
          : 'No indications of dyslexia at this time.'}
      </p>
    </div>
  );
};

export default ReportPercentage;
