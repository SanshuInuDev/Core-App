import { fetchTrendingData } from "@/lib/coingecko";

export async function GET() {
  try {
    const result = await fetchTrendingData()
    return Response.json(result);
  } catch (error) {
    console.error(error)
    return Response.json(
      { error: error },
      { status: 500 }
    );
  }
}