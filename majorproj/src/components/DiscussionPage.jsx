import React from 'react';
import { useParams } from 'react-router-dom';
import { questions } from './components/CodingQuestionsTable';

const DiscussionPage = () => {
  const { questionId } = useParams();
  const question = questions.find(q => q.sno === parseInt(questionId));

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{question.question}</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">Question Details</h2>
          <p>Company: {question.company}</p>
          <p>Link: <a href={question.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            {question.link}
          </a></p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">Answers</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">User A</h3>
              <p>
                This is a sample answer provided by User A. It explains the approach to solving the problem and provides code snippets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">User B</h3>
              <p>
                This is a sample answer provided by User B. It offers an alternative solution and discusses the trade-offs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;