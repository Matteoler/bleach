import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'mysql2';
import typeDefs from './src/Datas/typeDefs.js';

const startServer = async () => {
    const app = express();

    // Fonction pour créer la connexion à la base de données
    const createDbConnection = () => {
        return createConnection({
            host: 'localhost',
            user: 'Matteo',
            password: '88yh3b7xF33UoN',
            database: 'bleach',
        });
    };

    const resolvers = {
        Query: {
            characters: async () => {
                // Utilisez la fonction pour créer la connexion à la base de données
                const db = createDbConnection();

                try {
                    // Récupérer les personnages depuis la base de données MySQL
                    const [rows] = await db.promise().query('SELECT * FROM personnage');
                    // Extrayez le tableau de résultats du premier élément du tableau
                    return rows || [];
                } finally {
                    // Assurez-vous de fermer la connexion après utilisation
                    db.end();
                }
            },
        },
    };

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    // Appliquer le middleware Apollo au chemin /graphql
    server.applyMiddleware({ app, path: '/graphql' });

    // Port sur lequel le serveur écoutera
    const PORT = 4000;

    // Démarrer le serveur express
    app.listen(PORT, () => {
        console.log(`Serveur GraphQL en cours d'exécution sur http://localhost:${PORT}/graphql`);
    });
};

startServer();
