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
import { useMemo } from "react";

interface LineChartProps {
	coins: Record<string, Coin[]>;
}
export function MultiplyLineChart({ coins }: LineChartProps) {
	const _coins = useMemo(() => {
		const values = Object.values(coins);
		const firstValue = values[0];
		const obj = Array.from({ length: firstValue.length });
		for (const key in firstValue) {
		}
	}, [coins]);
	return (
		<LineChartRecharts
			width={1500}
			height={500}
			// data={_coins}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="created_at_formatted" />
			<YAxis />
			<Tooltip />
			<Legend />
			{Object.entries(coins).map(([coinId, coinData]) => (
				<Line
					key={coinId}
					type="bumpX"
					dataKey="current_price"
					data={coinData}
					name={coinId}
					stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Cor aleatória para cada linha
				/>
			))}
		</LineChartRecharts>
	);
}
