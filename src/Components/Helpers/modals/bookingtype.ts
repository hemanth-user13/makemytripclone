export interface initialData {
    firstName: string;
    lastName: string;
    Mobilenumber: string;
    email: string;
    address: string;
    pincode: string;
}

export interface BookingmodalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: initialData) => void;
    initialData: initialData;
}
