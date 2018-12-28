import { useState } from 'react';
const useCheckbox = (val = false) => {
    const [value, setValue] = useState(val);
    return [value, event => setValue(event.target.checked)];
};

export default useCheckbox;