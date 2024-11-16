export async function GET() {
    const res = await fetch("/json/estados-cidades.json");
    const data = await res.json();
    return data;
}
