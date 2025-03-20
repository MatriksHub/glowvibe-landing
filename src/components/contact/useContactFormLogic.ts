import { ContactFormData } from "@/types/global";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";


export function useContactFormLogic() {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Validate the form data
    const ValidateForm = useCallback(() => {
        const {firstName, lastName, email, message} = formData;

        if (!firstName || !lastName || !email || !message ) {
            setError("All fields are required.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return false;
        }

        setError("");
        return true;
    }, [formData]);

    const handleInputChange = useCallback((field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
    
        // Clear error when user types
        if (value.trim() !== "") {
        }
    }, []);

    const handleSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
       
        if (!ValidateForm()) {
            setLoading(false);
            return;
        };
        
        setLoading(true);
        setError('');

        try {
            setLoading(true);
            const response = await fetch("/api/contacts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Feedback submitted successfully')
            } else {
                toast.error('Feedback submission failed');
                setError('Feedback submission failed')
            }
        } catch (error) {
            toast.error(`An error occured. ${error}`);
            setError(`${error}`);
        } finally {
            setLoading(false);
            setError('');
        }
      },
      [formData, ValidateForm]
    );

    return useMemo(
        () => ({
            formData,
            loading,
            error,
            handleInputChange,
            handleSubmit,
        }),
        [
            formData,
            loading,
            error,
            handleInputChange,
            handleSubmit,
        ]

    );
}