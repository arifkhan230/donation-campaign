
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

    const COLORS = ['#00C49F', '#FF444A'];

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
            <div className='flex  h-[500px] justify-center items-center mx-auto'>
                <PieChart width={400} height={400}>
                    <Pie width={600} height={600}
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 justify-center'>
                <div className='flex justify-center items-center gap-4'>
                    <h3 className='text-lg'>Your donation</h3>
                    <div className='w-14 h-3 bg-[#00C49F] rounded'></div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <h3 className='text-lg'>Total donation</h3>
                    <div className='w-14 h-3 bg-[#FF444A] rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;