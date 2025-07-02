interface DashboardCardProps {
  title: string;
  value: string | number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => (
  <div className="bg-white card-shadow rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
    <h2 className="text-lg font-semibold text-amber-700 mb-2">{title}</h2>
    <p className="text-4xl text-emerald-600 font-bold mb-1">{value}</p>
    <div className="w-12 h-1 bg-emerald-200 rounded mx-auto"></div>
  </div>
);