import { useEffect, useState, useCallback } from 'react';
import Input from '../atoms/Input/Input'; // Pastikan path import yang benar
import Header from './Header';
import { IoSearch } from 'react-icons/io5';
import CardStok from './CardStok';

interface ProductResponse {
  id: number;
  name: string;
  price: number;
  img: string;
}

const ProductList = () => {
  const [product, setProduct] = useState<ProductResponse[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  useEffect(() => {
    fetch('src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        let filteredProduct = data;

        if (search) {
          filteredProduct = data.filter((item: ProductResponse) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        setProduct(filteredProduct);
      });
  }, [search]);

  // console.log(product);

  return (
    <>
      <Header>
        <div className="w-full h-11 rounded-xl flex justify-center items-center pl-2 border-[1.5px]">
          <div>
            <IoSearch className="text-xl text-slate-400" />
          </div>
          <Input
            type="search"
            placeholder="Search your product..."
            onChange={handleSearchChange}
            value={search}
            className="w-[90%] focus:outline-none bg-transparent"
          />
        </div>
      </Header>

      <div className="w-full h-min flex p-3 gap-2  justify-center ">
        <CardStok amount={0} describe="items out of stock" />
        <CardStok amount={10} describe="Transaction " variant="blue" />
      </div>

      <div className="w-full h-min scroll-smooth p-3 mb-16 overflow-y-auto scroll-bar flex flex-col gap-2">
        {product.map((item) => (
          <div
            className="w-full h-28 rounded-2xl p-1 pr-3 flex gap-5 border"
            key={item.id}
          >
            <img
              src={item.img}
              alt="coffee"
              className="w-28 h-full rounded-xl"
            />
            <div className="flex flex-col w-full justify-evenly">
              <h1 className="text-lg font-extrabold flex">{item.name}</h1>
              <div className="flex justify-between w-full items-center h-min ">
                <p className="font-bold">
                  {new Intl.NumberFormat('id', {
                    currency: 'IDR',
                    style: 'currency',
                    maximumFractionDigits: 0,
                  }).format(item.price)}
                </p>
                <p className="font-bold w-min h-min p-1 px-4 rounded-full bg-green-100 text-green-800 text-sm text-nowrap">
                  in stock
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
