import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
const AboutSection = () => {
  return (
    <div className="w-full mx-auto p-4 border rounded-lg mt-5">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl mb-2">About</h2>
        <p className="text-sm">
          I have 16+ years of experience in the IT industry working as a backend
          developer and an architect in Java, Spring Boot, Kafka. I am currently
          associated with Intuit as Staff Software Engineer, I help in designing
          scalable systems and guide the development team in building robust
          solutions. I have interviewed...{" "}
          <a href="#" className="text-blue-500">
            read more
          </a>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <div className="border-r-2">
            <div className="mr-4">
              <h3 className="text-sm">Find Me Here</h3>
              <div className="mt-3 flex items-center border p-2 rounded-lg">
                <FaLocationDot />
                <span className="ml-2 text-sm">Karnataka, India</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              <IoLogoLinkedin className="text-3xl" />
            </Link>

            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              <FaDiscord className="text-3xl" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm">Languages That I Speak</h3>
          <div className="flex space-x-2 py-3">
            <Badge variant="outline">English</Badge>
            <Badge variant="outline">Hindi</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
