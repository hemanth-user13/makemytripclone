// BookingModal.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData: {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    address: string;
    pincode: string;
  };
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  address: Yup.string().required('Address is required'),
  pincode: Yup.string().required('Pincode is required'),
});

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 mt-28  flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          {initialData ? 'Edit Booking' : 'Add Booking'}
        </h2>
        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            Swal.fire('Success', 'Your booking has been saved!', 'success');
            onSave(values);
            resetForm();
            onClose();
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <Field
                  type="text"
                  name="mobileNumber"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="mobileNumber" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <Field
                  type="text"
                  name="address"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <Field
                  type="text"
                  name="pincode"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="pincode" component="div" className="text-red-600 text-sm" />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingModal;