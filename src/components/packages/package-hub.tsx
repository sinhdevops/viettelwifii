import Link from "next/link";

export type PackageHubEntry = {
  readonly path: string;
  readonly title: string;
};

type PackageHubProps = {
  packages: readonly PackageHubEntry[];
};

/** Server-rendered package links grouped by subscription route. */
export function PackageHub({ packages }: PackageHubProps) {
  const regularPackages = packages.filter(
    (entry) => !entry.path.includes("/tra-sau/"),
  );
  const postpaidPackages = packages.filter((entry) =>
    entry.path.includes("/tra-sau/"),
  );

  return (
    <nav aria-label="Danh sách gói cước" className="space-y-8">
      {regularPackages.length > 0 && (
        <PackageGroup title="Gói cước di động" entries={regularPackages} />
      )}
      {postpaidPackages.length > 0 && (
        <PackageGroup title="Gói cước trả sau" entries={postpaidPackages} />
      )}
    </nav>
  );
}

function PackageGroup({
  title,
  entries,
}: {
  title: string;
  entries: readonly PackageHubEntry[];
}) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <li key={entry.path}>
            <Link className="underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2" href={entry.path}>
              {entry.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
