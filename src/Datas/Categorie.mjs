import {createDbConnection} from "./resolver.mjs";

export const Categorie = {
    characters: async (parent) => {
        const db = createDbConnection();
        try {
            // Retrieve a specific character by ID from the MySQL database
            const [rows] = await db.promise().query('SELECT * FROM personnage WHERE idCateg = ?', [parent.idCateg]);
            return rows ;
        } finally {
            // Make sure to close the connection after use
            db.end();
        }
    },

};