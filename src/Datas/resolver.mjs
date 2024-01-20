import { createConnection } from 'mysql2';
export const createDbConnection = () => {
    return createConnection({
        host: 'localhost',
        user: 'Matteo',
        password: '88yh3b7xF33UoN',
        database: 'bleach',
    });
};
export const Query =
{
    characters: async () => {
        // Utilize the function to create a connection to the MySQL database
        const db = createDbConnection();

        try {
            // Retrieve characters from the MySQL database
            const [rows] = await db.promise().query('SELECT * FROM personnage');
            // Extract the array of results from the first element of the array
            return rows || [];
        } finally {
            // Make sure to close the connection after use
            db.end();
        }
    },
        Perso: async (_, { idPerso }) => {
    // Utilize the function to create a connection to the MySQL database
    const db = createDbConnection();

    try {
        // Retrieve a specific character by ID from the MySQL database
        const [row] = await db.promise().query('SELECT * FROM personnage WHERE idPerso = ?', [idPerso]);
        return row ;
    } finally {
        // Make sure to close the connection after use
        db.end();
    }


},
    Categories: async () => {
        // Utilize the function to create a connection to the MySQL database
        const db = createDbConnection();

        try {
            // Retrieve a specific character by ID from the MySQL database
            const [rows] = await db.promise().query('SELECT * FROM categorie');
            return rows ;
        } finally {
            // Make sure to close the connection after use
            db.end();
        }


    },

    getcategbyid: async (_, { idCateg }) => {
        // Utilize the function to create a connection to the MySQL database
        const db = createDbConnection();

        try {
            // Retrieve a specific character by ID from the MySQL database
            const [row] = await db.promise().query('SELECT * FROM categorie WHERE idCateg = ?', [idCateg]);
            return row ;
        } finally {
            // Make sure to close the connection after use
            db.end();
        }


    },
};