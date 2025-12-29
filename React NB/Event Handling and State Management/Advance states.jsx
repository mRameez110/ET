export default function AppAug20() {
    let [products, setProducts] = useState(
        [
            {
                id: 1,
                title: "Mobile Phone",
                price: 50000,
                avail: true
            },
            {
                id: 2,
                title: "LED TV",
                price: 60000,
                avail: false
            },
            {
                id: 3,
                title: "Laptop",
                price: 70000,
                avail: true
            }
        ]
    );

     const handleIncrement = (id) => {
        // let copyProducts = [...products];
        // let index = copyProducts.findIndex(p => p.id === id);
        // copyProducts[index].price = copyProducts[index].price + 5000;
        // setProducts(copyProducts);

         setProducts(products.map(
                p =>({
                    ...p,
                    price: p.id === id ? p.price + 5000: p.price
                })
            ));
        }

        return (
            <>
                        <h1>Inventroy System </h1>
                                    {
                products.map(p => {
                    return (
                        <div style={{color : p.avail ? "green" : "red"}} key={p.id}>
                        <h4> ID = {p.id}</h4>
                        <h4> Title = {p.title}</h4>
                        <h4> Price =  
                            <button>-</button>
                            Rs.{p.price}
                            <button onClick={() => handleIncrement(p.id)} disabled={!p.avail}>+</button>
                        </h4>



            </>
        )