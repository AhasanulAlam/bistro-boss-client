
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;



const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse => {
            if(imageResponse.success){
                const imageURL = imageResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name,  recipe, image: imageURL, category, price: parseFloat(price)};
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('After posting new menu item', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'New Item added successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })

    };
    
    console.log(errors);

    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>

            <div className="px-8">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs md:max-w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full max-w-xs md:max-w-full" />
                    </div>

                    <div className="flex md:flex-row">
                        <div className="form-control w-full max-w-xs md:max-w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })}
                                className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>deshi</option>
                                <option>drinks</option>
                                <option>popular</option>
                                <option>offered</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs  md:max-w-full md:ml-8">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full max-w-xs  md:max-w-full" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details"
                            {...register("recipe", { required: true })}
                        ></textarea>
                    </div>

                    <div className="my-4">
                        <input type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    </div>

                    <div className="my-4">
                        <input type="submit" value="Add Item" className="btn btn-block btn-outline btn-warning" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddItem;