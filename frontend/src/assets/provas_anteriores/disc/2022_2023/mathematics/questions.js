const questions = [
    {
        question_id: 1,
        discipline: "Matemática",
        statement: `
        Seja \\( S = \\left(1+\\operatorname{tg}(\\alpha)+\\sec(\\alpha)\\right)\\left(1+\\operatorname{cotg}(\\alpha)-\\operatorname{cossec}(\\alpha)\\right) \\).
        Mostre que o valor de \\( S \\) é um número inteiro para todo valor do ângulo \\( \\alpha \\) diferente de \\( \\frac{k\\pi}{2} \\), com \\( k \\in \\mathbb{Z} \\) e calcule esse valor.
        `
    },
]

// falta comportar imagens no statement, algo como ["texto", img1, "texto"] com import img1
export default questions;