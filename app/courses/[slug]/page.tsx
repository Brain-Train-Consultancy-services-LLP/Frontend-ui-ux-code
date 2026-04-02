import { courses } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function CourseDetail({ params }: Props) {
  const course = courses.find(
    (c) => c.slug === params.slug
  );

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          
          <div>
            <h1 className="text-4xl font-bold">
              {course.title}
            </h1>

            <p className="text-gray-600 mt-4">
              {course.description}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <span className="font-bold text-3xl">
                ₹{course.price}
              </span>
              <span className="line-through text-gray-400">
                ₹{course.originalPrice}
              </span>
            </div>

            <button className="mt-6 bg-indigo-700 text-white px-8 py-3 rounded-lg hover:bg-indigo-800 transition">
              Enroll Now
            </button>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Course Details
            </h3>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
            <p>Updated: {course.updated}</p>
            <p>Students: {course.students.toLocaleString()}</p>
          </div>

        </div>
      </div>
    </div>
  );
}