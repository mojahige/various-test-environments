export function Hello({ value }: { value?: string }) {
  return <p>Hello {value ?? "World"}</p>;
}
