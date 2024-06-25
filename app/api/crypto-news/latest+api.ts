import { fetchLatestNews } from "@/lib/cryptopanic";

export async function GET() {
  try {
    const news = await fetchLatestNews()
    return Response.json(news);
  } catch (error) {
    console.error(error)
    return Response.json(
      { error: error },
      { status: 500 }
    );
  }
}