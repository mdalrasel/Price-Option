import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData =[
        { "id": 1, "name": "John", "math": 85, "physics": 78, "chemistry": 82 },
        { "id": 2, "name": "Alice", "math": 92, "physics": 88, "chemistry": 90 },
        { "id": 3, "name": "Michael", "math": 78, "physics": 72, "chemistry": 80 },
        { "id": 4, "name": "Emma", "math": 95, "physics": 90, "chemistry": 94 },
        { "id": 5, "name": "Daniel", "math": 70, "physics": 76, "chemistry": 85 },
        { "id": 6, "name": "Sophia", "math": 88, "physics": 70, "chemistry": 87 },
        { "id": 7, "name": "David", "math": 91, "physics": 85, "chemistry": 89 },
        { "id": 8, "name": "Olivia", "math": 97, "physics": 92, "chemistry": 96 },
        { "id": 9, "name": "James", "math": 89, "physics": 84, "chemistry": 88 },
        { "id": 10, "name": "Isabella", "math": 94, "physics": 90, "chemistry": 92 }
      ]
      

    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            <Line type="monotone" dataKey="math" stroke="blue" />
            <Line type="monotone" dataKey="physics" stroke="red" />
            <Line type="monotone" dataKey="chemistry" stroke="green" />
            </LChart>
        </div>
    );
};

export default LineChart;