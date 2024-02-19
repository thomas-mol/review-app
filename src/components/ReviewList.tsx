import React from "react";

interface Review {
  id: number;
  name: string;
  description: string;
  category: string;
}

interface Props {
  reviews: Review[];
  onDelete: (id: number) => void;
}

const ReviewList = ({ reviews, onDelete }: Props) => {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.name}</td>
            <td>{review.description}</td>
            <td>{review.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(review.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewList;
