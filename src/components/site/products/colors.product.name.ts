export function getColor(color: string): string[] {
    let select = [""];

    switch (color) {
        case "amarelo":
            select[0] = "text-amber-500";
            select[1] = "bg-amber-500";
            break;
        case "azul":
            select[0] = "text-sky-500";
            select[1] = "bg-sky-500";
            break;
        case "verde":
            select[0] = "text-green-500";
            select[1] = "bg-green-500";
            break;
        case "roxo":
            select[0] = "text-purple-500";
            select[1] = "bg-purple-500";
            break;
        case "branco":
            select[0] = "text-zinc-500";
            select[1] = "bg-zinc-500";
            break;
        case "rosa":
            select[0] = "text-red-500";
            select[1] = "bg-red-500";
            break;

        default:
            select[0] = "text-black";
            select[1] = "bg-white";
            break;
    }

    return select;
}
