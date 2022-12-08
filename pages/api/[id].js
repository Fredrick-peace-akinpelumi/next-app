let products = [
    {name:"Bag", price:"$25000", quantity:"15 pieces", id:"1"},
    {name:"Shoes", price:"$15000", quantity:"20 pieces", id:"2"},
    {name:"Round neck", price:"$2400", quantity:"32 pieces", id:"3"},
    {name:"S`hort", price:"$200", quantity:"100 pieces", id:"4"},
    {name:"Eye glasses", price:"$2000", quantity:"150 pieces", id:"5"},
    {name:"Trousers", price:"$7000", quantity:"18 pieces", id:"6"},
    {name:"Wrist watch", price:"$8000", quantity:"10 pieces", id:"7"},
    {name:"T shirt", price:"$2000", quantity:"120 pieces", id:"8"},
    {name:"boxers", price:"$1000", quantity:"200 pieces", id:"9"},
    {name:"perfume", price:"$3000", quantity:"175 pieces", id:"10"},
]
export default function handler(req, res) {
    let singleProducts = products.find((product)=>req.query.id==product.id)
    res.send(singleProducts)
}