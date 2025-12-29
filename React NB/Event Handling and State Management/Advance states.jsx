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
