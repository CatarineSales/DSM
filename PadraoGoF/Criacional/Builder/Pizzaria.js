// ****************************************************************************
// FATEC Diadema - Luigi Papaiz
// Curso: Desenvolvimento de Sistema Multiplataformas - DSM
// Disciplina: Tecnica de Programação II
// Autor: Catarine Sales e Pedro Henrique        Data: 08/03/2024
// Descrição: Aplicação do padrão GoF - Criacional - Builder
// desenvolvido como exemplo na aula. 
// ---------------------------------------------------------------------------
// DESAFIO PROPOSTO: Desenvolver um programa com o uso do padrão de projeto GoF -
// Criacional - Builder, em relação a uma pizzaria no qual deve conter:
//       -Tamanho(Grande, Padrão e Pequeno);
//       -Massa (Tradicional, Integral e Fitness);
//       -Molho (Molho de Tomate, Molho Temperado e Molho Ervas);
//       -Proteinas (Calabresa, Frango, Presunto, Atum);
//       -Queijos (Mussarela, Catupiry, Cheddar);
//       -Complementos (Azeitona, Oregano, Tomate, Cebola, Bacon);
// 
// -Montar o objeto da pizza com builder;
// -Gerar um modelo default para "limpar" o pedido antes;
// -O suário pode personalizar e no final deve mostrar como ficou
// 
// ****************************************************************************

//DEFINIR PARTES DA PIZZA:

class Tamanho{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Massa{
    constructor(massa){
        this.massa = massa;
    }
}

class Molho{
    constructor(molho){
        this.molho = molho;
    }
}

class Proteinas{
    constructor(proteina){
        this.proteina = proteina;
    }
}

