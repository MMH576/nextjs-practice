import Counter from './counter'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-geist-sans">Counter App</h1>
          <p className="text-indigo-200/70 max-w-2xl mx-auto">A modern counter implementation showcasing client and server components</p>
        </div>
        <Counter title="Counter 1 (client component)" />
        <Counter title="Counter 2 (server component)" />
      </div>
    </main>
  );
}
