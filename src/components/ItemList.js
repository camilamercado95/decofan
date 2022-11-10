import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {items.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
                imagen={item.imagen}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
