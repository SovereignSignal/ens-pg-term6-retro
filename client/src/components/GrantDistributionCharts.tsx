import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Grant distribution by category data
const categoryData = [
  { name: 'Developer Tools', value: 200000, count: 15, color: '#8B5CF6' },
  { name: 'Infrastructure', value: 150000, count: 8, color: '#6366F1' },
  { name: 'Education', value: 50000, count: 12, color: '#3B82F6' },
  { name: 'Events', value: 25000, count: 8, color: '#0EA5E9' },
];

// Strategic vs Builder grants comparison
const fundingComparisonData = [
  {
    name: 'Strategic Grants',
    amount: 425000,
    projects: 6,
  },
  {
    name: 'Builder Grants (Small)',
    amount: 115500, // 57.75 ETH * ~$2000
    projects: 43,
  },
  {
    name: 'Builder Grants (Large)',
    amount: 10000,
    projects: 3,
  },
];

// Geographic distribution data
const geographicData = [
  { region: 'Global/Remote', projects: 18, funding: 475000 },
  { region: 'Africa', projects: 6, funding: 15000 },
  { region: 'Latin America', projects: 4, funding: 8000 },
  { region: 'Asia', projects: 3, funding: 6000 },
  { region: 'Europe', projects: 8, funding: 35000 },
  { region: 'North America', projects: 4, funding: 12000 },
];

const COLORS = ['#8B5CF6', '#6366F1', '#3B82F6', '#0EA5E9', '#06B6D4', '#14B8A6'];

// Custom tooltip for better UX
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover text-popover-foreground p-3 rounded-lg border shadow-lg">
        <p className="font-semibold">{payload[0].name}</p>
        {payload[0]?.payload.count && (
          <p className="text-sm text-muted-foreground">Projects: {payload[0]?.payload.count}</p>
        )}
        <p className="text-sm font-medium text-primary">
          ${payload[0]?.value?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.05) return null; // Don't show label for small slices

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-xs font-semibold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function GrantDistributionCharts() {
  return (
    <div className="space-y-8">
      {/* Funding by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Grant Distribution by Category</CardTitle>
          <CardDescription>Breakdown of funding across different project types</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={CustomPieLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry: any) => `${value} (${entry.payload.count} projects)`}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Strategic vs Builder Grants */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic vs Builder Grants</CardTitle>
          <CardDescription>Comparing funding amounts and project counts</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={fundingComparisonData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-popover text-popover-foreground p-3 rounded-lg border shadow-lg">
                        <p className="font-semibold">{payload[0]?.payload.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Projects: {payload[0]?.payload.projects}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          ${payload[0]?.value?.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Global Reach</CardTitle>
          <CardDescription>Projects and funding distributed across regions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={geographicData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                type="number" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                dataKey="region" 
                type="category" 
                width={120}
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-popover text-popover-foreground p-3 rounded-lg border shadow-lg">
                        <p className="font-semibold">{payload[0]?.payload.region}</p>
                        <p className="text-sm text-muted-foreground">
                          Projects: {payload[0]?.payload.projects}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          ${payload[0]?.value?.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="projects" fill="hsl(var(--chart-2))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The PGWG has actively supported initiatives across all continents, with a strong focus on global/remote projects that benefit the entire Ethereum ecosystem, while also investing in regional community building.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
