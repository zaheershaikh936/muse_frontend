"use client";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Hitesh Jha",
    content:
      "Gourav is very calm and keen to understand the mentee's goal at present so that he can offer a clear roadmap to achieve that goal effectively. It's always nice to have the clear picture of the truth at the very moment so that one can start working in the right direction.",
    time: "8 months ago",
  },
  {
    id: 2,
    name: "Haris patel",
    content:
      "Gourav is very calm and keen to understand the mentee's goal at present so that he can offer a clear roadmap to achieve that goal effectively. It's always nice to have the clear picture of the truth at the very moment so that one can start working in the right direction.",
    time: "8 months ago",
  },
  {
    id: 3,
    name: "Zaheer shaikh",
    content:
      "Gourav is very calm and keen to understand the mentee's goal at present so that he can offer a clear roadmap to achieve that goal effectively. It's always nice to have the clear picture of the truth at the very moment so that one can start working in the right direction.",
    time: "8 months ago",
  },
  // Add more reviews here
];

const MentorReviews = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full border rounded-lg mt-5 text-sm mx-auto p-4">
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold mb-2">Recent Review</h2>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center ">
            {reviews[0].name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-bold">{reviews[0].name}</p>
            <p className="text-gray-500">{reviews[0].time}</p>
          </div>
        </div>
        <p>{reviews[0].content}</p>
      </div>
      {showAll && (
        <div className="mt-4">
          {reviews.slice(1).map((review) => (
            <div key={review.id} className="border-b pb-4 mb-4">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-gray-500">{review.time}</p>
                </div>
              </div>
              <p className="text-sm [font-weight: 300]">{review.content}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-blue-500 mt-4"
      >
        {showAll ? "Show Less" : "View All Reviews"}
      </button>
    </div>
  );
};

export default MentorReviews;
