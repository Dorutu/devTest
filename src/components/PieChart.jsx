import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },

];



export default function PieChartul() {



    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={100} height={100}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );

}