export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-gray-600 md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} AlxWeather</p>
        <div className="flex items-center gap-6">
          <a href="/features" className="hover:opacity-80">Features</a>
          <a href="/pricing" className="hover:opacity-80">Pricing</a>
          <a
            href="mailto:hello@example.com"
            className="hover:opacity-80"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
