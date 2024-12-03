import Category from "../types/Category";

function Categories() {
    let categories: Category[] = [
        {
            id: 1,
            nom: "Cat 1"
        },
        {
            id: 2,
            nom: "Cat 2"
        },
        {
            id: 3,
            nom: "Cat 3"
        },
        {
            id: 4,
            nom: "Cat 4"
        },
    ];

    return (
        <div className="w-1/6 p-2">
            <h2 className="text-lg mb-4">Catégories</h2>
            <div className="w-full text-right">
                {
                    categories.map(({id, nom}) => (
                        <div key={id} className="mb-2">{nom}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;