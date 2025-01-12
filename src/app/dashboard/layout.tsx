import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("dashboard-layout grid grid-cols-[250px_1fr] min-h-screen")}
    >
      {/* Sidebar */}
      <aside className="bg-secondary text-secondary-foreground p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-secondary-foreground rounded"
              >
                Dashboard Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard/profile"
                className="block px-4 py-2 hover:bg-secondary-foreground rounded"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="block px-4 py-2 hover:bg-secondary-foreground rounded"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Dashboard Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
