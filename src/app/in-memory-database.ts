import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            {
                id: 1,
                name: "Moradia",
                description: "Pagamentos de contas da casa"
            },
            {
                id: 2,
                name: "Saúde",
                description: "Plano de saúde e medicamentos"
            },
            {
                id: 3,
                name: "Lazer",
                description: "Cinema, parques, praia, etc"
            },
            {
                id: 4,
                name: "Salário",
                description: "Rendimento fixo do mês"
            },
            {
                id: 5,
                name: "Freelas",
                description: "Rendimento variável do mês"
            }
        ];

        return { categories };
    }
}