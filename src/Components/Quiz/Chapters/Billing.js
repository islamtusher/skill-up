import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { paySuccess } from '../../../redux/slice/billingSlice';

const Billing = ({ examType, chapter }) => {
  const dispatch = useDispatch();

  const {
    handleSubmit, register, formState: { errors }} = useForm(); // react form hook

  //TODO: Handle the bill payment
  const onSubmit = async (data) => {
    dispatch(paySuccess(false))
    // const response = await API.post("/billing", {
    //   exam_type: examType,
    //   chapter,
    //   card_number: data.card_number,
    //   pin_no: data.pinNo,
    // });
    // console.log('response', response);
  }
  return (
    <div> 
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold text-primary">
          Please Pay for This Exam
        </h1>
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Give Card No</span>
          </label>
          <input
            type="text"
            className="input border-black focus:outline-0 focus:border-primary rounded"
            {...register("card_number", {
              required: {
                value: true,
                message: "Please Give your Card No",
              },
            })}
          />
          {errors?.cardNo?.type === "required" && (
            <p className="text-red-500">{errors?.cardNo?.message}</p>
          )}
        </div>
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Card Pin No</span>
          </label>
          <input
            type="text"
            className="input border-black focus:outline-0 focus:border-primary rounded"
            {...register("pinNo", {
              required: {
                value: true,
                message: "Please Give your Card Pin No",
              },
            })}
          />
          {errors?.pinNo?.type === "required" && (
            <p className="text-red-500">{errors?.pinNo?.message}</p>
          )}
        </div>
        <div className="">
          <button
            type="submit"
            // onClick={handleBillPay}
            className={`btn mx-auto w-[150px] bg-primary`}
          >
            Bill Pay
          </button>
        </div>
      </form>
    </div>
  );
};;

export default Billing;