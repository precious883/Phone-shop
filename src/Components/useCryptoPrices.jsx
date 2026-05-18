import { useEffect, useState } from "react";

export default function useCryptoPrices() {
  const [prices, setPrices] = useState(null);

  async function fetchPrices() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,solana,binancecoin,ripple,cardano,dogecoin,tron,polkadot,litecoin,chainlink&vs_currencies=usd&include_24hr_change=true"
      );

      const data = await res.json();

      setPrices([
        { symbol: "BTC", name: "Bitcoin", price: data.bitcoin.usd, change24h: data.bitcoin.usd_24h_change, icon: "₿" },
        { symbol: "ETH", name: "Ethereum", price: data.ethereum.usd, change24h: data.ethereum.usd_24h_change, icon: "Ξ" },
        { symbol: "USDT", name: "Tether", price: data.tether.usd, change24h: data.tether.usd_24h_change, icon: "₮" },
        { symbol: "SOL", name: "Solana", price: data.solana.usd, change24h: data.solana.usd_24h_change, icon: "S" },
        { symbol: "BNB", name: "BNB", price: data.binancecoin.usd, change24h: data.binancecoin.usd_24h_change, icon: "◎" },
        { symbol: "XRP", name: "XRP", price: data.ripple.usd, change24h: data.ripple.usd_24h_change, icon: "✕" },
        { symbol: "ADA", name: "Cardano", price: data.cardano.usd, change24h: data.cardano.usd_24h_change, icon: "A" },
        { symbol: "DOGE", name: "Dogecoin", price: data.dogecoin.usd, change24h: data.dogecoin.usd_24h_change, icon: "Ð" },
        { symbol: "TRX", name: "Tron", price: data.tron.usd, change24h: data.tron.usd_24h_change, icon: "T" },
        { symbol: "DOT", name: "Polkadot", price: data.polkadot.usd, change24h: data.polkadot.usd_24h_change, icon: "●" },
        { symbol: "LTC", name: "Litecoin", price: data.litecoin.usd, change24h: data.litecoin.usd_24h_change, icon: "Ł" },
        { symbol: "LINK", name: "Chainlink", price: data.chainlink.usd, change24h: data.chainlink.usd_24h_change, icon: "🔗" },
      ]);
    } catch (err) {
      console.error("Failed to fetch crypto prices:", err);
    }
  }

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return prices;
}
