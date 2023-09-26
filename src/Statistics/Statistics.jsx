
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonation } from '../utility/localStorage';


const Statistics = () => {
    const collectedDonation = getStoredDonation().length
    const totalDonation = 12 - collectedDonation
    console.log(totalDonation)
    const data = [
        { name: 'Group A', value: collectedDonation },
        { name: 'Group B', value: totalDonation },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <div className='flex h-[500px] justify-center items-center mx-auto'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex gap-10 justify-center'>
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg'>Your donation</h3>
                    <div className='w-14 h-3 bg-green-500 rounded'></div>
                </div>
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg'>Total donation</h3>
                    <div className='w-14 h-3 bg-red-500 rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;