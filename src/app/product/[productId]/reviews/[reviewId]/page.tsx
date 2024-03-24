import React from "react";
import { notFound } from "next/navigation";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review Detail {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetail;
