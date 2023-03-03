import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { porudctsActionDetail } from "../redux/actions/products.js";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  // console.log("id", id)

  useEffect(() => {
    dispatch(porudctsActionDetail(id));
  }, [dispatch]);

  console.log("product", product);

  return (
    <div>
      <img src={product.image} alt="" />
    </div>
  );
};

export default Detail;
