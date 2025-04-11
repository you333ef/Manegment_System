import React, { useEffect } from 'react';
import styles from '../Users/users.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
  id?: number;
}

interface LocationState {
  user?: FormData;
}

const Users: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  let nvi = () => {
    navigate('/dashboard/home');
  };

  const onsubmit: SubmitHandler<FormData> = async (data) => {
    if (state && state.user) {
      let userupdateid = state.user;
      try {
        const response = await axios.put(`https://dummyjson.com/users/${userupdateid.id}`, data);
        console.log(response);
        toast.success("Updated successfully!", {
          theme: "dark",
          position: "top-right", 
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/dashboard/home');
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post('https://dummyjson.com/users/add', data);
        console.log(response);
        toast.success("Saved successfully!", {
          theme: "dark",
          position: "top-right", 
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/dashboard/home');
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (state?.user) {
      let user = state.user;
      console.log("User Data from location:", user); // تأكد من البيانات
  
      let birthDateFormatted = user.birthDate ? new Date(user.birthDate).toISOString().split('T')[0] : "";
      let phoneFormatted = user.phone ? user.phone.replace(/\D/g, '') : "";
  
      setValue('firstName', user.firstName, { shouldValidate: true, shouldDirty: true });
      setValue('lastName', user.lastName, { shouldValidate: true, shouldDirty: true });
      setValue('email', user.email, { shouldValidate: true, shouldDirty: true });
      setValue('age', user.age, { shouldValidate: true, shouldDirty: true });
      setValue('phone', phoneFormatted, { shouldValidate: true, shouldDirty: true });
      setValue('birthDate', birthDateFormatted, { shouldValidate: true, shouldDirty: true });
      setValue('id', user.id);
    }
  }, [state?.user, setValue]);

  return (
    <div className={styles.coco}>
      <ToastContainer />
      <div className={`container ${styles.usersContainer}`}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row">
            <div className="col-lg-6 col-12  mb-lg-3">
              <label htmlFor="username" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="username"
                className={`form-control ${styles.input}`}
                placeholder="Enter your First Name"
                {...register('firstName', { required: 'First Name is required' })}
              />
              {errors.firstName && <p className={styles.errormessage}>{errors.firstName.message}</p>}
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="email" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="email"
                className={`form-control ${styles.input}`}
                placeholder="Enter your Last Name"
                {...register('lastName', { required: 'Last Name is required' })}
              />
              {errors.lastName && <p className={styles.errormessage}>{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="username" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="username"
                className={`form-control ${styles.input}`}
                placeholder="Enter your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Email is not valid'
                  }
                })}
              />
              {errors?.email && <p className={styles.errormessage}>{errors?.email.message}</p>}
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="email" className={styles.label}>
                Age
              </label>
              <input
                type="number"
                id="email"
                className={`form-control ${styles.input}`}
                placeholder="Enter your Age"
                {...register('age', {
                  required: 'Age is required',
                  min: {
                    value: 18,
                    message: 'Age must be at least 18'
                  },
                  max: {
                    value: 60,
                    message: 'Age must be at most 60'
                  }
                })}
              />
              {errors?.age && <p className={styles.errormessage}>{errors?.age.message}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="username" className={styles.label}>
                Phone Number
              </label>
              <input
                type="number"
                id="username"
                className={`form-control ${styles.input}`}
                placeholder="Enter your Phone Number"
                {...register('phone', {
                  required: 'phone Numper is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Phone number must be 10 digits'
                  }
                })}
              />
              {errors?.phone && <p className={styles.errormessage}>{errors?.phone.message}</p>}
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="email" className={styles.label}>
                birth Date
              </label>
              <input
                type="date"
                {...register('birthDate', {
                  required: 'Birth Date is required',
                  validate: (value) => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    if (birthDate >= today) {
                      return 'Birth date must be in the past';
                    }
                    return true;
                  }
                })}
                id="email"
                className={`form-control ${styles.input}`}
                placeholder="Enter your birth Date"
              />
              {errors?.birthDate && <p className={styles.errormessage}>{errors?.birthDate.message}</p>}
            </div>
          </div>
          <div className="text-center mt-lg-4 mt-sm-1 mt-md-2">
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Users;
