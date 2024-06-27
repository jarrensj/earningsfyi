import Link from "next/link";

export default function Footer () {
  return (
    <footer className="w-full p-4 bg-yellow-100 border-t-4 border-yellow-500 text-yellow-700 text-xs">
      <p><strong>Disclaimer:</strong> This is not financial advice. We are not responsible for the accuracy of this information. We are not responsible for anything. You are responsible for your own decisions and your losses. This is for entertainment purposes only.</p>
        <div className="mt-4">
        <p>
          say hi in the <Link href="https://discord.gg/omakase" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">discord</Link>,
          code by <Link href="https://kwaji.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">kwaji</Link>
        </p>
      </div>
    </footer>
  );
}