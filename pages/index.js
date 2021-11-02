import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DPW Gemasaba Jawa Barat</title>
      </Head>
      <div className="w-full min-h-screen">
        {/* Header */}
        <div className="flex shadow-xl">
          <div className="container px-4 xl:px-24 mx-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center justify-center lg:w-3/12">
                <span className="text-base font-bold text-emerald-900">
                  DPW Gemasaba Jabar
                </span>
              </div>
              <div className="flex items-center justify-center w-6/12 hidden lg:inline-flex">
                <ul className="flex text-sm font-normal space-x-4 text-blueGray-700">
                  <li className="">Home</li>
                  <li className="">About Us</li>
                  <li className="">Program Kerja</li>
                  <li className="">Visi Misi</li>
                  <li className="">Jurnal</li>
                </ul>
              </div>
              <div className="flex items-center justify-end w-3/12 hidden lg:inline-flex">
                <span className="mr-4 text-sm font-normal text-blueGray-700">
                  Login
                </span>
                <span className="px-6 py-2 text-sm font-semibold bg-emerald-900 text-blueGray-100 rounded-md">
                  Register
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /Header */}

        {/* Hero */}
        <div className="container px-4 xl:px-24 mx-auto my-10 md:my-10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-x-5 md:space-y-0">
            <div className="w-full md:w-8/12">
              <div className="w-full h-[350px] relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
                  alt="Image Hero"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <div className="text-sm text-blueGray-500">
                Sabtu, 23 Oktober 2021
              </div>
              <p className="my-4 text-md md:text-lg font-bold leading-relaxed text-blueGray-800">
                PKB didirikan oleh ulama atas dasar semangat voluntarisme dan
                kekuatan solidaritas bukan karena kelebihan dana dan anggaran
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 overflow-hidden border-2 rounded-full border-sky-500">
                  <img
                    src="https://images.unsplash.com/photo-1591088520983-5afbf1efdde2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Avatar"
                    className="absolute object-cover object-center w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start space-y-0.5">
                  <span className="text-sm font-semibold text-blueGray-800">
                    Edi Koswara
                  </span>
                  <span className="text-xs font-light text-blueGray-700">
                    Admin | Editor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Hero*/}

        {/* Story */}
        <div className="container px-4 xl:px-24 mx-auto my-4 md:my-10">
          <div className="flex items-center justify-between mb-4 -px-4 lg:px-0 md:mb-8">
            <div className="text-base font-semibold text-blueGray-800">
              News Update
            </div>
            <div className="text-sm text-blueGray-500">More</div>
          </div>
          <div>
            <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:-mx-4">
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:rounded-2xl p-4">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="newsupdate"
                    className="absolute inset-0 object-center w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-6 py-1 text-sm rounded bg-sky-800 text-blueGray-100">
                      Politik
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold leading-relaxed text-blueGray-800">
                    Koalisi Pilpres 2024, PKB Tawarkan Poros Harapan Baru
                  </p>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="relative w-8 h-8 mr-2 overflow-hidden border-2 rounded-full border-sky-500">
                    <img
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                      className="absolute inset-0 object-center w-full h-full"
                    />
                  </div>
                  <div className="text-sm text-blueGray-700">
                    Edi Koswara | Admin{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Story */}
      </div>
    </>
  );
}
