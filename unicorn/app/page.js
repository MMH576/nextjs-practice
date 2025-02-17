import Counter from './counter'

export default function Home() {
  return (
    <main>
      <Counter title="Counter 1 (client component)" />
      <Counter title="Counter 2 (server component)" />
    </main>
  );
}
