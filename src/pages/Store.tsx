import Products from "../data/products.json"

export function Store() {
    return (
        <>
            <h1>Store</h1>

            <div className="products">
                <div className="products__items">
                    {Products.map(item => {
                        return (
                            <div className="product__item" key={item.id}></div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}