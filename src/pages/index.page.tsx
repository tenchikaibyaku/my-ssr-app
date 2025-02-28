function Page({ message }: { message?: string }) {
  return (
    <div>
      <h1>鴨川湯 - Kyoto Sento</h1>
      <p>{message ?? 'ようこそ！'}</p>
    </div>
  );
}

export { Page };
