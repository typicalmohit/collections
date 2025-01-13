export default function SnippetsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Code Snippets Collection</h1>
      <div className="space-y-4">
        {/* Add your code snippets here */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Snippet 1</h2>
          <pre className="mt-2 p-2 bg-gray-100 rounded">
            {/* Add code snippet */}
          </pre>
        </div>
      </div>
    </div>
  );
}
