import {createDbConnection} from "./resolver.mjs";

export const Character = {
    Categorie: async (parent) => {
        const db = createDbConnection();
        try {
            // Retrieve a specific character by ID from the MySQL database
            const [row] = await db.promise().query('SELECT * FROM categorie WHERE idCateg = ?', [parent.idCateg]);
            return row ;
        } finally {
            // Make sure to close the connection after use
            db.end();
        }
    },

};
