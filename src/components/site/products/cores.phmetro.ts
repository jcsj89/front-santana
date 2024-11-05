const cores = [
    {
        ph: 0,
        fundo: "bg-gradient-to-b from-red-500 via-red-600 to-red-700",
        texto: "text-red-600",
    },
    {
        ph: 1,
        fundo: "bg-gradient-to-b from-orange-500 via-orange-600 to-orange-500",
        texto: "text-orange-600",
    },
    {
        ph: 2,
        fundo: "bg-gradient-to-b from-amber-500 via-amber-600 to-amber-500",
        texto: "text-amber-600",
    },
    {
        ph: 3,
        fundo: "bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-500",
        texto: "text-yellow-600",
    },
    {
        ph: 4,
        fundo: "bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-300",
        texto: "text-yellow-400",
    },
    {
        ph: 5,
        fundo: "bg-gradient-to-b from-green-300 via-green-400 to-green-300",
        texto: "text-green-400",
    },
    {
        ph: 6,
        fundo: "bg-gradient-to-b from-green-400 via-green-500 to-green-400",
        texto: "text-green-500",
    },
    {
        ph: 7,
        fundo: "bg-gradient-to-b from-green-600 via-green-700 to-green-600",
        texto: "text-green-700",
    },
    {
        ph: 8,
        fundo: "bg-gradient-to-b from-green-700 via-green-800 to-green-700",
        texto: "text-green-800",
    },
    {
        ph: 9,
        fundo: "bg-gradient-to-b from-sky-300 via-sky-400 to-sky-300",
        texto: "text-sky-400",
    },
    {
        ph: 10,
        fundo: "bg-gradient-to-b from-sky-500 via-sky-600 to-sky-500",
        texto: "text-sky-600",
    },
    {
        ph: 11,
        fundo: "bg-gradient-to-b from-blue-700 via-blue-800 to-blue-700",
        texto: "text-blue-800",
    },
    {
        ph: 12,
        fundo: "bg-gradient-to-b from-purple-500 via-purple-600 to-purple-500",
        texto: "text-purple-600",
    },
    {
        ph: 13,
        fundo: "bg-gradient-to-b from-purple-600 via-purple-700 to-purple-600",
        texto: "text-purple-700",
    },
    {
        ph: 14,
        fundo: "bg-gradient-to-b from-purple-700 via-purple-800 to-purple-700",
        texto: "text-purple-800",
    },
];

export function corFundo(ph: number) {
    return cores.find((cor) => cor.ph === ph)?.fundo;
}
export function corTexto(ph: number) {
    return cores.find((cor) => cor.ph === ph)?.texto;
}
