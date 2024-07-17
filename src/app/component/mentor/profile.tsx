import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { RiUserFollowFill } from "react-icons/ri";

interface mentorT {
  bgGroundImage: string;
  role: string;
  name: string;
  title: string;
  description: string;
  skills: Array<{ name: string }>;
  company: Array<{ company: string; position: string; image: string }>;
  experience: string;
  id: string;
}
export default function MentorProfile(data: mentorT) {
  return (
    <section id="profile" className="w-full border rounded-lg">
      <div className="bg-slate-500 w-full h-52 rounded-lg">
        <Image
          src={data.bgGroundImage || ""}
          alt={"background_image"}
          width={1000}
          height={0}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="px-10 flex">
        <div>
          <Image
            src={
              "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252Fshishir%2520chandrarecSEsRhX3LroVGuM%3Falt%3Dmedia%26token%3D26570590-f4d9-45e0-a629-39f08abe2e42&w=384&q=75"
            }
            alt={"mentor_Zaheer_shaikh"}
            width={150}
            height={300}
            className="mt-[-70px] border-4 border-white rounded-lg"
          />
          <div className="py-3">
            {/* personal details */}
            <h3 className="text-xl text-start">{data.name}</h3>
            <h4 className="text-sm py-3">
              {data.role} at {data.company[0].company}
            </h4>

            {/* description */}
            <p className="text-sm">{data.description}</p>

            {/* profile */}
            <div className="flex py-4 flex-wrap items-start gap-2">
              <div className="flex gap-1 text-xs items-center">
                <FaStar color="e86a38" size={20} />
                <p className="mt-0.5">5.0 (7 Reviews)</p>
              </div>
              <div className="flex gap-1 text-xs items-center">
                <p className="mt-0.5">15 Sessions completed</p>
              </div>
              <div className="flex gap-1 text-xs items-center">
                <RiUserFollowFill color="f8c3b2" size={20} />
                <p className="mt-0.5">100 followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
