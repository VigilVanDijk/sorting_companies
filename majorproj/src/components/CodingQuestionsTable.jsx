import React, { useState } from 'react';

const questions = [
 {
   sno: 1,
   company: 'Company A',
   question: 'Implement merge sort in Python',
   link: 'https://example.com/merge-sort'
 },
 {
   sno: 2,
   company: 'Company A', 
   question: 'Explain the time complexity of binary search',
   link: 'https://example.com/binary-search'
 },
 {
   sno: 3,
   company: 'Company B',
   question: 'Write a function to reverse a linked list',
   link: 'https://example.com/reverse-linked-list'
 },
 {
   sno: 4,
   company: 'Company B',
   question: 'Describe the difference between stacks and queues',
   link: 'https://example.com/stacks-queues'
 },
 {
   sno: 5,
   company: 'Company C',
   question: 'Implement a depth-first search algorithm',
   link: 'https://example.com/depth-first-search'
 },
 {
   sno: 6,
   company: 'Company C',
   question: 'Explain the concept of Big O notation',
   link: 'https://example.com/big-o-notation'
 },
 {
   sno: 7,
   company: 'Company A',
   question: 'Optimize a Python script for better performance',
   link: 'https://example.com/optimize-python'
 },
 {
   sno: 8,
   company: 'Company B',
   question: 'Implement a breadth-first search algorithm',
   link: 'https://example.com/breadth-first-search'
 },
 {
   sno: 9,
   company: 'Company C',
   question: 'Write unit tests for a sorting algorithm',
   link: 'https://example.com/unit-tests-sorting'
 },
 {
   sno: 10,
   company: 'Company A',
   question: 'Design a REST API for a todo list application',
   link: 'https://example.com/todo-list-api'
 },
 {
   sno: 11,
   company: 'Company B',
   question: 'Implement the producer-consumer problem using threads',
   link: 'https://example.com/producer-consumer'
 },
 {
   sno: 12,
   company: 'Company C',
   question: 'Explain the differences between SQL and NoSQL databases',
   link: 'https://example.com/sql-nosql'
 }
];

const CodingQuestionsTable = () => {
 const [selectedCompany, setSelectedCompany] = useState('');

 const filteredQuestions = selectedCompany
   ? questions.filter(q => q.company === selectedCompany)
   : questions;

 return (
   <div className="flex flex-col items-center">
     <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
       <div className="flex justify-between items-center p-4 bg-gray-100">
         <div className="flex items-center space-x-2">
           <span>Filter by company:</span>
           <select
             value={selectedCompany}
             onChange={(e) => setSelectedCompany(e.target.value)}
             className="px-4 py-2 border rounded"
           >
             <option value="">All</option>
             {[...new Set(questions.map(q => q.company))].map(company => (
               <option key={company} value={company}>{company}</option>
             ))}
           </select>
         </div>
       </div>
       <table className="w-full border-collapse">
         <thead>
           <tr className="bg-gray-100">
             <th className="p-3 text-left font-medium">S.No.</th>
             <th className="p-3 text-left font-medium">Company</th>
             <th className="p-3 text-left font-medium">Question</th>
             <th className="p-3 text-center font-medium">Link</th>
           </tr>
         </thead>
         <tbody>
           {filteredQuestions.map((q) => (
             <tr key={q.sno} className="border-b border-gray-300 hover:bg-gray-50">
               <td className="p-3 text-left">{q.sno}</td>
               <td className="p-3 text-left">{q.company}</td>
               <td className="p-3 text-left">{q.question}</td>
               <td className="p-3 text-center">
                 <a
                   href={q.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                 >
                   View
                 </a>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 );
};

export default CodingQuestionsTable;