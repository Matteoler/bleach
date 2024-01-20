export const Categorie = {
    characters: async (parent, args, context) => {
        const { createDbConnection } = context;
        const db = createDbConnection();  // Create the database connection

        try {
            // Retrieve characters for a specific category from the MySQL database
            const [rows] = await db.promise().query('SELECT * FROM personnage WHERE idCateg = ?', [parent.idCateg]);
            return rows;
        } finally {
            // Make sure to close the connection after use
            if (db) {
                db.end();
            }
        }
    },
};
