"use client";
import { BASE_URL } from "@/Utils/urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import image from "@/(main)/Assets/dashboard-user-image.jpeg";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Collabrations = () => {
  const history = useRouter();
  const [usersData, setUsersData] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/user/login");
    }
  }, []);

  const getUsers = () => {
    axios
      .get(`${BASE_URL}/collab/get-all`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    usersData && (
      <div className="bg-gray-100">
        <Toaster />
        <div className="bg-white border rounded-md pt-4 overflow-y-auto h-[82vh] shadow-md shadow-gray-200">
          <div className="text-black flex items-center justify-between px-4 border-b pb-2">
            <p className="font-bold">
              All Collaborations ({usersData?.length})
            </p>
            <div>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                className="w-full md:w-[13vw] rounded-sm text-darkGrey text-sm border px-2 py-2 outline-none"
              >
                <option className="py-1" value="Sort By">
                  Sort By
                </option>
                <option className="py-1" value="Ascending">
                  Ascending
                </option>
                <option className="py-1" value="Descending">
                  Descending
                </option>
              </select>
            </div>
          </div>
          <div className="px-2 pt-2">
            {usersData
              ?.sort((a, b) => {
                if (sort == "Descending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return 1;
                  }
                  if (fa > fb) {
                    return -1;
                  }
                  return 0;
                } else if (sort == "Ascending") {
                  let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                }
                return 0;
              })
              .map((e, i) => {
                return <Product data={e} key={i} getUsers={getUsers} />;
              })}
          </div>
        </div>
      </div>
    )
  );
};

// website;
// ("asdf");

const Product = ({ data, getUsers }) => {
  return (
    <div className="rounded-md grid grid-cols-4 items-center mb-3 cursor-pointer shadow-sm shadow-gray-200 p-2">
      <div className="flex items-center">
        <Image
          src={image}
          alt="Image"
          className="w-[5vw] rounded-full object-cover object-center"
        />
        <div className="py-1 ml-3">
          <p className="font-bold text-[16px]">
            {data?.contactPerson}
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-0 text-newBlue text-xs font-bold">
              {data?.email}
            </p>
            <p className="mt-0.5 text-newBlue text-xs font-bold">
              {data?.contact}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <p className="py-0 font-semibold text-center">
          <span className="text-newBlue">Company :-</span>{" "}
          {data?.website ? (
            <Link
              className={`font-bold underline mr-2`}
              href={data?.website}
              target="_blank"
            >
              {data?.name}
            </Link>
          ) : (
            <span className="mr-2">{data?.name}</span>
          )}
          ({data?.organisationType})
        </p>
        <p className="py-0 mt-0 font-semibold text-center">
          <span className="text-newBlue">Address :-</span> {data?.city}
        </p>
      </div>
      <div className="flex items-center flex-col">
        <p className="py-0 font-semibold text-center">
          <span className="text-newBlue">Mission :-</span> {data?.mission}
        </p>
        <p className="py-0 mt-0 font-semibold text-center">
          <span className="text-newBlue">Cause :-</span> {data?.cause}
        </p>
      </div>
      <div className="flex items-center flex-col">
        <p className="py-0 font-semibold">
          <span className="text-newBlue">Registered :-</span> {data?.registered}
        </p>
      </div>
    </div>
  );
};

export default Collabrations;
