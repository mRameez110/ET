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
        let copyProducts = [...products];
        let index = copyProducts.findIndex(p => p.id === id);
        copyProducts[index].price = copyProducts[index].price + 5000;
        setProducts(copyProducts);
        }