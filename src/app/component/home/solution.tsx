import CardElement from "@/app/element/card";
import React from "react";

export default function Solution() {
  return (
    <section>
      <div className="py-10 grid grid-cols-2 grid-rows-2 grid-flow-col gap-4 ">
        <div className="col-start-1 row-start-1">
          <CardElement
            style={"bg-[#e4e5ff] py-5 px-5"}
            title={
              <div>
                <h3 className="text-xl font-semibold">Accelerated Learning:</h3>
              </div>
            }
            content={
              <div>
                <p className="text-sm text-ellipsis text-nowrap">
                  <span className="font-bold">Expert Knowledge: </span>
                  Learn faster from mentors experiences and avoid common
                  mistakes
                </p>
                <p className="text-sm text-ellipsis text-nowrap">
                  <span className="font-bold">Personalized Advice: </span>
                  Receive guidance tailored to your specific career goals and
                  needs.
                </p>
              </div>
            }
          />
        </div>
        <div className="col-start-1 row-start-2">
          <CardElement
            style={"bg-[#e9f5ff] py-5 px-5"}
            title={
              <div>
                <h3 className="text-xl font-semibold">
                  Networking and Opportunities:
                </h3>
              </div>
            }
            content={
              <div>
                <p className="text-sm text-ellipsis text-nowrap">
                  <span className="font-bold">Industry Connections: </span>
                  Gain access to mentors professional networks, and
                  opportunities
                </p>
                <p className="text-sm text-ellipsis text-warp">
                  <span className="font-bold">Enhanced Credibility: </span>
                  Boost your visibility and reputation by being with mentors
                </p>
              </div>
            }
          />
        </div>
        <div className="col-start-2 row-span-2">
          <CardElement
            style={"bg-[#ffddcf] py-5 px-5 h-full"}
            title={
              <div>
                <h3 className="text-xl font-semibold">
                  Enhanced Decision-Making and Problem-Solving:
                </h3>
              </div>
            }
            content={
              <div>
                <p className="text-sm text-ellipsis text-wrap">
                  <span className="font-bold">Strategic Insight: </span>
                  Mentors provide strategic insight and a broader perspective,
                  helping mentors make informed decisions about their career
                  path and personal development. This guidance helps individuals
                  avoid common pitfalls and make choices that align with their
                  long-term goals.
                </p>
                <p className="text-sm text-ellipsis text-warp mt-5">
                  <span className="font-bold">
                    Emotional Support and Confidence Building
                  </span>
                  Having a mentor to discuss challenges and setbacks with
                  provides emotional support and boosts confidence. This
                  encouragement and reassurance help individuals stay motivated,
                  resilient, and focused on their career aspirations, even in
                  the face of obstacles.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
