import {createDbConnection} from "./resolver.mjs";

export const Categorie = {
    characters: async (parent) => {

        const [results, fields] = await createDbConnection.execute(
            'SELECT * FROM personnage WHERE idCateg = ?', [parent.idCateg]
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