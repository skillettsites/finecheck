// Published, attributed appeal-body outcome figure for the operator and
// operator-situation heroes. Only POPLA publishes a figure we have verified
// (POPLA Annual Report 2024, year to 30 September 2024, checked 11 September
// 2026), so IAS operators render nothing rather than an invented number.
export default function AppealBodyStat({ appealBody }: { appealBody: "POPLA" | "IAS" }) {
  if (appealBody !== "POPLA") return null;
  return (
    <div className="rounded-xl border-2 border-green-200 bg-green-50 px-6 py-4 text-center max-w-xs">
      <p className="text-sm font-medium text-green-800">POPLA appeals cancelled</p>
      <p className="text-4xl font-bold text-green-700">40%</p>
      <p className="text-xs text-green-600 mt-1">
        of 92,098 completed appeals, year to 30 Sept 2024
      </p>
      <p className="text-xs text-green-700 mt-1">
        <a
          href="https://www.popla.co.uk/news/popla-publishes-annual-report-for-2024"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          POPLA Annual Report 2024
        </a>
      </p>
    </div>
  );
}
