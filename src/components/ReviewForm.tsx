import { z } from "zod";
import { useForm } from "react-hook-form";
import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long." })
    .max(20),
  description: z
    .string()
    .max(50, { message: "Description can not be longer than 50 characters." }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ReviewFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ReviewFormData) => void;
}

const ReviewForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
