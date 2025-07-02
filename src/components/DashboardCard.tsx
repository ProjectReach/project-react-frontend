interface DashboardCardProps {
  title: string;
  value: string | number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-3xl text-green-600 font-bold">{value}</p>
  </div>
);
