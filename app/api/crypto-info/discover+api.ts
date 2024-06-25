import { fetchCoinsByMarketCap } from "@/lib/coingecko";

export async function GET() {
  try {
    const result = await fetchCoinsByMarketCap()
    return Response.json(result);
  } catch (error) {
    console.error(error)
    return Response.json(
      { error: error },
      { status: 500 }
    );
  }
}