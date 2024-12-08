export const handleChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prevData) => ({ ...prevData, [name]: value }));
};