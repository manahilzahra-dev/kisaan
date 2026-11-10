import Header from "@/components/layout/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] p-6">
        <h1 className="text-5xl font-bold text-green-700">Kisaan</h1>
        <p className="mt-4 text-xl text-gray-600 text-center">
          Fasal ki bimari pehchanein — sirf photo khinche
        </p>
        <a
          href="/upload"
          className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700"
        >
          Photo Upload Karein
        </a>
      </main>
    </div>
  );
}