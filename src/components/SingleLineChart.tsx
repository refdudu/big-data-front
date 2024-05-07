import {
	LineChart as LineChartRecharts,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
} from "recharts";
import type { Coin } from "../interfaces/Coin";

interface LineChartProps {
	coins: Coin[];
	name: string;
}
export function SingleLineChart({ coins, name }: LineChartProps) {
	// const average =
	// 	coins.reduce((acc, cur) => acc + cur.current_price, 0) / coins.length;
	const maxValue = Math.max(...coins.map((entry) => entry.current_price));
	return (
		<LineChartRecharts
			width={1500}
			height={500}
			data={coins}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="created_at_formatted" />
			<YAxis domain={[0, maxValue * 1.5]} />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				name={name}
				dataKey="current_price"
				stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
			/>
		</LineChartRecharts>
	);
}
