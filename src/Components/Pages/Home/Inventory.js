import React from "react";
import Loading from "../../Shared/Loading";
import useItems from "../../utilites/useItems";
import Items from "./Items";

const Inventory = () => {
  const [items, loading] = useItems();
  // const [items, isLoading, refetch] = useItems();

  if (loading) {
    return <Loading></Loading>;
  }

  const homeItems = items?.slice(0, 3);

  return (
    <div className=" px-5 lg:px-10 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {homeItems?.map((item) => (
        <Items item={item}></Items>
      ))}
    </div>
  );
};

export default Inventory;
