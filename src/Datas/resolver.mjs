import mysql from 'mysql2/promise';

export const createDbConnection = await mysql.createConnection({
    host: 'localhost',
    user: 'Matteo',
    password: '88yh3b7xF33UoN',
    database: 'bleach',
});

export const Query =
{
    characters: async () => {
        // Utilize the function to create a connection to the MySQL database

        const [results, fields] = await createDbConnection.execute(
            'SELECT * FROM personnage'
        );
        return results; // results contains rows returned by server

    },
        Perso: async (_, { idPerso }) => {
    // Utilize the function to create a connection to the MySQL database

            const [results, fields] = await createDbConnection.execute(
                'SELECT * FROM personnage WHERE idPerso = ?', [idPerso]
            );

            if (results.length > 0) {
                // Retournez le premier élément du tableau (qui est l'objet Categorie)
                return results[0];
            } else {
                // S'il n'y a pas de résultat, vous pouvez retourner null ou undefined, ou gérer d'une autre manière selon vos besoins
                return null;
            }

},
    Categories: async () => {
        // Utilize the function to create a connection to the MySQL database
        const [results, fields] = await createDbConnection.execute(
            'SELECT * FROM categorie'
        );
        return results; // results contains rows returned by server

    },

    getcategbyid: async (_, { idCateg }) => {
        // Utilize the function to create a connection to the MySQL database
        const [results, fields] = await createDbConnection.execute(
            'SELECT * FROM categorie WHERE idCateg = ?', [idCateg]
        );
        if (results.length > 0) {
            // Retournez le premier élément du tableau (qui est l'objet Categorie)
            return results[0];
        } else {
            // S'il n'y a pas de résultat, vous pouvez retourner null ou undefined, ou gérer d'une autre manière selon vos besoins
            return null;
        }
    },
};