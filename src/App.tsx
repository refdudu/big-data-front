import { useEffect, useState } from "react";
import { SingleLineChart } from "./components/SingleLineChart";
import type { Coin } from "./interfaces/Coin";
import { api } from "./utils/api";
import { MultiplyLineChart } from "./components/MultiplyLineChart";

function App() {
	const [coins, setCoins] = useState<Record<string, Coin[]>>({});
	useEffect(() => {
		async function getCoins() {
			try {
				const { data } = await api.get<{ items: Coin[]; total: number }>("");
				const { items } = data;
				const obj: Record<string, Coin[]> = {};
				for (const coin of items) {
					if (!obj[coin.coin_id]) obj[coin.coin_id] = [];
					obj[coin.coin_id].push(coin);
				}
				console.log("🚀 ~ getCoins ~ obj:", obj);
				setCoins(obj);
			} catch {
				/* empty */
			}
		}
		getCoins();
	}, []);
	return (
		<div>
			{/* {JSON.stringify(coins, null, 4)} */}
			{Object.entries(coins).map(([name, coins]) => (
				<SingleLineChart key={name} name={name} coins={coins} />
			))}
			<MultiplyLineChart coins={coins} />
		</div>
	);
}

export default App;
