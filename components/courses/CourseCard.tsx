"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { courses } from "@/lib/data";

interface Props {
  course: typeof courses[number];
}

const CourseCard = ({ course }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/courses/${course.slug}`}>
        <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border">
          <div className="relative h-44">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg line-clamp-2">
              {course.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {course.instructor}
            </p>

            <div className="flex items-center gap-2 mt-2 text-sm">
              <span className="text-yellow-500 font-semibold">
                {course.rating}
              </span>
              <span className="text-gray-500">
                ({course.students.toLocaleString()})
              </span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="font-bold text-lg">
                ₹{course.price}
              </span>
              <span className="line-through text-gray-400 text-sm">
                ₹{course.originalPrice}
              </span>
            </div>

            <div className="flex gap-2 mt-3">
              {course.premium && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  Premium
                </span>
              )}
              {course.bestseller && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Bestseller
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Hover Preview */}
      {hovered && (
        <div className="absolute top-10 left-full ml-4 w-96 bg-white shadow-2xl border rounded-xl p-5 z-50 hidden lg:block">
          <h3 className="font-bold text-lg">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Updated {course.updated}
          </p>

          <p className="text-sm mt-3">
            {course.description}
          </p>

          <Link
            href={`/courses/${course.slug}`}
            className="block mt-4 bg-indigo-700 text-white text-center py-2 rounded-lg hover:bg-indigo-800 transition"
          >
            View Course
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseCard;