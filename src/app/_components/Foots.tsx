"use client";

import {
  Film,
  Phone,
  Mail,
} from "lucide-react";

export const Foots = () => {
  return (
    <div className="px-5 sm:px-20 sm:py-10 flex-col sm:flex-row sm:justify-between py-10 w-full bg-indigo-700 text-white flex">
      <div className="flex flex-col gap-3 mb-7">
        <div className="flex text-white gap-2">
          <Film className="font-extralight" />
          <h1 className="text-base font-bold">Batflix</h1>
        </div>
        <div>
          <h1 className="text-[14px]">© 2026 Batflix. All Rights Reserved.</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="mb-3">Contact Information</h1>
          <div className="flex items-center mb-6">
            <Mail className="h-4 mr-3" />
            <div>
              <h1>Email:</h1>
              <p>support@batflix.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 mr-3" />
            <div>
              <h1>Phone:</h1>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-28 sm:w-1/2 gap-3">
          <h1 className="text-lg">Follow us~</h1>
          <div className="flex flex-wrap sm:flex-row gap-3">
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};
